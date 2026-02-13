import { useRef, useState } from "react";
import "../styles/Dashboard.css";

const DataManagement = () => {
  /* ===== SAMPLE DATA (replace with API later) ===== */
  const [records, setRecords] = useState([
    { type: "Patients", total: 540, lastUpdated: "2026-01-19", status: "Healthy" },
    { type: "Doctors", total: 85, lastUpdated: "2026-01-18", status: "Healthy" },
    { type: "Staff", total: 210, lastUpdated: "2026-01-18", status: "Healthy" },
    { type: "Billing Records", total: 410, lastUpdated: "2026-01-17", status: "Needs Review" },
  ]);

  const fileInputRef = useRef(null);

  /* ===== EXPORT CSV ===== */
  const exportToCSV = () => {
    const headers = ["Data Type", "Total Records", "Last Updated", "Status"];
    const rows = records.map(r => [r.type, r.total, r.lastUpdated, r.status]);

    let csv = headers.join(",") + "\n";
    rows.forEach(row => (csv += row.join(",") + "\n"));

    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "hms_data_report.csv";
    link.click();
  };

  /* ===== BACKUP DATA ===== */
  const backupData = () => {
    const blob = new Blob([JSON.stringify(records, null, 2)], {
      type: "application/json",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "hms_backup.json";
    link.click();
  };

  /* ===== RESTORE DATA ===== */
  const restoreData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        setRecords(json);
        alert("✅ Backup restored successfully");
      } catch {
        alert("❌ Invalid backup file");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="page-container">
      {/* HEADER */}
      <div className="page-header">
        <h2 className="page-title">Data Management</h2>
      </div>

      {/* ACTION CARDS */}
      <div className="card-grid">
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <p>Total Records</p>
          <strong>{records.reduce((a, b) => a + b.total, 0)}</strong>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💾</div>
          <p>Backup Data</p>
          <button className="primary-btn" style={{ marginTop: 10 }} onClick={backupData}>
            Backup Now
          </button>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📤</div>
          <p>Export Data</p>
          <button className="primary-btn" style={{ marginTop: 10 }} onClick={exportToCSV}>
            Export CSV
          </button>
        </div>

        <div className="stat-card">
          <div className="stat-icon">♻️</div>
          <p>Restore Backup</p>
          <button
            className="primary-btn"
            style={{ marginTop: 10 }}
            onClick={() => fileInputRef.current.click()}
          >
            Restore
          </button>
          <input
            type="file"
            ref={fileInputRef}
            accept=".json"
            hidden
            onChange={restoreData}
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="table-container" style={{ marginTop: 30 }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Data Type</th>
              <th>Total Records</th>
              <th>Last Updated</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map((row, i) => (
              <tr key={i}>
                <td>{row.type}</td>
                <td>{row.total}</td>
                <td>{row.lastUpdated}</td>
                <td>
                  <span className={row.status === "Healthy" ? "status active" : "status inactive"}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataManagement;
