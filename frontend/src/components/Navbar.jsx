export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav style={{ padding: "10px", background: "#1976d2", color: "white" }}>
      <a href="/dashboard" style={{ marginRight: "15px", color: "white" }}>
        Dashboard
      </a>
      <a href="/patients" style={{ marginRight: "15px", color: "white" }}>
        Patients
      </a>
      <a href="/profile" style={{ marginRight: "15px", color: "white" }}>
        Profile
      </a>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
