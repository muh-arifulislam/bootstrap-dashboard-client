import React from "react";
import Table from "react-bootstrap/Table";
function Customers() {
  return (
    <div className="custom-bg-primary-dark text-white dashboard-outlet-item">
      <div className="mb-2">
        <h3 className="fs-3 m-0 p-0">CUSTOMERS</h3>
        <small className="">See your list of customers.</small>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1544515</td>
            <td>Ariful Islam</td>
            <td>user@gmail.com</td>
            <td>+880194541454</td>
            <td>Sadar South, Cumilla lore</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Customers;
