"use client";
import PasswordInput from "@/components/input/PasswordInput";
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
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Layout from "@/components/layout/user/Layout";
import { IResetPassFormData } from "@/types";
import { isFilled } from "@/utils/validators";
import useForm from "@/hooks/useForm";
import { resetPassword } from "@/api/auth";

const initialFormData = {
  values: {
    password: "",
    confirmPassword: "",
  },
  errors: {
    password: "",
    confirmPassword: "",
  },
};

const PasswordReset = () => {
  const toast = useToast();
  const [formData, isSubmitting, onChangeHandler, handleSubmit] =
    useForm<IResetPassFormData>({ initialFormData, validator });

  const router = useRouter();
  const querry = useSearchParams();
  const id = querry.get("id");
  const token = querry.get("token");

  // validates input values
  function validator(formValues: IResetPassFormData) {
    if (isFilled(formValues.password)) {
      return {
        success: false,
        field: "password",
        message: "Password is required",
      };
    }

    if (isFilled(formValues.confirmPassword)) {
      return {
        success: false,
        field: "confirmPassword",
        message: "confirmPassword is required",
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
        password: formData.values.password,
        confirmPassword: formData.values.confirmPassword,
      };

      const params = {
        id,
        token,
      };

      await resetPassword(payload, params);

      toast({
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
        render: () => <SuccessToast message="Password Reset Successfully" />,
      });

      //navigate to login
      router.push("/auth/signin");
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
        Reset Password
      </Heading>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl my="20px" isInvalid={formData.errors.password !== ""}>
          <FormLabel>New Password</FormLabel>
          <PasswordInput
            onChange={onChangeHandler}
            value={formData.values.password}
          />
          <FormErrorMessage>{formData.errors.password}</FormErrorMessage>
        </FormControl>

        <FormControl
          my="20px"
          isInvalid={formData.errors.confirmPassword !== ""}
        >
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="text"
            placeholder="Enter new password again"
            name="confirmPassword"
            onChange={onChangeHandler}
            value={formData.values.confirmPassword}
          />
          <FormErrorMessage>{formData.errors.confirmPassword}</FormErrorMessage>
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
    </Box>
  );
};

PasswordReset.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PasswordReset;
