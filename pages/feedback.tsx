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
import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  ReactEventHandler,
  useState,
} from "react";
import axios from "axios";

import SuccessToast from "@/components/toast/SuccessToast";
import ErrorToast from "@/components/toast/ErrorToast";
import Layout from "@/components/layout/user/Layout";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Feedback = () => {
  const toast = useToast();

  // form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
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
  });

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
    if (!formData.values.name) {
      setFormData({
        ...formData,
        errors: {
          ...formData.errors,
          name: "Name is required",
        },
      });

      return false;
    }

    if (!formData.values.type) {
      setFormData({
        ...formData,
        errors: {
          ...formData.errors,
          type: "Please choose one",
        },
      });

      return false;
    }

    if (!formData.values.message) {
      setFormData({
        ...formData,
        errors: {
          ...formData.errors,
          message: "Feedback message is required",
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
        const res = await axios.post(`${API_URL}/feedback`, {
          name: formData.values.name,
          type: formData.values.type,
          message: formData.values.message,
        });

        toast({
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
          render: () => <SuccessToast message={res.data.message} />,
        });
      } catch (error: any) {
        //show error
        toast({
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
          render: () => <ErrorToast message={error.message} />,
        });
      }

      //reset form state
      setFormData({
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
      });
    }

    setIsSubmitting(false);
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
      <Box as="form" onSubmit={handleSubmit}>
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

Feedback.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Feedback;
