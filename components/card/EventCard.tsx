import { Image, Link } from "@chakra-ui/next-js";
import {
  Heading,
  Card,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";

import { CalendarIcon } from "@chakra-ui/icons";

import flag from "/assets/bg/flag.jpg";
import MapIcon from "../icon/MapIcon";
import InstaIcon from "../icon/InstaIcon";
import TwitterIcon from "../icon/TwitterIcon";

const EventCard = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={flag}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading as="h2" size={["sm", "sm", "md"]}>
            Living room Sofa
          </Heading>
          <Text fontSize={["sm", "md", "md"]}>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
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
                10-03-11
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
                Indore
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
