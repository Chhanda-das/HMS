import { useState } from "react";
import "../styles/Login.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }

    alert("✅ Registration successful (UI level)");
    window.location.href = "/login";
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* LOGO */}
        <div className="login-logo">
          <img src="/assets/login2.jpg" alt="Hospital Logo" />
        </div>

        <h2>Create Account</h2>
        <p className="login-subtitle">Register for HMS Portal</p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>

        <p className="login-footer">
          Already have an account?{" "}
          <a href="/login" style={{ color: "#0ea5e9", fontWeight: 500 }}>
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
