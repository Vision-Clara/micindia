"use client";
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
  Divider,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import logo from "../../../public/logo.png";
import meri_logo from "../../../assets/logo/meri_logo.png";
import col_logo from "../../../assets/logo/collective_logo.jpg";
import CustomModal from "../../modal/CustomModal";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      paddingX={{ base: "10px", md: "20px" }}
      w="full"
      h="80px"
      shadow={"md"}
    >
      <Box as="section">
        <Link href="/">
          <Image width={65} src={logo} alt="mic logo" priority></Image>
        </Link>
      </Box>

      <Show above="md">
        <Box as="nav" zIndex={2}>
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
              <Link href="/about">About Us</Link>
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
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  variant={"unstyled"}
                  fontWeight={"normal"}
                >
                  Our Pillers
                </MenuButton>
                <MenuList>
                  <MenuItem minH="48px">
                    <Box
                      w="20px"
                      mr="12px"
                      borderRadius="full"
                      overflow="hidden"
                    >
                      <Image width={100} src={meri_logo} alt="Meri Prerna" />
                    </Box>
                    <Link href="https://www.instagram.com/mic_meriprerna/">
                      Meri Prerna
                    </Link>
                  </MenuItem>
                  <MenuItem minH="40px">
                    <Box
                      w="20px"
                      mr="12px"
                      borderRadius="full"
                      overflow="hidden"
                    >
                      <Image width={100} src={col_logo} alt="Meri Collective" />
                    </Box>
                    <Link href="https://www.instagram.com/mic_collective/">
                      Meri Collective
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
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
              <Link href="/blood">Be a Hero</Link>
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
              <Link href="/join">Join Us</Link>
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
            <CustomModal />
          </Flex>
        </Box>
      </Show>

      <Hide above="md">
        <Flex as="nav" justifyContent="space-between" zIndex={2}>
          <Menu>
            <MenuButton color="blue.500">
              Menu <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem w="100%">
                <Link href="/">Home</Link>
              </MenuItem>
              <MenuItem w="100%">
                <Link href="/about">About Us</Link>
              </MenuItem>
              <MenuDivider />
              <Box as="span" pl={"10px"} fontWeight={"bold"}>
                Our Pillers
              </Box>
              <MenuItem pl={"20px"}>
                <Box w="20px" mr="12px" borderRadius="full" overflow="hidden">
                  <Image width={100} src={meri_logo} alt="Meri Prerna" />
                </Box>
                <Link href="https://www.instagram.com/mic_meriprerna/">
                  Meri Prerna
                </Link>
              </MenuItem>
              <MenuItem pl={"20px"}>
                <Box w="20px" mr="12px" borderRadius="full" overflow="hidden">
                  <Image width={100} src={col_logo} alt="Meri Collective" />
                </Box>
                <Link href="https://www.instagram.com/mic_collective/">
                  Meri Collective
                </Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem w="100%">
                <Link href="/blood">Be a Hero</Link>
              </MenuItem>
              <MenuItem w="100%">
                <Link href="/join">Join Us</Link>
              </MenuItem>
              <MenuItem w="100%">
                <Link href="/contact">Contact Us</Link>
              </MenuItem>
              <Divider />
              <MenuItem>
                <CustomModal />
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Hide>
    </Flex>
  );
};

export default Header;
