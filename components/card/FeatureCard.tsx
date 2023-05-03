import { Image, Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import { StaticImageData } from "next/image";

const FeatureCard = ({
  heading,
  description,
  image,
  imagePos,
}: {
  heading: string;
  description: string;
  image: StaticImageData;
  imagePos: "left" | "right";
}) => {
  return (
    <Box>
      <Image
        maxW={{ base: "100%", md: "500px", sm: "250px" }}
        src={image}
        alt="Caffe Latte"
        float={imagePos}
        marginLeft={imagePos === "right" ? ["20px", "30px", "60px"] : ""}
        marginRight={imagePos === "left" ? ["20px", "30px", "60px"] : ""}
      />
      <Box>
        <Heading as="h1" size={["lg", "xl", "2xl"]}>
          {heading}
        </Heading>

        <Text py="2" fontSize={["md", "lg", "xl"]}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default FeatureCard;
