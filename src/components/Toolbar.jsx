import React from "react";

function Toolbar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div className="py-3 d-flex justify-content-between">
      {/* LEFT SIDE  */}
      <div className="d-flex align-items-center ">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="me-4 border-0 bg-none"
        >
          <i className="bi bi-list fs-4 "></i>
        </button>
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
          <i className="bi bi-envelope fs-4"></i>
        </span>
        <span className="me-3">
          <i className="bi bi-bell fs-4"></i>
        </span>
        <span className="">
          <i className="bi bi-person-circle fs-2"></i>
        </span>
      </div>
    </div>
  );
}

export default Toolbar;
