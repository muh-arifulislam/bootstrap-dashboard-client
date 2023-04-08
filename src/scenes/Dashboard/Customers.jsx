import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
function Customers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("https://bootstrap-dashboard-server.vercel.app/customer")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
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
          {customers?.map((customer) => (
            <tr key={customer?._id}>
              <td>{customer?._id}</td>
              <td>{customer?.name}</td>
              <td>
                {customer?.email}
              </td>
              <td>{customer?.phoneNumber}</td>
              <td>{customer?.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Customers;
