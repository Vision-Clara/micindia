import { Box, Flex, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import { Link, Image } from "@chakra-ui/next-js";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ReactElement } from "react";
import Head from "next/head";

import { features, testimonials, collabs, achievements } from "@/sampleData";
import FeatureCard from "@/components/card/FeatureCard";
import StatCard from "@/components/card/StatCard";
import EventCard from "@/components/card/EventCard";
import TestimonialCard from "@/components/card/TestimonialCard";
import Crousal from "@/components/crousal/Crousal";
import AwardIcon from "@/components/icon/AwardIcon";
import Layout from "@/components/layout/user/Layout";
import { IEvent } from "@/types";
import { getAllEvents } from "@/api/event";

export const getStaticProps: GetStaticProps<{
  events: IEvent[];
}> = async () => {
  try {
    const events = await getAllEvents();

    return { props: { events } };
  } catch (error: any) {
    return { props: { events: [] } };
  }
};

const Home = ({ events }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>MIC Organisation India | We Rise By Lifting Others</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/favicon.ico" rel="icon"></link>
      </Head>
      <Box>
        {/* hero section */}
        <Box
          as="section"
          position="relative"
          h={["50vh", "70vh", "90vh"]}
          bgImage={"url('./banner.jpg')"}
          bgSize="cover"
          bgPos="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            as="h1"
            size={["md", "lg", "xl"]}
            backgroundColor="orange.300"
            w="fit"
            px={["20px", "24px", "30px"]}
            py={["10px", "12px", "15px"]}
            textAlign="center"
            background="blackAlpha.600"
            color="white"
          >
            Empowering Communities, <br /> Building a Better Society
          </Heading>
          <Heading
            position="absolute"
            bottom="5vh"
            left="0px"
            as="h3"
            size={["sm", "md", "lg"]}
            backgroundColor="orange.300"
            w="fit"
            p={["10px", "12px", "15px"]}
            textAlign="center"
            background="blue.500"
            color="white"
            borderEndEndRadius="10px"
          >
            <i> We Rise By Lifting Others</i>
          </Heading>
        </Box>

        {/* features section */}
        <Box as="section" my={["20px", "30px", "40px"]}>
          <Heading
            as="h1"
            size={["md", "lg", "xl"]}
            textAlign="center"
            mx={["20px", "30px", "40px"]}
            my={["20px", "30px", "40px"]}
          >
            Our Focus
          </Heading>
          <Flex
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap={["10px", "20px", "30px"]}
            mx={["20px", "30px", "40px"]}
          >
            {features.map((item, index) => {
              return (
                <FeatureCard
                  key={item.id}
                  featureDesc={item.featureDesc}
                  featureHeading={item.featureHeading}
                  featureSlogan={item.featureSlogan}
                  featureImage={item.featureImage}
                />
              );
            })}
          </Flex>
        </Box>

        {/* achivements */}
        <Box
          as="section"
          my={["20px", "30px", "40px"]}
          py={["10px", "20px", "30px"]}
          bg="blackAlpha.800"
        >
          <Heading
            as="h1"
            size={["md", "lg", "xl"]}
            textAlign="center"
            mx={["20px", "30px", "40px"]}
            my={["20px", "30px", "40px"]}
            color="white"
          >
            Achievements & Awards
          </Heading>

          <Grid
            templateRows={[
              "repeat(11, 1fr)",
              "repeat(11, 1fr)",
              "repeat(6, 1fr)",
            ]}
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
            ]}
            mx={["20px", "30px", "40px"]}
            color="white"
            columnGap="40px"
            rowGap={["10px", "10px", "20px"]}
            mb={["20px", "30px", "40px"]}
            h={["250px", "300px", "500px"]}
            overflow={["scroll", "scroll", "hidden"]}
          >
            {achievements &&
              achievements.map((item) => {
                return (
                  <GridItem key={item.id}>
                    <Flex color="white" gap="10px">
                      <Box borderStartRadius="5px">
                        <AwardIcon />
                      </Box>
                      <Box fontSize={["sm", "md", "lg"]} borderEndRadius="5px">
                        <Text>{item.name}</Text>
                      </Box>
                    </Flex>
                  </GridItem>
                );
              })}
          </Grid>

          <Grid
            templateRows={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(1, 1fr)",
            ]}
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={4}
            mx={["20px", "30px", "40px"]}
          >
            <GridItem p="20px" bgColor="white">
              <StatCard count={3000} heading="Drives" countColor="red.500" />
            </GridItem>
            <GridItem bgColor="white" p="20px">
              <StatCard count={100} heading="Events" countColor="red.500" />
            </GridItem>
            <GridItem bgColor="white" p="20px">
              <StatCard count={300} heading="Volunteers" countColor="red.500" />
            </GridItem>
            <GridItem bgColor="white" p="20px">
              <StatCard count={50} heading="Blood Camps" countColor="red.500" />
            </GridItem>
          </Grid>
        </Box>

        {/* events section */}
        {events.length !== 0 && (
          <Box as="section" my={["20px", "30px", "40px"]}>
            <Heading
              as="h1"
              size={["md", "lg", "xl"]}
              textAlign="center"
              mb={["20px", "30px", "40px"]}
            >
              Recent Events
            </Heading>
            <Flex
              justify="space-between"
              flexWrap="wrap"
              gap={["10px", "20px", "30px"]}
              mx={["20px", "30px", "40px"]}
            >
              {events.map((item) => {
                return (
                  <Box maxW={["100%", "350px", "380px"]} key={item._id}>
                    <EventCard
                      eventName={item.eventName}
                      eventDesc={item.eventDesc}
                      eventPoster={item.eventPoster}
                      eventDate={item.eventDate}
                      eventLocation={item.eventLocation}
                    />
                  </Box>
                );
              })}
            </Flex>
          </Box>
        )}

        {/* testimonials section */}
        {testimonials.length !== 0 && (
          <Box
            as="section"
            mt={["20px", "30px", "40px"]}
            py={["10px", "20px", "30px"]}
            bg="blackAlpha.800"
            color="white"
          >
            <Heading
              as="h1"
              size={["md", "lg", "xl"]}
              textAlign="center"
              my={["20px", "30px", "40px"]}
            >
              Testimonials
            </Heading>
            <Flex
              justify="space-between"
              flexWrap="wrap"
              mx={["20px", "30px", "40px"]}
              gap={["10px", "20px", "30px"]}
            >
              {testimonials.map((item) => {
                return (
                  <Box maxW={["100%", "300px", "350px"]} key={item.id}>
                    <TestimonialCard
                      profilePhoto={item.profilePhoto}
                      personName={item.personName}
                      designation={item.designation}
                      message={item.message}
                    />
                  </Box>
                );
              })}
            </Flex>
          </Box>
        )}

        {/* join section */}
        <Box as="section" bg="blackAlpha.800">
          <Flex
            align="center"
            justify="space-between"
            gap="30px"
            flexWrap="wrap"
            mx={["20px", "30px", "40px"]}
            py="30px"
          >
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize={["2xl", "4xl"]}
              fontWeight="extrabold"
            >
              Together, We Can Change the World!
            </Text>
            <Box>
              <Link
                mx="auto"
                w="150px"
                px="20px"
                py="15px"
                border="1px"
                borderColor="red.500"
                bgColor="red.500"
                color="white"
                cursor="pointer"
                mt="20px"
                sx={{
                  transition: "all 100ms ease-in-out",
                  ":hover": {
                    bgColor: "white",
                    color: "red.500",
                  },
                }}
                fontSize={["lg", "xl", "3xl"]}
                href="/join"
              >
                Join Us
              </Link>
            </Box>
          </Flex>
        </Box>

        {/* supporters section */}
        <Box as="section" my={["20px", "30px", "40px"]}>
          <Heading
            as="h1"
            size={["md", "lg", "xl"]}
            textAlign="center"
            mb={["20px", "30px", "40px"]}
          >
            Our Suppoters
          </Heading>
          <Box>
            <Crousal totalItems={11} itemWidth={100} gap={60}>
              {collabs.map((item) => {
                return (
                  <Flex key={item.id} w="100px" flex="none" alignItems="center">
                    <Box>
                      <Image
                        w="full"
                        src={item.logo}
                        alt="collab"
                        borderRadius="10px"
                      />
                    </Box>
                  </Flex>
                );
              })}
            </Crousal>
          </Box>
        </Box>
      </Box>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
