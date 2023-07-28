import { forgetPassword } from "@/api/auth";
import Layout from "@/components/layout/user/Layout";
import ErrorToast from "@/components/toast/ErrorToast";
import SuccessToast from "@/components/toast/SuccessToast";
import useForm from "@/hooks/useForm";
import { IForgetPassFormData } from "@/types";
import { isFilled } from "@/utils/validators";
import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Heading } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { ReactElement } from "react";

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
  const [formData, isSubmitting, onChangeHandler, handleSubmit] =
    useForm<IForgetPassFormData>({ initialFormData, validator });

  // validates input values
  function validator(formValues: IForgetPassFormData) {
    if (isFilled(formValues.email)) {
      return {
        success: false,
        field: "email",
        message: "Email is required",
      };
    }

    return {
      success: true,
      field: "",
      message: "",
    };
  }

  // handles form submission
  const onSubmit = async () => {
    try {
      //send feedback
      const payload = {
        email: formData.values.email,
      };

      await forgetPassword(payload);

      toast({
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
        render: () => (
          <SuccessToast message="Password reset link has been sent to your email address" />
        ),
      });
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
