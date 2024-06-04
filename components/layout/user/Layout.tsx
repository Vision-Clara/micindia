"use client";
import CountDown from "@/components/launch/CountDown";
import Footer from "./Footer";
import Header from "./Header";
import { ReactNode, useState } from "react";

const toDate =
  process.env.NEXT_PUBLIC_LAUNCH_DATE || "August 15, 2023 17:00:00";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isLaunched, setLaunched] = useState(new Date(toDate) <= new Date());

  const handleLaunch = () => {
    setLaunched(true);
  };

  if (!isLaunched) {
    return <CountDown toDate={toDate} handleLaunch={handleLaunch} />;
  }

  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
