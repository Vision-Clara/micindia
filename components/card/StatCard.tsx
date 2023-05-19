import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { AppProps } from "next/app";

const StatCard = ({
  count,
  heading,
  countColor,
}: {
  count: number;
  heading: string;
  countColor: string;
}) => {
  return (
    <Flex h="full" justify="center" align="center">
      <Box textAlign="center">
        <Text fontSize="2xl" color={countColor}>
          +{count}
        </Text>
        <Heading as="h4" size={["sm", "md", "md"]}>
          {heading}
        </Heading>
      </Box>
    </Flex>
  );
};

export default StatCard;
