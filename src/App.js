
import { Routes, Route } from "react-router-dom";
import AppHome from "./pages/index";
import DashboardHome from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
      <Route path="dashboard" element={<DashboardHome />} />
    </Routes>
  );
}

export default App;