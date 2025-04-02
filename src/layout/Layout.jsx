import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <div className="content-container">
        <div className="flex h-[100vh]">
          {location.pathname !== "/" && <Menu />}
          <div className="mx-auto">
            <Outlet />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
