"use client";
// import logos and social icons
import niti from "../../../assets/logo/nitiayog-logo.png";
import mp from "../../../assets/logo/mp_logo.png";
import insta from "../../../assets/social/instagram.png";
import twitter from "../../../assets/social/twitter.png";
import facebook from "../../../assets/social/facebook.png";
import linkedin from "../../../assets/social/linkedin.png";
import whatsapp from "../../../assets/social/whatsapp.png";

//import next components
import { Box, Flex, Heading } from "@chakra-ui/react";
import VerifiedIcon from "../../icon/VerifiedIcon";
import Link from "next/link";
import Image from "next/image";

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

const Footer = () => {
  return (
    <Flex
      as="footer"
      bgColor="blue.500"
      color="white"
      padding={{ base: "10px", md: "20px" }}
      flexDirection={{ base: "column", md: "row" }}
      justify="space-between"
      gap="20px"
    >
      <Box as="section">
        <Heading as="h2" size={["sm", "sm", "md"]} marginBottom="10px">
          Follow MIC
        </Heading>
        <Flex as="ul" align="center" h="50px" gap="20px" listStyleType="none">
          <Box
            as="li"
            sx={{
              transition: "all 100ms ease-in-out",
              ":hover": {
                paddingBottom: "10px",
                color: "blue.500",
              },
            }}
          >
            <Link href={MIC_INSTA_URL} target="_blank">
              <Box w="35px">
                <Image src={insta} width={100} alt="@mic_organisation_india" />
              </Box>
            </Link>
          </Box>
          <Box
            as="li"
            sx={{
              transition: "all 100ms ease-in-out",
              ":hover": {
                paddingBottom: "10px",
                color: "blue.500",
              },
            }}
          >
            <Link href={MIC_TWITTER_URL} target="_blank">
              <Box w="35px">
                <Image src={twitter} alt="@micorganisation" width={100} />
              </Box>
            </Link>
          </Box>
          <Box
            as="li"
            sx={{
              transition: "all 100ms ease-in-out",
              ":hover": {
                paddingBottom: "10px",
                color: "blue.500",
              },
            }}
          >
            <Link href={MIC_FB_URL} target="_blank">
              <Box w="35px">
                <Image src={facebook} alt="@MICOrganisation" width={100} />
              </Box>
            </Link>
          </Box>
          <Box
            as="li"
            sx={{
              transition: "all 100ms ease-in-out",
              ":hover": {
                paddingBottom: "10px",
                color: "blue.500",
              },
            }}
          >
            <Link href={MIC_LINKEDIN_URL} target="_blank">
              <Box w="35px">
                <Image
                  src={linkedin}
                  alt="@mic-organisation-india-20035219b"
                  width={100}
                />
              </Box>
            </Link>
          </Box>
          <Box
            as="li"
            sx={{
              transition: "all 100ms ease-in-out",
              ":hover": {
                paddingBottom: "10px",
                color: "blue.500",
              },
            }}
          >
            <Link href={MIC_WHATSAPP_URL} target="_blank">
              <Box w="35px">
                <Image src={whatsapp} alt="@whatsapp" width={100} />
              </Box>
            </Link>
          </Box>
        </Flex>
      </Box>

      <Box as="section">
        <Heading as="h2" size={["sm", "sm", "md"]} marginBottom="10px">
          Quick Links
        </Heading>
        <Box as="ul" gap="20px" listStyleType="none">
          <Box as="li">
            <Link href="/">Home</Link>
          </Box>
          <Box as="li">
            <Link href="/join">Join Us</Link>
          </Box>
          <Box as="li">
            <Link href="/feedback">Feedback</Link>
          </Box>
          <Box as="li">
            <Link href="/contact">Contact Us</Link>
          </Box>
        </Box>
      </Box>

      <Box as="section">
        <Heading as="h2" size={["sm", "sm", "md"]} marginBottom="10px">
          Office Address
        </Heading>
        <Box as="p">
          MIC 354 Ring Road, Piplya Rao Indore, <br /> +91 8104744738, +91
          9993987710, <br />
          info@micindia.org
        </Box>
      </Box>

      <Box as="section">
        <Heading as="h2" size={["sm", "sm", "md"]} marginBottom="10px">
          <VerifiedIcon />
          Registered
        </Heading>
        <Flex gap="20px">
          <Box>
            <Link href={MP_URL}>
              <Box w="100px">
                <Image src={mp} alt="collab" width={100} />
              </Box>
            </Link>
          </Box>
          <Box>
            <Link href={NITI_URL}>
              <Box w="100px" borderRadius="5px" overflow="hidden">
                <Image src={niti} alt="collab" width={100} />
              </Box>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
