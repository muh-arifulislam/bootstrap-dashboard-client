import React from "react";
import PieChart from "../../components/PieChart";

const Breakdown = () => {
  const data = [
    {
      id: "elixir",
      label: "elixir",
      value: 552,
      color: "hsl(46, 70%, 50%)",
    },
    {
      id: "stylus",
      label: "stylus",
      value: 57,
      color: "hsl(8, 70%, 50%)",
    },
    {
      id: "javascript",
      label: "javascript",
      value: 41,
      color: "hsl(132, 70%, 50%)",
    },
    {
      id: "css",
      label: "css",
      value: 307,
      color: "hsl(17, 70%, 50%)",
    },
    {
      id: "sass",
      label: "sass",
      value: 397,
      color: "hsl(141, 70%, 50%)",
    },
  ];
  return (
    <div className="custom-bg-primary-dark text-white dashboard-outlet-item">
      <div className="mb-2">
        <h3 className="fs-3 m-0 p-0">BREAKDOWNS</h3>
        <small className="">See your list of breakdowns.</small>
      </div>
      <div className="" style={{height:'80%'}}>
        <PieChart></PieChart>
      </div>
    </div>
  );
};

export default Breakdown;
