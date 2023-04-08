import React from "react";
import { Accordion } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="rounded h-100 p-3 custom-bg-primary-light">
        <p className="m-0">
          <small>{product?.category}</small>
        </p>
        <h4 className="fs-5 m-0 p-0">{product?.name}</h4>
        <h4 className="fs-6">${product?.price}</h4>

        <div>
          <span>
            <i className="bi bi-star-fill"></i>
          </span>
          <span>
            <i className="bi bi-star-fill"></i>
          </span>
          <span>
            <i className="bi bi-star-fill"></i>
          </span>
          <span>
            <i className="bi bi-star-fill"></i>
          </span>
          <span>
            <i className="bi bi-star"></i>
          </span>
        </div>
        <p>{product?.description}</p>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="">SEE MORE</Accordion.Header>
            <Accordion.Body className="">
              <p className="m-0 text-break">id: {product?._id}</p>
              <p className="m-0 ">Supply Left: {product?.supply}</p>
              <p className="m-0 ">Yearly Sales: 5454</p>
              <p className="m-0 ">Yearly Unit Sales: 4612</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductCard;
