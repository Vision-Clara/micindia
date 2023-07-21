import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Flex,
  Hide,
  Show,
  HStack,
} from "@chakra-ui/react";

import logo from "../../../public/logo.png";
import { Image, Link } from "@chakra-ui/next-js";

const Navbar = ({ children }: any) => {
  return (
    <>
      <Hide above="md">
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          marginX={{ base: "10px", md: "20px" }}
          h="80px"
        >
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              aria-label="Options"
              variant="outline"
            />
            <MenuList>
              <MenuItem>Manage Volunteers</MenuItem>
              <MenuItem>Manage Events</MenuItem>
              <MenuItem>Certificate</MenuItem>
            </MenuList>
          </Menu>
          <Box paddingY="10px" paddingX="20px">
            <Link href="/">
              <Image w="65px" src={logo} alt="mic logo" priority></Image>
            </Link>
          </Box>
        </Flex>
        <main>{children}</main>
      </Hide>

      <Show above="md">
        <HStack>
          <Box as="nav" height="100vh" width="200px" shadow="lg">
            <Box paddingY="10px" paddingX="20px">
              <Link href="/">
                <Image w="65px" src={logo} alt="mic logo" priority></Image>
              </Link>
            </Box>

            <Box>
              <Box
                paddingX="20px"
                paddingY="10px"
                cursor="pointer"
                sx={{
                  transition: "all 100ms ease-in-out",
                  ":hover": {
                    paddingBottom: "10px",
                    bgColor: "blue.500",
                    color: "white",
                  },
                }}
              >
                <Link href="/admin/users">Manage Volunteers</Link>
              </Box>
              <Box
                paddingX="20px"
                paddingY="10px"
                cursor="pointer"
                sx={{
                  transition: "all 100ms ease-in-out",
                  ":hover": {
                    paddingBottom: "10px",
                    bgColor: "blue.500",
                    color: "white",
                  },
                }}
              >
                <Link href="/admin/events">Manage Events</Link>
              </Box>
              <Box
                paddingX="20px"
                paddingY="10px"
                cursor="pointer"
                sx={{
                  transition: "all 100ms ease-in-out",
                  ":hover": {
                    paddingBottom: "10px",
                    bgColor: "blue.500",
                    color: "white",
                  },
                }}
              >
                <Link href="/admin/certificate">Certificate</Link>
              </Box>
            </Box>
          </Box>
          <main>{children}</main>
        </HStack>
      </Show>
    </>
  );
};

export default Navbar;
