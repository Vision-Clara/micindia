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
import LocationIcon from "../icon/LocationIcon";
import InstaIcon from "../icon/InstaIcon";
import TwitterIcon from "../icon/TwitterIcon";

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
  const formatedDate = new Date(eventDate).toDateString();

  return (
    <Card maxW="sm">
      <CardBody>
        <Box position="relative" h="200">
          <Image
            src={eventPoster}
            alt="mic event poster"
            borderRadius="lg"
            fill={true}
          />
        </Box>

        <Stack mt="6" spacing="3">
          <Heading as="h3" size={["sm", "md", "lg"]}>
            {eventName}
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
              <CalendarIcon color="yellow" />
              <Text fontWeight="bold" fontSize="sm">
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
