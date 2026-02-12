import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/hospital.jpeg"; // ✅ JPG IMPORT

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img
          src={logo}
          alt="HMS"
          className="sidebar-logo-img"
        />
        <span className="logo-text">HMS</span>
      </div>

      <ul className="menu">
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
        <li className="logout">
          <NavLink to="/login">Log Out</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
