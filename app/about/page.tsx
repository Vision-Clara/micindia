"use client";
import Layout from "@/components/layout/user/Layout";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

const About = () => {
  return (
    <Box as="main" bgImage="url(flag.jpg)" bgSize={"cover"} bgPos={"center"}>
      <VStack
        w={["80%", "80%", "2xl"]}
        marginX={"auto"}
        paddingY={"50px"}
        gap={"20px"}
        textAlign={"center"}
      >
        <VStack as="section" justifyContent={"center"}>
          <Heading as="h1" size={["md", "lg", "xl"]}>
            Our Vision
          </Heading>
          <Box
            as="div"
            h={["2px", "2px", "5px"]}
            w={["80px", "80px", "140px"]}
            bgColor={"blue.500"}
            sx={{
              transform: "skewX(-30deg)",
            }}
          ></Box>

          <Text fontSize={["sm", "md", "md"]}>
            MIC organisation vision is the economic development of poor and
            needy people in its operational area through quality education,
            training and capacity building. Eradicating poverty by providing a
            quality accesories and environment to our unprivileged ones for
            creating their strong foundation and bright future.
          </Text>
        </VStack>

        <VStack as="section" justifyContent={"center"}>
          <Heading as="h1" size={["md", "lg", "xl"]}>
            Our Mission
          </Heading>
          <Box
            as="div"
            h={["2px", "2px", "5px"]}
            w={["80px", "80px", "140px"]}
            bgColor={"blue.500"}
            sx={{
              transform: "skewX(-30deg)",
            }}
          ></Box>
          <Text fontSize={["sm", "md", "md"]}>
            Out prime focus is to Empowering the underprivileged and
            economically needful sections of society by Skill Development &
            Education, eliminating Hunger, Women & Child development,
            eliminating illiteracy, empowering and saving lives, health
            awareness and safety, 24*7 emergency support.
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default About;
