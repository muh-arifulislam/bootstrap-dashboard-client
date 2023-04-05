import React from "react";
import { Container } from "react-bootstrap";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div
      style={{
        width: `${isSidebarOpen ? "250px" : "0px"}`,
        transition: "width 0.5s ease-out",
        height: "100vh",
      }}
      className="overflow-hidden bg-primary"
    >
      <Container className="px-0">
        <div className="mx-4 mt-3 mb-4">
          <h2 className="fs-4">Ecomvison</h2>
        </div>
        <div className="px-4 py-2 bg-secondary text-white  d-flex align-items-center gap-2">
          <span>
            <i class="bi bi-house fs-5"></i>
          </span>
          <span className="fs-5">Dashboard</span>
        </div>
        <div className="mx-4 my-4">
          <h4 className="fs-5">Sales</h4>
          <ul className="px-0" style={{ listStyleType: "none" }}>
            <li className="py-1">
              <a
                href="#"
                className="text-white text-decoration-none w-100 d-flex"
              >
                <span className="me-3">
                  <i class="bi bi-cart3"></i>
                </span>
                <span>Products</span>
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="text-white text-decoration-none w-100 d-flex"
              >
                <span className="me-3">
                  <i class="bi bi-people"></i>
                </span>
                <span>Products</span>
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="text-white text-decoration-none w-100 d-flex"
              >
                <span className="me-3">
                  <i class="bi bi-receipt-cutoff"></i>
                </span>
                <span>Products</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-4 my-4">
          <h4 className="fs-5 w-100" style={{ whiteSpace: "nowrap" }}>
            Client Facing
          </h4>
          <ul className="px-0" style={{ listStyleType: "none" }}>
            <li className="py-1">
              <a
                href="#"
                className="text-white text-decoration-none w-100 d-flex"
              >
                <span className="me-3">
                  <i class="bi bi-cart3"></i>
                </span>
                <span>Products</span>
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="text-white text-decoration-none w-100 d-flex"
              >
                <span className="me-3">
                  <i class="bi bi-calendar-event"></i>
                </span>
                <span>Products</span>
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="text-white text-decoration-none w-100 d-flex"
              >
                <span className="me-3">
                  <i class="bi bi-calendar3"></i>
                </span>
                <span>Products</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-4 my-4">
          <h4 className="fs-5">Management</h4>
          <ul className="px-0 " style={{ listStyleType: "none" }}>
            <li className="py-1">
              <a
                href="#"
                className="text-white text-decoration-none w-100 d-flex"
              >
                <span className="me-3">
                  <i class="bi bi-shield-slash"></i>
                </span>
                <span>Admin</span>
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="text-white text-decoration-none w-100 d-flex"
              >
                <span className="me-3">
                  <i class="bi bi-person-check"></i>
                </span>
                <span>User</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-2 d-flex justify-content-center">
          <button className="px-4 py-1 rounded border-0 shadow bg-secondary fs-5">
            Logout
            <span className="ms-3">
              <i class="bi bi-box-arrow-right"></i>
            </span>
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Sidebar;
