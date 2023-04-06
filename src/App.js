import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./scenes/Layout/Layout";
import Dashboard from "./scenes/Dashboard/Dashboard";
import Products from "./scenes/Dashboard/Products";
import Customers from "./scenes/Dashboard/Customers";
import Transactions from "./scenes/Dashboard/Transactions";
import Overview from "./scenes/Dashboard/Overview";
import Daily from "./scenes/Dashboard/Daily";
import Monthly from "./scenes/Dashboard/Monthly";
import Admin from "./scenes/Dashboard/Admin";
import Users from "./scenes/Dashboard/Users";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/products" element={<Products></Products>} />
          <Route path="/customers" element={<Customers></Customers>} />
          <Route path="/transactions" element={<Transactions></Transactions>} />
          <Route path="/overview" element={<Overview></Overview>} />
          <Route path="/daily" element={<Daily></Daily>} />
          <Route path="/monthly" element={<Monthly></Monthly>} />
          <Route path="/admin" element={<Admin></Admin>} />
          <Route path="/users" element={<Users></Users>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
