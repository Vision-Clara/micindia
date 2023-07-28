import Layout from "@/components/layout/user/Layout";
import ErrorToast from "@/components/toast/ErrorToast";
import SuccessToast from "@/components/toast/SuccessToast";
import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Heading } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const initialFormData = {
  values: {
    email: "",
  },
  errors: {
    email: "",
  },
};

const ForgetPassword = () => {
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
        const res = await axios.post(`${API_URL}/auth/forget-password`, {
          email: formData.values.email,
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
        Forget Password
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
          Submit Request
        </Button>
      </Box>
    </Box>
  );
};

ForgetPassword.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ForgetPassword;
