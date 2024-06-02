import { AspectRatio, Box } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
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
      <Box>
        <ACrousal isNavigation height={["180px", "200px"]}>
          {featureImages.map((image, index) => (
            <ASlide key={index}>
              <AspectRatio ratio={6 / 4} w="350px">
                <Image src={image} alt="feature image"></Image>
              </AspectRatio>
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
