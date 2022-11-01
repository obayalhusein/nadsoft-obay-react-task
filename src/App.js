
import { Routes, Route } from "react-router-dom";
import AppHome from "./pages/index";
import AuthLogin from "./pages/auth/login";
import DashboardHome from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="login" element={<AuthLogin />} />
        <Route path="dashboard" element={<DashboardHome />} />
      </Routes>
    </div>
  );
}

export default App;