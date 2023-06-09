import { Image } from "@chakra-ui/next-js";
import { AspectRatio, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import flag from "@/assets/bg/flag.jpg";

const FeatureCard = ({
  featureHeading,
  featureSlogan,
  featureDesc,
  featureImage,
}: {
  featureHeading: string;
  featureSlogan: string;
  featureDesc: string;
  featureImage: StaticImageData;
}) => {
  return (
    <Box w={["100%", "350px"]}>
      <AspectRatio ratio={10 / 6} overflow="hidden">
        <Image src={featureImage} alt="feature image" h="full"></Image>
      </AspectRatio>

      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton
            bgColor="blue.400"
            color="white"
            sx={{
              transition: "all 100ms ease-in-out",
              ":hover": {
                bgColor: "blue.400",
                color: "white",
              },
            }}
            fontSize={["md", "lg", "xl"]}
          >
            <Box as="span" flex="1" textAlign="left">
              {featureHeading} <br /> {featureSlogan}
            </Box>

            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel
            pb={4}
            textAlign="left"
            bgColor="blue.300"
            color="white"
            fontSize={["sm", "md", "lg"]}
          >
            {featureDesc}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FeatureCard;
