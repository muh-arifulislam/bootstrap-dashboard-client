import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div
      style={{ boxSizing: "border-box", width: "100%", height: "100vh" }}
      className="d-flex overflow-hidden"
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      ></Sidebar>
      <div className="flex-grow-1">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        ></Navbar>
        <div
          className="position-relative"
          style={{ height: "100vh" }}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Layout;
