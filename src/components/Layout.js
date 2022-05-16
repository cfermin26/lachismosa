import * as React from "react";
import Menu from "./Menu";
import Footer from "./Footer";


const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
