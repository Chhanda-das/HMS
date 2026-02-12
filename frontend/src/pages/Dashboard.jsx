import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">
        Portal <span>Manager</span>
      </h2>

      <p className="dashboard-subtitle">
        Centralized control for hospital operations
      </p>

      <div className="card-grid">

        {/* BRANCH MANAGEMENT */}
        <div
          className="stat-card"
          onClick={() => navigate("/branches")}
          style={{ cursor: "pointer" }}
        >
          <div className="stat-icon">🏥</div>
          <p>Branch Management</p>
        </div>

        {/* DOCTOR MANAGEMENT */}
        <div
          className="stat-card"
          onClick={() => navigate("/doctors")}
          style={{ cursor: "pointer" }}
        >
          <div className="stat-icon">👨‍⚕️</div>
          <p>Doctor Management</p>
        </div>

        {/* STAFF MANAGEMENT */}
        <div
          className="stat-card"
          onClick={() => navigate("/staff")}
          style={{ cursor: "pointer" }}
        >
          <div className="stat-icon">👥</div>
          <p>Staff Management</p>
        </div>

        {/* DEPARTMENT MANAGEMENT */}
        <div
          className="stat-card"
          onClick={() => navigate("/departments")}
          style={{ cursor: "pointer" }}
        >
          <div className="stat-icon">🏢</div>
          <p>Department Management</p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
