import { InfoIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";

const ErrorToast = ({ message }: { message: string }) => {
  return (
    <Flex
      direction="row"
      gap="10px"
      align="center"
      color="white"
      p={3}
      bg="red.500"
      borderRadius="5px"
    >
      <InfoIcon />
      <Text fontSize={["sm", "md", "md"]}>{message}</Text>
    </Flex>
  );
};

export default ErrorToast;
