import React from "react";
function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div className="position-static px-3 custom-bg-primary-dark">
      <div className="d-flex justify-content-between">
        {/* LEFT SIDE  */}
        <div className="d-flex align-items-center ">
          <span
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="me-4"
            style={{cursor:'pointer'}}
          >
            <i className="bi bi-list fs-4 "></i>
          </span>
          <input
            style={{ width: "300px" }}
            className="ps-4 pe-3 py-1 border border-1 rounded-4 d-lg-inline d-md-inline d-none "
            placeholder="Search now"
            type="text"
          />
        </div>
        {/* RIGHT SIDE  */}
        <div className="d-flex align-items-center">
          <span className="me-3">
            <i class="bi bi-envelope fs-4"></i>
          </span>
          <span className="me-3">
            <i class="bi bi-bell fs-4"></i>
          </span>
          <span className="">
            <i class="bi bi-person-circle fs-2"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
