import { Box, Heading } from "@chakra-ui/react";

const StatCard = ({ count, heading }: { count: number; heading: string }) => {
  return (
    <Box textAlign="center">
      <Box fontSize="lg">+{count}</Box>
      <Heading as="h2" size={["lg", "lg", "xl"]}>
        {heading}
      </Heading>
    </Box>
  );
};

export default StatCard;
