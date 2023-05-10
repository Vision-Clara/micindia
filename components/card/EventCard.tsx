import { Image, Link } from "@chakra-ui/next-js";
import {
  Heading,
  Card,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Divider,
  Box,
  Flex,
} from "@chakra-ui/react";

import { CalendarIcon } from "@chakra-ui/icons";

import flag from "/assets/bg/flag.jpg";
import MapIcon from "../icon/MapIcon";
import InstaIcon from "../icon/InstaIcon";
import TwitterIcon from "../icon/TwitterIcon";
import { StaticImageData } from "next/image";

const EventCard = ({
  eventHeading,
  eventImage,
  eventDesc,
  eventDate,
  eventLocation,
}: {
  eventHeading: string;
  eventImage: StaticImageData;
  eventDesc: string;
  eventDate: string;
  eventLocation: string;
}) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={eventImage}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading as="h2" size={["sm", "sm", "md"]}>
            {eventHeading}
          </Heading>
          <Text fontSize={["sm", "md", "md"]}>{eventDesc}</Text>
          <Flex gap="3">
            <Flex
              alignItems="center"
              gap="1"
              borderRadius="5px"
              px="10px"
              py="5px"
              w="fit-content"
              backgroundColor="blue.500"
              color="white"
            >
              <CalendarIcon boxSize={4} color="yellow" />
              <Text fontWeight="bold" fontSize="sm">
                {eventDate}
              </Text>
            </Flex>

            <Flex
              alignItems="center"
              gap="1"
              borderRadius="5px"
              px="10px"
              py="5px"
              w="fit-content"
              backgroundColor="blue.500"
              color="white"
            >
              <MapIcon color="yellow" />
              <Text fontWeight="bold" fontSize="sm">
                {eventLocation}
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex gap="3" alignItems="center">
          <Link href="/">
            <Box>
              <InstaIcon color="gray" />
            </Box>
          </Link>
          <Link href="/">
            <Box>
              <TwitterIcon color="gray" />
            </Box>
          </Link>
          <Text fontSize="sm">Like, Comment & Share</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
