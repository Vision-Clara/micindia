import { Link, Image } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Button,
  Show,
  Hide,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

import logo from "../../assets/logo/mic_logo.jpeg";
const REG_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe1gnvqUkXquADmOM2uxPTxAGXxNpVIt9I7nPQkwPNeJC3_5w/formResponse?embedded=true";
const BLOOD_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeBF5EnpXQWVHKW2KNbiVLKjp68CCrClL3HSDNzVbKRgeNngg/formResponse?embedded=true";

const Navbar = () => {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      marginX={{ base: "10px", md: "20px" }}
    >
      <Box as="section">
        <Link href="/">
          <Image w="120px" src={logo} alt="mic logo"></Image>
        </Link>
      </Box>

      <Show above="md">
        <Box as="nav">
          <Flex as="ul" alignItems="center" gap="30px" listStyleType="none">
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
              <Link href="/">Home</Link>
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
              <Link href={BLOOD_URL}>Be a Hero</Link>
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
              <Link href={REG_URL}>Join Us</Link>
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
              <Link href="/contact">Contact Us</Link>
            </Box>
          </Flex>
        </Box>
      </Show>

      <Hide above="md">
        <Box as="nav">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="blue.500"
              color="white"
            >
              More
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link href="/" w="100%">
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href={BLOOD_URL} w="100%">
                  Be a Hero
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href={REG_URL} w="100%">
                  Join Us
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/contact" w="100%">
                  Contact Us
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Hide>
    </Flex>
  );
};

export default Navbar;
