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
import MapIcon from "@/components/icon/MapIcon";
import ErrorToast from "@/components/toast/ErrorToast";
import SuccessToast from "@/components/toast/SuccessToast";
import { MAP_URL } from "@/utils/constants";
import { IContactFormData } from "@/types";
import useForm from "@/hooks/useForm";
import { isFilled, isValidEmail } from "@/utils/validators";
import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";

const initialFormData = {
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
};

const Contact = () => {
  const toast = useToast();
  const [formData, isSubmitting, onChangeHandler, handleSubmit] =
    useForm<IContactFormData>({
      initialFormData,
      validator,
    });

  //validates form data
  function validator(formValues: IContactFormData) {
    if (!isFilled(formValues.name)) {
      return {
        success: false,
        field: "name",
        message: "Name is required",
      };
    }

    if (!isFilled(formValues.email)) {
      return {
        success: false,
        field: "email",
        message: "Email is required",
      };
    }

    if (!isValidEmail(formValues.email)) {
      return {
        success: false,
        field: "email",
        message: "Invalid email",
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

  //handles form submit
  const onSubmit = async () => {
    try {
      //send message
      const payload = {
        name: formData.values.name,
        email: formData.values.email,
        message: formData.values.message,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        payload
      );

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
        render: () => (
          <ErrorToast message={"Something went wrong, please try later."} />
        ),
      });
    }
  };

  return (
    <Box my={["20px", "30px", "40px"]} mx={["20px", "30px", "100px"]}>
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
          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
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
                type="text"
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
                <EmailIcon /> info@micindia.org
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
