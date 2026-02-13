import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";
import "../styles/Dashboard.css";

const DashboardLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
