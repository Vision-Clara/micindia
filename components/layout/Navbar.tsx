import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/logo/mic_logo.jpeg";

const Navbar = () => {
  return (
    <header className="flex  justify-between items-stretch">
      <section>
        <Link href="/">
          <Image src={logo} alt="mic logo" className="w-32"></Image>
        </Link>
      </section>

      <nav className="mr-10">
        <ul className="flex gap-10 h-full items-center font-bold text-slate-500">
          <li className="hover:text-indigo-500 hover:pb-2 transition-all ease-in-out delay-75">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-indigo-500 hover:pb-2 transition-all ease-in-out delay-75">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-indigo-500 hover:pb-2 transition-all ease-in-out delay-75">
            <Link href="/blood-donate">Be a Hero</Link>
          </li>
          <li className="hover:text-indigo-500 hover:pb-2 transition-all ease-in-out delay-75">
            <Link href="/join">Join Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
