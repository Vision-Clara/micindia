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
  AspectRatio,
} from "@chakra-ui/react";

import { CalendarIcon } from "@chakra-ui/icons";
import LocationIcon from "../icon/LocationIcon";
import InstaIcon from "../icon/InstaIcon";
import TwitterIcon from "../icon/TwitterIcon";
import { useState } from "react";

const EventCard = ({
  eventName,
  eventPoster,
  eventDesc,
  eventDate,
  eventLocation,
}: {
  eventName: string;
  eventPoster: string;
  eventDesc: string;
  eventDate: string;
  eventLocation: string;
}) => {
  const [isRead, setIsRead] = useState(false);
  const formatedDate = new Date(eventDate).toDateString();

  const readHandler = () => {
    setIsRead(!isRead);
  };

  return (
    <Card h="full">
      <CardBody>
        <AspectRatio ratio={10 / 6}>
          <Image
            src={eventPoster}
            alt="mic event poster"
            borderRadius="lg"
            fill={true}
          />
        </AspectRatio>

        <Stack mt="6" spacing="3">
          <Heading as="h3" size={["sm", "md", "lg"]}>
            {eventName}
          </Heading>
          <Text fontSize={["sm", "md", "lg"]}>
            {eventDesc.slice(0, 120)}
            {isRead ? eventDesc.slice(120) : " "}
            {!isRead && (
              <Box as="button" color="blue.500" onClick={readHandler}>
                Read More...
              </Box>
            )}
          </Text>
        </Stack>
      </CardBody>

      <CardFooter>
        <Stack>
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
              <CalendarIcon color="yellow" />
              <Text fontWeight="bold" fontSize="xs">
                {formatedDate}
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
              <LocationIcon color="yellow" />
              <Text fontWeight="bold" fontSize="xs">
                {eventLocation}
              </Text>
            </Flex>
          </Flex>

          <Divider />
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
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
