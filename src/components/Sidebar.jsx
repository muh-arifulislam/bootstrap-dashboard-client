import React from "react";
import { Container } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [signOut, loading, error] = useSignOut(auth);
  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <Link
        to={to}
        {...props}
        style={match && { backgroundColor: "#ffd166", color: "black" }}
      >
        {children}
        {match && (
          <span
            className="position-absolute top-0 bottom-0 d-flex align-items-center"
            style={{ right: "24px" }}
          >
            <i className="bi bi-chevron-right"></i>
          </span>
        )}
      </Link>
    );
  }
  return (
    <nav>
      {isSidebarOpen && (
        <div
          className="custom-bg-primary-light position-relative"
          style={{ width: "250px", height: "100vh", boxSizing: "border-box" }}
        >
          <Container className="w-100 p-0">
            <div className="mx-4 pt-3 mb-4">
              <h2 className="fs-4 text-uppercase">Vidyayan</h2>
            </div>
            <div className="mb-3 bg-secondary">
              <CustomLink
                to="/dashboard"
                className="px-4 py-2 w-100 nav-link text-decoration-none position-relative  d-flex align-items-center"
              >
                <span className="me-3">
                  <i className="bi bi-house fs-5"></i>
                </span>
                <span className="fs-5">Dashboard</span>
              </CustomLink>
            </div>
            <div className="my-2">
              <h4 className="fs-6 px-4">Sales</h4>
              <ul className="px-0" style={{ listStyleType: "none" }}>
                <li className="">
                  <CustomLink
                    to="products"
                    className="position-relative text-decoration-none w-100 d-flex px-4 py-2 nav-link"
                  >
                    <span className="me-3">
                      <i className="bi bi-cart3"></i>
                    </span>
                    <span>Products</span>
                  </CustomLink>
                </li>
                <li className="">
                  <CustomLink
                    to="customers"
                    className="position-relative text-decoration-none w-100 d-flex px-4 py-2 nav-link"
                  >
                    <span className="me-3">
                      <i className="bi bi-people"></i>
                    </span>
                    <span>Customers</span>
                  </CustomLink>
                </li>
                <li className="">
                  <CustomLink
                    to="transactions"
                    className="position-relative text-decoration-none w-100 d-flex px-4 py-2 nav-link"
                  >
                    <span className="me-3">
                      <i className="bi bi-receipt-cutoff"></i>
                    </span>
                    <span>Transactions</span>
                  </CustomLink>
                </li>
              </ul>
            </div>
            <div className="my-2">
              <h4 className="fs-6 w-100 px-4" style={{ whiteSpace: "nowrap" }}>
                Client Facing
              </h4>
              <ul className="px-0" style={{ listStyleType: "none" }}>
                <li className="">
                  <CustomLink
                    to="overview"
                    className="position-relative text-decoration-none w-100 d-flex px-4 py-2  nav-link"
                  >
                    <span className="me-3">
                      <i className="bi bi-hourglass-split"></i>
                    </span>
                    <span>Overview</span>
                  </CustomLink>
                </li>
                <li className="">
                  <CustomLink
                    to="breakdown"
                    className="position-relative text-decoration-none w-100 d-flex px-4 py-2  nav-link"
                  >
                    <span className="me-3">
                      <i className="bi bi-calendar-event"></i>
                    </span>
                    <span>Breakdown</span>
                  </CustomLink>
                </li>
              </ul>
            </div>
            <div className="my-2">
              <h4 className="fs-6 px-4">Management</h4>
              <ul className="px-0 " style={{ listStyleType: "none" }}>
                <li className="">
                  <CustomLink
                    to="admin"
                    className="position-relative text-decoration-none w-100 d-flex px-4 py-2  nav-link"
                  >
                    <span className="me-3">
                      <i className="bi bi-shield-slash"></i>
                    </span>
                    <span>Admin</span>
                  </CustomLink>
                </li>
              </ul>
            </div>
            <div
              className="position-absolute left-0 w-100 d-flex justify-content-center"
              style={{ bottom: "30px" }}
            >
              <button onClick={()=>signOut()} className="px-4 py-1 rounded border-0 shadow bg-secondary fs-5 d-flex">
                <span> Logout</span>
                <span className="ms-3">
                  <i className="bi bi-box-arrow-right"></i>
                </span>
              </button>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}

export default Sidebar;
