import React, { useEffect, useState } from "react";
import OverviewChart from "../../components/OverviewChart";
import CardDashItem from "../../components/CardDashItem";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";
function Dashboard() {
  const data = [
    {
      title: "Total Customers",
      total: 5251,
      growth: "+14",
    },
    {
      title: "Sales Today",
      total: 7916,
      growth: "+21",
    },
    {
      title: "Monthly Sales",
      total: 59525,
      growth: "+05",
    },
    {
      title: "Yearly Sales",
      total: "600k",
      growth: "+43",
    },
  ];
  return (
    <div className="custom-bg-primary-dark text-white dashboard-outlet-item">
      {/* section heading  */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="mb-2">
          <h3 className="fs-3 m-0 p-0">PRODUCTS</h3>
          <small className="">See your list of products.</small>
        </div>
        <button className="btn btn-secondary" style={{ fontSize: "18px" }}>
          <span className="me-2">
            <i className="bi bi-cloud-arrow-down-fill"></i>
          </span>
          DOWNLOAD REPORT
        </button>
      </div>
      {/* chart  */}
      {/* row  1st*/}
      <div className="m-0 w-100 row mb-3">
        <div className="col-lg-5 col-12 p-0">
          <div className="row g-3 pe-lg-3">
            <CardDashItem data={data[0]}>
              <i className="bi bi-envelope-fill"></i>
            </CardDashItem>
            <CardDashItem data={data[1]}>
              <i className="bi bi-receipt-cutoff"></i>
            </CardDashItem>
            <CardDashItem data={data[2]}>
              <i className="bi bi-person-fill-check"></i>
            </CardDashItem>
            <CardDashItem data={data[3]}>
              <i className="bi bi-stoplights-fill"></i>
            </CardDashItem>
          </div>
        </div>
        <div
          className="col-lg-7 col-12 p-0 position-relative custom-bg-primary-light rounded"
          style={{
            height: `${window.innerWidth < 570 && "200px"}`,
            marginTop: `${window.innerWidth < 570 && "16px"}`,
          }}
        >
          <div className="position-absolute top-0 left-0 w-100 h-100">
            <OverviewChart></OverviewChart>
          </div>
        </div>
      </div>
      {/* row  2nd*/}
      <div className="m-0 w-100 row mb-5">
        <div className="col-lg-7 col-12 p-0">
          <div className="pe-lg-3" style={{ height: "300px" }}>
            <BarChart></BarChart>
          </div>
        </div>
        <div
          className="col-lg-5 col-12 p-0 position-relative custom-bg-primary-light rounded"
          style={{
            height: `${window.innerWidth < 570 && "200px"}`,
          }}
        >
          <div className="position-absolute top-0 left-0 w-100 h-100">
            <PieChart></PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
