// import logos and social icons
import niti from "../../assets/logo/nitiayog-logo.png";
import mp from "../../assets/logo/mp_logo.png";
import insta from "../../assets/social/instagram.png";
import twitter from "../../assets/social/twitter.png";
import facebook from "../../assets/social/facebook.png";
import linkedin from "../../assets/social/linkedin.png";
import whatsapp from "../../assets/social/whatsapp.png";

//import next components
import { Link, Image } from "@chakra-ui/next-js";
import { Box, Flex, Button, Heading } from "@chakra-ui/react";

//Declare constants
const MIC_INSTA_URL = "https://www.instagram.com/mic_organisation_india/";
const MIC_FB_URL = "https://www.facebook.com/MICOrganisation/";
const MIC_TWITTER_URL = "https://twitter.com/micorganisation";
const MIC_LINKEDIN_URL =
  "https://in.linkedin.com/in/mic-organisation-india-20035219b";
const MIC_WHATSAPP_URL =
  "https://wa.me/918104744738?text=Hello I want to connect with MIC.";
const NITI_URL = "https://www.niti.gov.in/";
const MP_URL = "http://mp.gov.in/";
//const MAP_URL = "https://goo.gl/maps/CyFRvmAWAyDYpr4s8";

const Footer = () => {
  return (
    <Flex
      as="footer"
      layerStyle={"base"}
      padding={{ base: "10px", md: "20px" }}
      flexDirection={{ base: "column", md: "row" }}
      justify="space-between"
      gap="20px"
    >
      <Box as="section">
        <Heading as="h2" fontSize="xl" fontFamily="'Montserrat', sans-serif">
          Follow MIC
        </Heading>
        <Flex as="ul" gap="20px" listStyleType="none">
          <Box as="li">
            <Link href={MIC_INSTA_URL} target="_blank">
              <Image src={insta} alt="@mic_organisation_india" w="35px" />
            </Link>
          </Box>
          <Box as="li">
            <Link href={MIC_TWITTER_URL} target="_blank">
              <Image src={twitter} alt="@micorganisation" w="35px" />
            </Link>
          </Box>
          <Box as="li">
            <Link href={MIC_FB_URL} target="_blank">
              <Image src={facebook} alt="@MICOrganisation" w="35px" />
            </Link>
          </Box>
          <Box as="li">
            <Link href={MIC_LINKEDIN_URL} target="_blank">
              <Image
                src={linkedin}
                alt="@mic-organisation-india-20035219b"
                w="35px"
              />
            </Link>
          </Box>
          <Box as="li">
            <Link href={MIC_WHATSAPP_URL} target="_blank">
              <Image src={whatsapp} alt="@whatsapp" w="35px" />
            </Link>
          </Box>
        </Flex>
      </Box>

      <Box as="section">
        <Heading as="h2" fontSize="xl" fontFamily="'Montserrat', sans-serif">
          Quick Links
        </Heading>
        <Box as="ul" gap="20px" listStyleType="none">
          <Box as="li">
            <Link href="/">Home</Link>
          </Box>
          <Box as="li">
            <Link href="/about">About</Link>
          </Box>
          <Box as="li">
            <Link href="/join">Join Us</Link>
          </Box>
          <Box as="li">
            <Link href="/feedback">Feedback</Link>
          </Box>
        </Box>
      </Box>

      <Box as="section">
        <Heading as="h2" fontSize="xl" fontFamily="'Montserrat', sans-serif">
          Contact Us
        </Heading>
        <Box as="p">
          MIC 354 Ring Road, Piplya Rao Indore, <br /> +91 8104744738, +91
          9993987710, <br />
          micorganisationindia@gmail.com
        </Box>
      </Box>

      <Box as="section">
        <Heading as="h2" fontSize="xl" fontFamily="'Montserrat', sans-serif">
          Registered
        </Heading>
        <Flex gap="20px">
          <Box>
            <Link href={MP_URL}>
              <Image src={mp} alt="collab" w="100px" />
            </Link>
          </Box>
          <Box>
            <Link href={NITI_URL}>
              <Image src={niti} alt="collab" w="100px" />
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
