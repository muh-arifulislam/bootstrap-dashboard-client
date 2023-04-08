import React from "react";

const CardDashItem = ({children,data}) => {
  return (
    <div className="col-6">
      <div className="p-3 h-100 custom-bg-primary-light rounded">
        <div className="mb-2 d-flex justify-content-between align-items-center">
          <p className="m-0">{data.title}</p>
          <span className="fs-5" style={{ color: "#ffd166" }}>
            {children}
          </span>
        </div>
        <p className="fs-4 fw-semibold m-0 mb-2" style={{color:"#ffd166"}}>{data.total}</p>
        <div className="d-flex align-items-center">
          <p className="m-0 me-2">{data.growth}%</p>
          <p className="m-0">Since last month</p>
        </div>
      </div>
    </div>
  );
};

export default CardDashItem;
