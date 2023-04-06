import React from 'react'
import { Accordion } from 'react-bootstrap'

const ProductCard = () => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
        <div className="rounded p-3 custom-bg-primary-light">
          <p className="m-0">
            <small>accesoriess</small>
          </p>
          <h4 className="fs-5 m-0 p-0">Rose Lemon</h4>
          <h4 className="fs-6">$50.00</h4>

          <div>
            <span>
              <i class="bi bi-star-fill"></i>
            </span>
            <span>
              <i class="bi bi-star-fill"></i>
            </span>
            <span>
              <i class="bi bi-star-fill"></i>
            </span>
            <span>
              <i class="bi bi-star-fill"></i>
            </span>
            <span>
              <i class="bi bi-star"></i>
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            nostrum eos reiciendis fugiat quod,{" "}
          </p>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="">SEE MORE</Accordion.Header>
              <Accordion.Body>
                <p className="m-0 ">id: s45sdf12sdf</p>
                <p className="m-0 ">Supply Left: 4545</p>
                <p className="m-0 ">Yearly Sales This Year: 5454</p>
                <p className="m-0 ">Yearly Unit Sales This Year: 4612</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
    </div>
  )
}

export default ProductCard