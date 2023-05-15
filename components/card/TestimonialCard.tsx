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
    <Card maxW="sm" boxShadow="md">
      <CardBody textAlign="center">
        <Stack mt="6" spacing="3">
          <Flex flexDir="column" gap="30px">
            <Flex justifyContent="center">
              <Avatar size="xl" name={personName} src={profilePhoto} />
            </Flex>

            <Box fontSize={["sm", "md", "md"]}>
              <Heading as="h3" size={["sm", "md", "lg"]}>
                {personName}
              </Heading>
              <Text>{designation}</Text>
            </Box>

            <Box p="20px" position="relative">
              <LeftQuoteIcon
                color="gray"
                position="absolute"
                left="0px"
                top="0px"
              />
              <Text fontSize={["sm", "md", "md"]}>{message}</Text>
              <RightQuoteIcon
                color="gray"
                position="absolute"
                right="0px"
                bottom="0px"
              />
            </Box>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default TestimonialCard;
