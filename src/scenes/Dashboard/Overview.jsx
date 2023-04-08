import React from "react";
import OverviewChart from "../../components/OverviewChart";
function Overview() {
  
  return (
    <div className="custom-bg-primary-dark text-white dashboard-outlet-item">
      <div className="mb-2">
        <h3 className="fs-3 m-0 p-0">OVERVIEWS</h3>
        <small className="">See your list of overviews.</small>
      </div>
      <div className="" style={{ height: "80%", width: "100%" }}>
        <OverviewChart></OverviewChart>
      </div>
    </div>
  );
}

export default Overview;
