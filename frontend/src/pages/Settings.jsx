import { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    hospitalName: "City Care Hospital",
    email: "admin@citycare.com",
    phone: "033-24567890",
    theme: "Light",
    notifications: true,
    autoBackup: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const saveSettings = () => {
    alert("✅ Settings saved successfully");
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Settings</h2>
      <p className="page-desc">
        Configure hospital system preferences and notifications
      </p>

      {/* WRAPPER to keep cards aligned */}
      <div style={{ width: "100%", maxWidth: "700px" }}>
        {/* GENERAL SETTINGS */}
        <div className="settings-card">
          <h3 className="settings-heading">General Settings</h3>

          <div className="form-group">
            <label>Hospital Name</label>
            <input
              type="text"
              name="hospitalName"
              value={settings.hospitalName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Admin Email</label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* SYSTEM PREFERENCES */}
        <div className="settings-card">
          <h3 className="settings-heading">System Preferences</h3>

          <div className="form-group">
            <label>Theme</label>
            <select
              name="theme"
              value={settings.theme}
              onChange={handleChange}
            >
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select>
          </div>

          <div className="toggle-group">
            <label>
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />
              Enable Notifications
            </label>
          </div>

          <div className="toggle-group">
            <label>
              <input
                type="checkbox"
                name="autoBackup"
                checked={settings.autoBackup}
                onChange={handleChange}
              />
              Enable Auto Backup
            </label>
          </div>

          <button className="primary-btn" onClick={saveSettings}>
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
