import { Routes, Route } from "react-router-dom";
import AppHome from "./pages/Home";
import DashboardHome from "./pages/dashboard/Index";
import DashboardCountry from "./pages/dashboard/ShowCountry";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
      <Route path="dashboard" element={<DashboardHome />} />
      <Route path="dashboard/:id" element={<DashboardCountry />} />
    </Routes>
  );
}

export default App;