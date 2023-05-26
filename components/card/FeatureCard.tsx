import { Image } from "@chakra-ui/next-js";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
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
    <Box w={["100%", "300px", "380px"]}>
      <Box h="200px" overflow="hidden">
        <Image src={featureImage} alt="feature image"></Image>
      </Box>

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
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
              fontSize="xl"
            >
              <Box as="span" flex="1" textAlign="left">
                {featureHeading} <br /> {featureSlogan}
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            textAlign="left"
            bgColor="blue.300"
            color="white"
          >
            {featureDesc}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FeatureCard;
