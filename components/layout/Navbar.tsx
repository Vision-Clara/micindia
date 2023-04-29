import Link from "next/link";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

import logo from "../../assets/logo/mic_logo.jpeg";

const Navbar = () => {
  return (
    <Box as="header" bg="blue.500">
      <Box as="section">
        <Link href="/">
          <Image src={logo} alt="mic logo"></Image>
        </Link>
      </Box>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/blood-donate">Be a Hero</Link>
          </li>
          <li>
            <Link href="/join">Join Us</Link>
          </li>
        </ul>
      </nav>
    </Box>
  );
};

export default Navbar;
