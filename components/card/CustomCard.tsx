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

const CustomCard = ({
  heading,
  description,
  image,
}: {
  heading: string;
  description: string;
  image: StaticImageData;
}) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        maxW={{ base: "100%", md: "400px", sm: "200px" }}
        src={image}
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody>
          <Heading as="h1" size={["lg", "xl", "2xl"]}>
            {heading}
          </Heading>

          <Text py="2" fontSize={["md", "lg", "xl"]}>
            {description}
          </Text>
        </CardBody>

        <CardFooter>
          <Box layerStyle="base" p="10px" borderRadius="5px">
            <Link href="/join">JoinUs</Link>
          </Box>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CustomCard;
