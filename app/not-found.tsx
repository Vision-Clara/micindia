"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import pageNotFound from "@/assets/images/404.png";
import { ReactPropTypes } from "react";
import Image from "next/image";
import Link from "next/link";

const Custom404 = (props: ReactPropTypes) => {
  return (
    <Flex justifyContent="center" align="center" height="100vh" padding="20px">
      <Flex flexDirection="column" justifyContent="center" gap="30px">
        <Image src={pageNotFound} alt="404"></Image>
        <Text textAlign="center" textDecoration="underline">
          Go back to
          <Link color="blue.500" href="/">
            Home Page
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Custom404;
