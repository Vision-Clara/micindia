import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Heading } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/next-js";
import { useToast } from "@chakra-ui/react";
import { ReactElement } from "react";
import { signIn } from "@/api/auth";
import PasswordInput from "@/components/input/PasswordInput";
import Layout from "@/components/layout/user/Layout";
import ErrorToast from "@/components/toast/ErrorToast";
import SuccessToast from "@/components/toast/SuccessToast";
import useForm from "@/hooks/useForm";
import { ISignUpFormData } from "@/types";

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

  const [formData, isSubmitting, onChangeHandler, handleSubmit] =
    useForm<ISignUpFormData>({
      initialFormData,
      validator,
    });

  const onSubmit = async () => {
    try {
      //signin
      const payload = {
        email: formData.values.email,
        password: formData.values.password,
      };
      await signIn(payload);

      //show success toast
      toast({
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
        render: () => <SuccessToast message="User Logged In" />,
      });
    } catch (error: any) {
      //show error toast
      toast({
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
        render: () => <ErrorToast message={error.response.data.message} />,
      });
    }
  };

  function validator(formValues: ISignUpFormData) {
    if (!formValues.email) {
      return {
        success: false,
        field: "email",
        message: "Email is required",
      };
    }

    if (!formValues.password) {
      return {
        success: false,
        field: "password",
        message: "Password is required",
      };
    }

    return {
      success: true,
      field: "",
      message: "",
    };
  }

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
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
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

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SignIn;
