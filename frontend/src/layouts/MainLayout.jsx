import { useEffect, useState } from "react";
import "../styles/Patients.css";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
  });

  // FETCH PATIENTS
  const fetchPatients = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/patients");
      const data = await res.json();
      setPatients(data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  // ADD PATIENT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/api/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setForm({ name: "", age: "", gender: "" });
      fetchPatients();
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  // DELETE PATIENT
  const deletePatient = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/patients/${id}`, {
        method: "DELETE",
      });
      fetchPatients();
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Patients</h2>
      <p className="page-desc">
        Manage patient records and personal information
      </p>

      {/* ADD PATIENT FORM */}
      <form className="patient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={(e) =>
            setForm({ ...form, age: e.target.value })
          }
          required
        />

        <select
          value={form.gender}
          onChange={(e) =>
            setForm({ ...form, gender: e.target.value })
          }
          required
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button type="submit" className="primary-btn">
          Add Patient
        </button>
      </form>

      {/* PATIENT TABLE */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((p) => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.gender}</td>
                <td>
                  <button
                    className="action-btn delete"
                    onClick={() => deletePatient(p._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {patients.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No patients found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
