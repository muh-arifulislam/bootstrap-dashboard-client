import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Container fluid className="d-flex px-0">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      ></Sidebar>
      <div className="flex-grow-1">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        ></Navbar>
        <Outlet></Outlet>
      </div>
    </Container>
  );
}

export default Layout;
