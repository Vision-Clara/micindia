import { Box, Heading, Text } from "@chakra-ui/react";

const StatCard = ({ count, heading }: { count: number; heading: string }) => {
  return (
    <Box textAlign="center">
      <Text fontSize="lg">+{count}</Text>
      <Heading as="h3" size={["sm", "md", "lg"]}>
        {heading}
      </Heading>
    </Box>
  );
};

export default StatCard;
