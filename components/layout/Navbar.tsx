import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/mic_logo.jpeg";

import "../../styles/Navbar.module.css";

const Navbar = () => {

  return (
    <div className="nav-bar">
      <div className="mic-logo">
        <Link href="/">
          <Image src={logo} alt="logo"></Image>
        </Link>
      </div>

        <div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blood-donate" className="nav-link">
                Be a Hero
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/join" className="nav-link">
                Join Us
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;