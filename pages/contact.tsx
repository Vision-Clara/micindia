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
} from "@chakra-ui/react";

import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import MapIcon from "@/components/icon/MapIcon";

const Contact = () => {
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
          <Box as="form">
            <FormControl my="20px">
              <FormLabel>Contact Email</FormLabel>
              <Input type="email" placeholder="Enter your email address" />
            </FormControl>
            <FormControl my="20px">
              <FormLabel>Full Name</FormLabel>
              <Input type="text" placeholder="Enter you full name" />
            </FormControl>
            <FormControl my="20px">
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message Please" height="200px" />
            </FormControl>
            <Button
              isLoading={false}
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
            <Box>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7767585.955997126!2d73.21198140491195!3d18.08235747816146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xade6bce9e5b05c7d%3A0xadcf1a39be239e81!2sMIC%20Organisation%20India!5e0!3m2!1sen!2sin!4v1684344366065!5m2!1sen!2sin"
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
