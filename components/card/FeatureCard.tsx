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
import ACrousal from "../crousal/ACrousal";
import ASlide from "../crousal/ASlide";

const FeatureCard = ({
  featureHeading,
  featureSlogan,
  featureDesc,
  featureImages,
}: {
  featureHeading: string;
  featureSlogan: string;
  featureDesc: string;
  featureImages: StaticImageData[];
}) => {
  return (
    <Box w={["100%", "350px"]}>
      <Box height={["200px", "220px"]}>
        <ACrousal isNavigation>
          {featureImages.map((image, index) => (
            <ASlide key={index}>
              <Image src={image} alt="feature image" h="full"></Image>
            </ASlide>
          ))}
        </ACrousal>
      </Box>

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
