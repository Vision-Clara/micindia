import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack,
  AspectRatio,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

import MapIcon from "@/components/icon/MapIcon";
import ErrorToast from "@/components/toast/ErrorToast";
import SuccessToast from "@/components/toast/SuccessToast";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7767585.955997126!2d73.21198140491195!3d18.08235747816146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xade6bce9e5b05c7d%3A0xadcf1a39be239e81!2sMIC%20Organisation%20India!5e0!3m2!1sen!2sin!4v1684344366065!5m2!1sen!2sin";

const Contact = () => {
  const toast = useToast();

  //form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    values: {
      name: "",
      email: "",
      message: "",
    },
    errors: {
      name: "",
      email: "",
      message: "",
    },
  });

  //handles input changes
  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  //validates form data
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

    if (!formData.values.message) {
      setFormData({
        ...formData,
        errors: {
          ...formData.errors,
          message: "Message is required",
        },
      });

      return false;
    }

    return true;
  };

  //handles form submit
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);

    event.preventDefault();
    //if form data is valid
    if (validate()) {
      try {
        //send message
        const res = await axios.post(`${API_URL}/contact`, {
          name: formData.values.name,
          email: formData.values.email,
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
    }
    setIsSubmitting(false);
  };

  return (
    <Box as="main" my={["20px", "30px", "40px"]} mx={["20px", "30px", "100px"]}>
      <Stack spacing="50px" direction={["column", "row"]}>
        <Box
          border="1px"
          w="100%"
          borderRadius="5px"
          p="20px"
          borderColor="gray.200"
        >
          <Heading as="h2" size={["lg", "lg", "xl"]}>
            Contact Form
          </Heading>
          <Box as="form" onSubmit={handleSubmit}>
            <FormControl my="20px" isInvalid={formData.errors.name !== ""}>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Enter you full name"
                value={formData.values.name}
                onChange={onChangeHandler}
              />
              <FormErrorMessage>{formData.errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl my="20px" isInvalid={formData.errors.email !== ""}>
              <FormLabel>Contact Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.values.email}
                onChange={onChangeHandler}
              />
              <FormErrorMessage>{formData.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl my="20px" isInvalid={formData.errors.message !== ""}>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                placeholder="Your Message Please"
                height="200px"
                value={formData.values.message}
                onChange={onChangeHandler}
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
        <Box w="100%">
          <Box>
            <Heading as="h2" my="10px" size={["lg", "lg", "xl"]}>
              Visit Our Office
            </Heading>
            <Box fontSize={["sm", "md", "md"]}>
              <Box my="2">
                <MapIcon /> MIC 354 Ring Road, Piplya Rao Indore (M.P.)
              </Box>
              <Box my="2">
                <EmailIcon /> micorganisationindia@gmail.com
              </Box>
              <Box my="2">
                <PhoneIcon />
                +91 8104744738
              </Box>
            </Box>
            <Box
              border="1px"
              borderRadius="5px"
              borderColor="gray.200"
              overflow="hidden"
              p="20px"
              boxShadow="md"
            >
              <AspectRatio ratio={10 / 10}>
                <iframe
                  src={MAP_URL}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </AspectRatio>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
