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
  Grid,
  GridItem,
} from "@chakra-ui/react";

import logo from "../../../public/logo.png";
import { Image, Link } from "@chakra-ui/next-js";

const Navbar = ({ children }: any) => {
  return (
    <>
      <Hide above="sm">
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
              <MenuItem>Manage Users</MenuItem>
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
        {children}
      </Hide>

      <Show above="sm">
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
