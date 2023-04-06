import React from "react";
import Table from "react-bootstrap/Table";
function Transactions() {
  return (
    <div className="custom-bg-primary-dark text-white dashboard-outlet-item">
      <div className="mb-2">
        <h3 className="fs-3 m-0 p-0">TRANSACTIONS</h3>
        <small className="">See your list of transactions.</small>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>CreatedAt</th>
            <th># of Products</th>
            <th>Cost</th>
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
  )
}

export default Transactions