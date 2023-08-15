import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Hide,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import LeftQuoteIcon from "../icon/LeftQuoteIcon";
import RightQuoteIcon from "../icon/RightQuoteIcon";
import { StaticImageData } from "next/image";
import { Image } from "@chakra-ui/next-js";
import { useState } from "react";

const TestimonialCard = ({
  profilePhoto,
  personName,
  designation,
  message,
}: {
  profilePhoto: StaticImageData;
  personName: string;
  designation: string;
  message: string;
}) => {
  const [isRead, setIsRead] = useState(false);

  const readHandler = () => {
    setIsRead(!isRead);
  };

  return (
    <Card boxShadow="md">
      <CardBody textAlign="center">
        <Flex
          gap={["10px", "20px", "30px"]}
          direction={["column", "column", "column", "row"]}
        >
          <Box marginX="auto" overflow="hidden" flex="6">
            <Image
              src={profilePhoto}
              alt="testimonial-photo"
              rounded={["full", "full", "full", "2xl"]}
              boxSize={["100px", "150px", "150px", "full"]}
            />
          </Box>

          <VStack
            flex="9"
            justifyContent="center"
            gap={["10px", "20px", "30px"]}
            paddingX={["5px", "20px", "25px"]}
          >
            <Box>
              <Heading as="h3" size={["sm", "md", "lg"]}>
                {personName}
              </Heading>
              <Text fontSize={["xs", "sm", "md"]}>{designation}</Text>
            </Box>
            <Box p={["10px", "20px"]} position="relative">
              <LeftQuoteIcon
                color="blue.500"
                position="absolute"
                left="0px"
                top="0px"
                boxSize={["15px", " 20px"]}
              />
              <Show above="lg">
                <Text fontSize={["xs", "sm", "md"]}>{message}</Text>
              </Show>
              <Hide above="lg">
                <Text
                  fontSize={["xs", "sm", "md"]}
                  overflow="scroll"
                  height={isRead ? "120px" : "initial"}
                >
                  {message.slice(0, 205)}
                  {isRead ? message.slice(205) : " "}
                  <Box as="button" color="blue.500" onClick={readHandler}>
                    {!isRead ? "Read More..." : "Read Less"}
                  </Box>
                </Text>{" "}
              </Hide>

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
