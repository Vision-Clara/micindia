import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
      <Box
        as="section"
        textAlign="center"
        marginY={{ base: "20px", md: "30px" }}
        marginX={{ base: "20px", md: "200px" }}
      >
        <Heading as="h1" size={["lg", "xl", "2xl"]}>
          Our Vision
        </Heading>
        <Text>
          MIC organisation vision is the economic development of poor and needy
          people in its operational area through quality education, training and
          capacity building. Eradicating poverty by providing a quality
          accesories and environment to our unprivileged ones for creating their
          strong foundation and bright future.
        </Text>
      </Box>
      <Box
        as="section"
        textAlign="center"
        marginY={{ base: "20px", md: "30px" }}
        marginX={{ base: "20px", md: "200px" }}
      >
        <Heading as="h1" size={["lg", "xl", "2xl"]}>
          Our Mission
        </Heading>
        <Text>
          Our Aim is to create an advanced and enlightened Nation, mobilizing
          the power of people against poverty. By developing the capacity and
          skills of the members of socially and economically needful people in
          India. One of the prime focus of MIC is to Empowering the
          underprivileged and economically needful sections of society by Skill
          Development & Education, eliminating Hunger, Women & Child
          development, eliminating illiteracy, empowering and saving lives,
          health awareness and safety, 24*7 emergency support.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
