import PasswordInput from "@/components/input/PasswordInput";
import ErrorToast from "@/components/toast/ErrorToast";
import SuccessToast from "@/components/toast/SuccessToast";
import axiosInstance from "@/utils/axiosInstance";
import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Heading } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/next-js";
import { useToast } from "@chakra-ui/toast";
import { ChangeEvent, FormEvent, useState } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const initialFormData = {
  values: {
    email: "",
    password: "",
  },
  errors: {
    email: "",
    password: "",
  },
};

const SignIn = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  // handles input changes
  const onChangeHandler = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      values: {
        ...formData.values,
        [event.target.name]: event.target.value,
      },
      errors: {
        ...formData.errors,
        [event.target.name]: "",
      },
    });
  };

  // validates input values
  const validate = () => {
    if (!formData.values.email) {
      setFormData({
        ...formData,
        errors: {
          ...formData.errors,
          email: "Email is required",
        },
      });

      return false;
    }

    if (!formData.values.password) {
      setFormData({
        ...formData,
        errors: {
          ...formData.errors,
          password: "Password is required",
        },
      });

      return false;
    }

    return true;
  };

  // handles form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);

    event.preventDefault();

    //if form data is valid
    if (validate()) {
      try {
        //send feedback
        const res = await axiosInstance.post("/auth/signin", {
          email: formData.values.email,
          password: formData.values.password,
        });

        toast({
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
          render: () => <SuccessToast message={res.data.message} />,
        });

        //reset form state
        setFormData(initialFormData);
      } catch (error: any) {
        console.log(error);

        //show error
        toast({
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
          render: () => <ErrorToast message={error.response.data.message} />,
        });
      }
    }

    setIsSubmitting(false);
  };

  return (
    <Box
      as="main"
      w={["90%", "450px", "450px"]}
      mx="auto"
      my="50px"
      p="20px"
      border="1px"
      borderRadius="5px"
      borderColor="gray.200"
    >
      <Heading as="h2" size={["lg", "lg", "xl"]}>
        Login Form
      </Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl my="20px" isInvalid={formData.errors.email !== ""}>
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={onChangeHandler}
            value={formData.values.email}
          />
          <FormErrorMessage>{formData.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl my="20px" isInvalid={formData.errors.password !== ""}>
          <FormLabel>Password</FormLabel>
          <PasswordInput
            onChange={onChangeHandler}
            value={formData.values.password}
          />
          <FormErrorMessage>{formData.errors.password}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          isLoading={isSubmitting}
          loadingText="Submitting"
          bg="blue.500"
          color="white"
          variant="outline"
          _hover={{
            color: "blue.500",
            bg: "white",
            border: "1px",
            borderColor: "blue.500",
          }}
          spinnerPlacement="start"
        >
          Submit
        </Button>
      </Box>

      <Box py="5">
        <Link color="blue.500" href="/auth/forgetpassword">
          Forget your password?
        </Link>
      </Box>
    </Box>
  );
};

export default SignIn;
