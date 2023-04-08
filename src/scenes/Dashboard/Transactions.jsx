import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch("https://bootstrap-dashboard-server.vercel.app/transaction")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);
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
            <th># of Products</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction) => (
            <tr key={transaction?._id}>
              <td>{transaction?._id}</td>
              <td>{transaction?.userId}</td>
              <td>{transaction?.products.length}</td>
              <td>{transaction?.cost}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Transactions;
