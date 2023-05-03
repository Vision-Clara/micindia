import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Input,
  Textarea,
  Heading,
  Button,
} from "@chakra-ui/react";

const Feedback = () => {
  return (
    <Box
      w={["90%", "450px", "450px"]}
      mx="auto"
      my="10px"
      p="20px"
      border="1px"
      borderRadius="5px"
      borderColor="gray.200"
    >
      <Heading as="h2" size={["lg", "lg", "xl"]}>
        Feedback Form
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
          <FormLabel>Feedback</FormLabel>
          <Textarea placeholder="Your Feedback Please" height="200px" />
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
  );
};

export default Feedback;
