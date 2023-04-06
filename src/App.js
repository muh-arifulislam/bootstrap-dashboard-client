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
import Admin from "./scenes/Dashboard/Admin";
import Breakdown from "./scenes/Dashboard/Breakdown";
import Login from "./scenes/Login/Login";
import Register from "./scenes/Register/Register";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<Navigate to="/dashboard" replace></Navigate>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/products" element={<Products></Products>} />
          <Route path="/customers" element={<Customers></Customers>} />
          <Route path="/transactions" element={<Transactions></Transactions>} />
          <Route path="/overview" element={<Overview></Overview>} />
          <Route path="/breakdown" element={<Breakdown></Breakdown>} />
          <Route path="/admin" element={<Admin></Admin>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
