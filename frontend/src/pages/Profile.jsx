import React from "react";
import doctorImg from "../assets/profile.jpg"; // ✅ clean path

const Profile = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Profile</h2>
      <p className="page-desc">
        Manage your personal and hospital information
      </p>

      <div className="profile-card stylish-profile">
        <div className="profile-form">
          <h3 className="profile-heading">Personal Information</h3>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value="Admin Manager" readOnly />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input type="text" value="Hospital Administrator" readOnly />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" value="admin@citycare.com" readOnly />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="text" value="033-24567890" readOnly />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input type="text" value="Kolkata, West Bengal" readOnly />
          </div>

          <button className="primary-btn save-btn">
            Save Profile
          </button>
        </div>

        <div className="profile-photo stylish-photo">
          <img src={doctorImg} alt="Admin Profile" />
          <h4>City Care Hospital</h4>
          <span>Admin Account</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
