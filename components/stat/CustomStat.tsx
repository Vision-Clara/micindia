import { Box, Flex, Heading } from "@chakra-ui/react";

const CustomStat = () => {
  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      justify="space-between"
      flexWrap="wrap"
    >
      <Box textAlign="center">
        <Box>+200</Box>
        <Heading as="h2" size={["md", "lg", "xl"]}>
          Volunteers
        </Heading>
      </Box>
      <Box textAlign="center">
        <Box>+200</Box>
        <Heading as="h2" size={["md", "lg", "xl"]}>
          Volunteers
        </Heading>
      </Box>
      <Box textAlign="center">
        <Box>+200</Box>
        <Heading as="h2" size={["md", "lg", "xl"]}>
          Volunteers
        </Heading>
      </Box>
      <Box textAlign="center">
        <Box>+200</Box>
        <Heading as="h2" size={["md", "lg", "xl"]}>
          Volunteers
        </Heading>
      </Box>
    </Flex>
  );
};

export default CustomStat;
