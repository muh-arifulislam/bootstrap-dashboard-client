import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
function Admin() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://bootstrap-dashboard-server.vercel.app/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
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
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user?._id}>
              <td>{user?._id}</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.phoneNumber}</td>
              <td>{user?.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Admin;
