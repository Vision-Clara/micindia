import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Hide,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";

import logo from "../../../public/logo.png";
import { Image, Link } from "@chakra-ui/next-js";
import admin from "@/assets/images/admin.jpg";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = ({ children }: any) => {
  return (
    <>
      <Hide above="lg">
        <Flex
          as="nav"
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

          <Menu>
            <MenuButton color="blue.500">
              Menu
              <ChevronDownIcon />
            </MenuButton>

            <MenuList>
              <MenuItem>
                <Link href="/admin/users" w="100%">
                  Manage Users
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/admin/users" w="100%">
                  Manage Events
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/admin/users" w="100%">
                  Certificate
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex justifyContent="center" alignItems="center" height="100vh">
          <Box padding="20px" textAlign="center">
            <Image
              src={admin}
              alt="Please open this in desktop"
              width={400}
              marginX="auto"
            ></Image>

            <Heading as="h1" size={["md", "lg", "xl"]}>
              Please open this page on Desktop/Laptop
            </Heading>
          </Box>
        </Flex>
      </Hide>

      <Show above="lg">
        <Grid templateColumns="200px 1fr" minHeight="100vh" templateRows="1fr">
          <GridItem as="nav">
            <Box shadow="lg" height="full">
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
                  <Link href="/admin/users">Manage Users</Link>
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
          </GridItem>

          <GridItem as="main">
            <Box height="full">{children}</Box>
          </GridItem>
        </Grid>
      </Show>
    </>
  );
};

export default Navbar;
