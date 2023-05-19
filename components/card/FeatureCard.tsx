import { Image } from "@chakra-ui/next-js";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { StaticImageData } from "next/image";

const FeatureCard = ({
  heading,
  description,
  image,
  index,
}: {
  heading: string;
  description: string;
  image: StaticImageData;
  index: number;
}) => {
  const isReverse = index % 2 === 0;

  return (
    <Flex
      direction={{ base: "column", md: isReverse ? "row-reverse" : "row" }}
      align="center"
      gap="10"
    >
      <Box>
        <Image src={image} alt="Caffe Latte" borderRadius="15px" />
      </Box>

      <Box>
        <Heading as="h2" size={["md", "lg", "xl"]}>
          {heading}
        </Heading>

        <Text py="2" fontSize={["md", "lg", "xl"]}>
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default FeatureCard;
