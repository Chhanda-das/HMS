import { useState } from "react";
import "../styles/login.css";
import profileImg from "../assets/login2.jpg";

const Login = () => {
  const [mode, setMode] = useState("login"); // login | register | forgot
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 NO fake delay, no setTimeout
    setLoading(true);

    if (mode === "login") {
      // simulate success (replace with API later)
      window.location.href = "/dashboard";
    }

    if (mode === "register") {
      alert("✅ Registered successfully");
      setMode("login");
    }

    if (mode === "forgot") {
      alert("📩 Password reset email sent");
      setMode("login");
    }

    setLoading(false);
  };

  return (
    <div className="login-wrapper">
      <div className={`login-card animate-${mode}`}>
        {/* LOGO */}
        <div className="login-logo">
          <img src={profileImg} alt="Hospital Logo" />
        </div>

        {/* TITLE */}
        <h2>
          {mode === "login" && "Sign In"}
          {mode === "register" && "Create Account"}
          {mode === "forgot" && "Reset Password"}
        </h2>

        {/* SUBTITLE */}
        <p className="login-subtitle">
          {mode === "login" && "Welcome back to HMS"}
          {mode === "register" && "Register for HMS Portal"}
          {mode === "forgot" && "Recover your account"}
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {/* REGISTER ONLY */}
          {mode === "register" && (
            <input type="text" placeholder="Full Name" required />
          )}

          {/* EMAIL */}
          <input type="email" placeholder="Email address" required />

          {/* PASSWORD (LOGIN + REGISTER) */}
          {mode !== "forgot" && (
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>
          )}

          {/* CONFIRM PASSWORD */}
          {mode === "register" && (
            <input type="password" placeholder="Confirm Password" required />
          )}

          {/* BUTTON */}
          <button type="submit" disabled={loading}>
            {mode === "login" && "Login"}
            {mode === "register" && "Register"}
            {mode === "forgot" && "Send Reset Link"}
          </button>
        </form>

        {/* FOOTER LINKS */}
        <p className="login-footer">
          {mode === "login" && (
            <>
              <span className="login-link" onClick={() => setMode("forgot")}>
                Forgot Password?
              </span>
              <br />
              Don’t have an account?{" "}
              <span className="login-link" onClick={() => setMode("register")}>
                Register
              </span>
            </>
          )}

          {mode !== "login" && (
            <>
              Back to{" "}
              <span className="login-link" onClick={() => setMode("login")}>
                Sign In
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
