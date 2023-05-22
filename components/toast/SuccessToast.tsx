import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const SuccessToast = ({ message }: { message: string }) => {
  return (
    <Flex
      direction="row"
      gap="10px"
      align="center"
      color="white"
      p={3}
      bg="blue.500"
      borderRadius="5px"
    >
      <InfoIcon />
      <Text fontSize={["sm", "md", "md"]}>{message}</Text>
    </Flex>
  );
};

export default SuccessToast;
