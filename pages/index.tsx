import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import { Link } from "@chakra-ui/next-js";

import flag from "/assets/bg/flag.jpg";
import FeatureCard from "@/components/card/FeatureCard";
import StatCard from "@/components/card/StatCard";
import EventCard from "@/components/card/EventCard";

const features = [
  {
    id: 1,
    featureHeading: "The heading",
    featureImage: flag,
    featureDesc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, nulla? Perspiciatis qui consequuntur sint sunt at sequi tenetur assumenda fugiat earum nihil corporis quis voluptatem, quas similique placeat sapiente tempora.",
  },
  {
    id: 2,
    featureHeading: "The heading",
    featureImage: flag,
    featureDesc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, nulla? Perspiciatis qui consequuntur sint sunt at sequi tenetur assumenda fugiat earum nihil corporis quis voluptatem, quas similique placeat sapiente tempora.",
  },
];

const events = [
  {
    id: 1,
    eventHeading: "Event Heading",
    eventImage: flag,
    eventDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deleniti autem necessitatibus, dicta laboriosam omnis, officia perferendis odit ut soluta deserunt tenetur in quibusdam repellat aperiam porro illum quod itaque?",
    eventDate: "10-03-23",
    eventLocation: "Indore",
  },
  {
    id: 2,
    eventHeading: "Event Heading",
    eventImage: flag,
    eventDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deleniti autem necessitatibus, dicta laboriosam omnis, officia perferendis odit ut soluta deserunt tenetur in quibusdam repellat aperiam porro illum quod itaque?",
    eventDate: "10-03-23",
    eventLocation: "Indore",
  },
  {
    id: 3,
    eventHeading: "Event Heading",
    eventImage: flag,
    eventDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deleniti autem necessitatibus, dicta laboriosam omnis, officia perferendis odit ut soluta deserunt tenetur in quibusdam repellat aperiam porro illum quod itaque?",
    eventDate: "10-03-23",
    eventLocation: "Indore",
  },
];

const stats = [
  {
    id: 1,
    count: 3000,
    heading: "Social Drives",
  },
  {
    id: 2,
    count: 100,
    heading: "Events",
  },
  {
    id: 3,
    count: 300,
    heading: "Volunteers",
  },
  {
    id: 4,
    count: 50,
    heading: "Blood Camps",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>MIC Organisation India | We Rise By Lifting Others</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/logo.jpg" rel="icon"></link>
      </Head>
      <Box as="main">
        <Box
          as="section"
          my={["20px", "30px", "50px", "100px"]}
          mx={["20px", "30px", "100px", "200px"]}
        >
          <Heading as="h1" size={["md", "lg", "xl"]} textAlign="center">
            We Focus On Various Fields
          </Heading>
          {features.map((item, index) => {
            return (
              <FeatureCard
                key={item.id}
                heading={item.featureHeading}
                description={item.featureDesc}
                image={item.featureImage}
                index={index}
              />
            );
          })}
        </Box>
        <Box
          as="section"
          my={["20px", "30px", "40px"]}
          mx={["20px", "30px", "40px"]}
        >
          <Heading as="h1" size={["md", "lg", "xl"]} textAlign="center">
            Recent Events
          </Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          >
            {events.map((item) => {
              return (
                <EventCard
                  key={item.id}
                  eventHeading={item.eventHeading}
                  eventDesc={item.eventDesc}
                  eventImage={item.eventImage}
                  eventDate={item.eventDate}
                  eventLocation={item.eventLocation}
                />
              );
            })}
          </SimpleGrid>
        </Box>
        <Box as="section">
          <Heading as="h1" size={["md", "lg", "xl"]} textAlign="center">
            Our Numbers Tell the Story
          </Heading>
          <Flex
            as="section"
            direction={{ base: "column", sm: "row" }}
            justify="space-around"
            flexWrap="wrap"
            gap={["20px", "30px", "40px"]}
            my={["20px", "30px", "40px"]}
            mx={["20px", "30px", "40px"]}
          >
            {stats.map((item) => {
              return <StatCard count={item.count} heading={item.heading} />;
            })}
          </Flex>
        </Box>

        <Flex
          as="section"
          direction="column"
          justify="center"
          align="center"
          p="30px"
          gap={["20px", "30px", "40px"]}
          my={["20px", "30px", "40px"]}
          bgColor="gray.100"
        >
          <Heading as="h2" size={["md", "lg", "xl"]} textAlign="center">
            Join Our Hands, and lets develop this nation together.
          </Heading>
          <Box layerStyle="base" p="10px" borderRadius="5px">
            <Link href="/join">JoinUs</Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
