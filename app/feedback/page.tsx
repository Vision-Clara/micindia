"use client";
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Textarea,
  Heading,
  Button,
  FormErrorMessage,
  useToast,
  Select,
} from "@chakra-ui/react";

import SuccessToast from "@/components/toast/SuccessToast";
import ErrorToast from "@/components/toast/ErrorToast";
import useForm from "@/hooks/useForm";
import { IFeedbackFormData } from "@/types";
import { isFilled } from "@/utils/validators";
import { sendFeedback } from "@/api/feedback";
import axios from "axios";

const initialFormData = {
  values: {
    name: "",
    type: "",
    message: "",
  },
  errors: {
    name: "",
    type: "",
    message: "",
  },
};

const Feedback = () => {
  const toast = useToast();
  const [formData, isSubmitting, onChangeHandler, handleSubmit] =
    useForm<IFeedbackFormData>({
      initialFormData,
      validator,
    });

  // validates input values
  function validator(formValues: IFeedbackFormData) {
    if (!isFilled(formValues.name)) {
      return {
        success: false,
        field: "name",
        message: "Name is required",
      };
    }

    if (!isFilled(formValues.type)) {
      return {
        success: false,
        field: "type",
        message: "Feedback type is required",
      };
    }

    if (!isFilled(formValues.message)) {
      return {
        success: false,
        field: "message",
        message: "Message is required",
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
        name: formData.values.name,
        type: formData.values.type,
        message: formData.values.message,
      };
      const response = await axios.post(`/api/feedback`, payload);

      if (response.status === 200) {
        toast({
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
          render: () => <SuccessToast message="Thank you for contacting us." />,
        });
      } else {
        //show error
        toast({
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
          render: () => (
            <ErrorToast message={"Something went wrong, please try later."} />
          ),
        });
      }
    } catch (error: any) {
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
      w={["90%", "450px", "450px"]}
      mx="auto"
      my="50px"
      p="20px"
      border="1px"
      borderRadius="5px"
      borderColor="gray.200"
    >
      <Heading as="h2" size={["lg", "lg", "xl"]}>
        Feedback Form
      </Heading>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl my="20px" isInvalid={formData.errors.name !== ""}>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter you full name"
            name="name"
            onChange={onChangeHandler}
            value={formData.values.name}
          />
          <FormErrorMessage>{formData.errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl my="20px" isInvalid={formData.errors.type !== ""}>
          <FormLabel>It&apos;s Regarding?</FormLabel>
          <Select
            name="type"
            onChange={onChangeHandler}
            placeholder="Choose One"
            value={formData.values.type}
          >
            <option value="Website">Website</option>
            <option value="MIC Organisation">MIC Organisation</option>
          </Select>
          <FormErrorMessage>{formData.errors.type}</FormErrorMessage>
        </FormControl>

        <FormControl my="20px" isInvalid={formData.errors.message !== ""}>
          <FormLabel>Your Messages</FormLabel>
          <Textarea
            placeholder="Type you message here"
            height="200px"
            onChange={onChangeHandler}
            name="message"
            value={formData.values.message}
          />
          <FormErrorMessage>{formData.errors.message}</FormErrorMessage>
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

export default Feedback;
