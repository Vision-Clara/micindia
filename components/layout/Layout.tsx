import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
