import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./scenes/Layout";
import Dashboard from "./scenes/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
