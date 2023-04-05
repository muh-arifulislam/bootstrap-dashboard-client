import React from "react";
import { Container } from "react-bootstrap";
import Toolbar from "./Toolbar";

function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div className="px-3">
      <Toolbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      ></Toolbar>
    </div>
  );
}

export default Navbar;
