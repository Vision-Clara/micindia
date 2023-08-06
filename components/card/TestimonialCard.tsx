import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import LeftQuoteIcon from "../icon/LeftQuoteIcon";
import RightQuoteIcon from "../icon/RightQuoteIcon";
import Image, { StaticImageData } from "next/image";

const TestimonialCard = ({
  profilePhoto,
  personName,
  designation,
  message,
}: {
  profilePhoto: StaticImageData;
  personName: string;
  designation: string;
  message: string | JSX.Element;
}) => {
  return (
    <Card boxShadow="md">
      <CardBody textAlign="center">
        <Flex gap={["10px", "20px", "30px"]}>
          <Box rounded="2xl" overflow="hidden">
            <Image src={profilePhoto} alt="testimonial-photo" height={450} />
          </Box>

          <VStack
            justifyContent="center"
            gap={["10px", "20px", "30px"]}
            flex="10"
            paddingX={["10px", "20px", "25px"]}
          >
            <Box fontSize={["sm", "md", "md"]}>
              <Heading as="h3" size={["sm", "md", "lg"]}>
                {personName}
              </Heading>
              <Text>{designation}</Text>
            </Box>
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
          </VStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default TestimonialCard;
