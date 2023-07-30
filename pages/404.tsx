import { Image, Link } from "@chakra-ui/next-js";
import { Box, Flex, Text } from "@chakra-ui/react";
import pageNotFound from "@/assets/images/404.png";

const Custom404 = () => {
  return (
    <Flex justifyContent="center" align="center" height="100vh" padding="20px">
      <Flex flexDirection="column" justifyContent="center" gap="30px">
        <Image src={pageNotFound} alt="404"></Image>
        <Text textAlign="center">
          Go back to
          <Link color="blue.500" textDecoration="underline" href="/">
            Home Page
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Custom404;
