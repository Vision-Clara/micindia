import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/mic_logo.jpeg";

const Navbar = () => {

  return (
    <div >
      <div >
        <Link href="/">
          <Image src={logo} alt="logo" height={100}></Image>
        </Link>
      </div>

        <div>
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blood-donate">
                Be a Hero
              </Link>
            </li>
            <li>
              <Link href="/join">
                Join Us
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;