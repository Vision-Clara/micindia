import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import LeftQuoteIcon from "../icon/LeftQuoteIcon";
import RightQuoteIcon from "../icon/RightQuoteIcon";
import { useEffect, useState } from "react";

const TestimonialCard = ({
  profilePhoto,
  personName,
  designation,
  message,
}: {
  profilePhoto: string;
  personName: string;
  designation: string;
  message: string;
}) => {
  return (
    <Card boxShadow="md">
      <CardBody textAlign="center">
        <Stack spacing="3">
          <Flex flexDir="column" gap="30px">
            <Flex
              direction={["row", "column"]}
              alignItems={["center"]}
              gap="20px"
            >
              <Flex justifyContent="center">
                <Avatar
                  size={["md", "xl"]}
                  name={personName}
                  src={profilePhoto}
                />
              </Flex>

              <Box fontSize={["sm", "md", "md"]}>
                <Heading as="h3" size={["sm", "md", "lg"]}>
                  {personName}
                </Heading>
                <Text>{designation}</Text>
              </Box>
            </Flex>

            <Box p={["10px", "20px"]} position="relative">
              <LeftQuoteIcon
                color="blue.500"
                position="absolute"
                left="0px"
                top="0px"
                boxSize={["15px", " 20px"]}
              />
              <Text fontSize={["sm", "md", "md"]}>{message}</Text>
              <RightQuoteIcon
                color="blue.500"
                position="absolute"
                right="0px"
                bottom="0px"
                boxSize={["15px", " 20px"]}
              />
            </Box>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default TestimonialCard;
