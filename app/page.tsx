"use client";

import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  AspectRatio,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  features,
  testimonials,
  collabs,
  achievements,
  meetCities,
  events,
} from "@/sampleData";
import FeatureCard from "@/components/card/FeatureCard";
import StatCard from "@/components/card/StatCard";
import EventCard from "@/components/card/EventCard";
import TestimonialCard from "@/components/card/TestimonialCard";
import Crousal from "@/components/crousal/Crousal";
import AwardIcon from "@/components/icon/AwardIcon";
import ACrousal from "@/components/crousal/ACrousal";
import ASlide from "@/components/crousal/ASlide";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const Home = () => {
  return (
    <>
      <Head>
        <title>MIC Organisation India | We Rise By Lifting Others</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
        integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <Box backgroundColor="whiteAlpha.50">
        {/* hero section */}
        <Swiper
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <Box
              as="section"
              position="relative"
              h={["50vh", "70vh", "90vh"]}
              bgImage={"url('./assets/banner1.jpg')"}
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
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="section"
              position="relative"
              h={["50vh", "70vh", "90vh"]}
              bgImage={"url('./assets/banner2.jpeg')"}
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
                Creating Hope, <br /> Transforming Futures
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
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="section"
              position="relative"
              h={["50vh", "70vh", "90vh"]}
              bgImage={"url('./assets/banner3.jpeg')"}
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
                Serving with Love, <br /> Sowing Seeds of Change
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
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="section"
              position="relative"
              h={["50vh", "70vh", "90vh"]}
              bgImage={"url('./assets/banner4.jpeg')"}
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
                Together We Can Make a Difference
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
          </SwiperSlide>
        </Swiper>

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
                  featureImages={item.featureImages}
                />
              );
            })}
          </Flex>
        </Box>

        {/* meet our cities */}
        <Box as="section" my={["20px", "30px", "40px"]}>
          <Heading
            as="h1"
            size={["md", "lg", "xl"]}
            textAlign="center"
            mx={["20px", "30px", "40px"]}
            my={["20px", "30px", "40px"]}
          >
            Meet Our Cities
          </Heading>
          <Box gap={["10px", "20px", "100px"]} mx={["20px", "30px", "40px"]}>
            <ACrousal height={["480px", "480px", "420px"]} isNavigation>
              {meetCities.map((city, index) => {
                return (
                  <ASlide key={index}>
                    <Flex
                      direction={["column", "column", "row"]}
                      justifyContent="space-between"
                      alignItems={["center", "center", "flex-start"]}
                      padding={["10px", "20px", "30px"]}
                      margin={["10px", "20px", "30px"]}
                      gap={["10px", "20px", "30px"]}
                      backgroundColor="orange.50"
                      shadow={"md"}
                      rounded="md"
                    >
                      <Stack spacing="20px">
                        <Heading
                          as="h2"
                          size={["sm", "md", "lg"]}
                          color="blue.500"
                        >
                          {city.name}
                        </Heading>

                        <Box fontSize={["xs", "sm", "md"]}>{city.desc}</Box>
                      </Stack>
                      <Box flex={1}>
                        <AspectRatio
                          ratio={4 / 4}
                          w={["250px", "250px", "350px"]}
                        >
                          <Image src={city.image} alt="city image"></Image>
                        </AspectRatio>
                      </Box>
                    </Flex>
                  </ASlide>
                );
              })}
            </ACrousal>
          </Box>
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
              "repeat(3, 1fr)",
              "repeat(1, 1fr)",
            ]}
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(6, 1fr)",
            ]}
            gap={4}
            mx={["20px", "30px", "40px"]}
            mb={["20px", "30px", "40px"]}
          >
            <GridItem bgColor="white" p="20px">
              <StatCard
                count={2000}
                countSpeed={5}
                heading="Drives"
                countColor="red.500"
              />
            </GridItem>
            <GridItem bgColor="white" p="20px">
              <StatCard
                count={250}
                heading="Events"
                countSpeed={50}
                countColor="red.500"
              />
            </GridItem>
            <GridItem bgColor="white" p="20px">
              <StatCard
                count={800}
                heading="Volunteers"
                countSpeed={50}
                countColor="red.500"
              />
            </GridItem>
            <GridItem bgColor="white" p="20px">
              <StatCard
                count={50}
                heading="Blood Camps"
                countSpeed={50}
                countColor="red.500"
              />
            </GridItem>
            <GridItem bgColor="white" p="20px">
              <StatCard
                count={8}
                heading="Cities"
                countSpeed={50}
                countColor="red.500"
                isExact={true}
              />
            </GridItem>
            <GridItem bgColor="white" p="20px">
              <StatCard
                count={8}
                heading="Years"
                countSpeed={50}
                countColor="red.500"
                isExact={true}
              />
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
              {events.slice(0, 3).map((item, index) => {
                return (
                  <Box maxW={["100%", "350px", "380px"]} key={`event_${index}`}>
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
            <Box mx={["20px", "30px", "40px"]}>
              <ACrousal isNavigation isPagination height={["420px", "500px"]}>
                {testimonials.map((item) => {
                  return (
                    <ASlide key={item.id}>
                      <TestimonialCard
                        profilePhoto={item.profilePhoto}
                        personName={item.personName}
                        designation={item.designation}
                        message={item.message}
                      />
                    </ASlide>
                  );
                })}
              </ACrousal>
            </Box>
          </Box>
        )}

        {/* join section */}
        <Box as="section" bg="blackAlpha.800">
          <Flex
            align="center"
            justify="space-between"
            gap={["10px", "20px", "30px"]}
            flexWrap="wrap"
            mx={["20px", "30px", "40px"]}
            py={["20px", "25px", "30px"]}
          >
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize={["2xl", "4xl"]}
              fontWeight="extrabold"
            >
              Together, We Can Change the World!
            </Text>
            <Box
              px={["10px", "15px", "20px"]}
              py={["10px", "12px", "15px"]}
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
            >
              <Link href="/join">Join Us</Link>
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
                    <Box borderRadius="10px" overflow={"hidden"}>
                      <Image width={100} src={item.logo} alt="collab" />
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

export default Home;
