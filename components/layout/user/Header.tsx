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
  Divider,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import logo from "../../../public/logo.png";
import meri_logo from "../../../assets/logo/meri_logo.png";
import col_logo from "../../../assets/logo/collective_logo.jpg";
import CustomModal from "../../modal/CustomModal";
import { useUser } from "@/hooks/useUser";
import { useSWRConfig } from "swr";
import { signOut } from "@/api/auth";

const Header = () => {
  const { mutate } = useSWRConfig();
  const user = useUser({});

  const handleLogout = async () => {
    await signOut();
    mutate("/profile", null);
  };

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
          <Image w="65px" src={logo} alt="mic logo" priority></Image>
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
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src={meri_logo}
                      alt="Meri Prerna"
                      mr="12px"
                    />
                    <Link href="https://www.instagram.com/mic_meriprerna/">
                      Meri Prerna
                    </Link>
                  </MenuItem>
                  <MenuItem minH="40px">
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src={col_logo}
                      alt="Meri Collective"
                      mr="12px"
                    />
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
            {user && (
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  variant={"unstyled"}
                  fontWeight={"normal"}
                >
                  @ {user.name}
                </MenuButton>
                <MenuList>
                  <MenuItem>My ID Card</MenuItem>
                  {user.role === "ADMIN" && (
                    <MenuItem>
                      <Link href="/admin/users">Admin?</Link>
                    </MenuItem>
                  )}
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Box>
      </Show>

      <Hide above="md">
        <Flex as="nav" justifyContent="space-between" zIndex={2}>
          <Menu>
            <MenuButton color="blue.500">
              {user ? `@ ${user.name}` : "Menu"}
              <ChevronDownIcon />
            </MenuButton>

            <MenuList>
              {user && (
                <>
                  <MenuItem> My Id Card</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  <Divider />
                </>
              )}
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
              <MenuDivider />
              <Box as="span" pl={"10px"} fontWeight={"bold"}>
                Our Pillers
              </Box>
              <MenuItem pl={"20px"}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={meri_logo}
                  alt="Meri Prerna"
                  mr="12px"
                />
                <Link href="https://www.instagram.com/mic_meriprerna/">
                  Meri Prerna
                </Link>
              </MenuItem>
              <MenuItem pl={"20px"}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={col_logo}
                  alt="Meri Collective"
                  mr="12px"
                />
                <Link href="https://www.instagram.com/mic_collective/">
                  Meri Collective
                </Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link href="/blood" w="100%">
                  Be a Hero
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/join" w="100%">
                  Join Us
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/contact" w="100%">
                  Contact Us
                </Link>
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
