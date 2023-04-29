import { Link, Image } from "@chakra-ui/next-js";
import { Box, Flex, Button } from "@chakra-ui/react";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import logo from "../../assets/logo/mic_logo.jpeg";

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

      <Box as="nav" display={{ base: "none", md: "block" }}>
        <Flex as="ul" gap="30px" listStyleType="none">
          <Box as="li">
            <Link href="/">Home</Link>
          </Box>
          <Box as="li">
            <Link href="/about">About Us</Link>
          </Box>
          <Box as="li">
            <Link href="/blood-donate">Be a Hero</Link>
          </Box>
          <Box as="li">
            <Link href="/join">Join Us</Link>
          </Box>
        </Flex>
      </Box>

      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<HamburgerIcon />}
          display={{ base: "inline", md: "none" }}
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
            <Link href="/about" w="100%">
              About Us
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/blood-donate" w="100%">
              Be a Hero
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/join" w="100%">
              Join Us
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
