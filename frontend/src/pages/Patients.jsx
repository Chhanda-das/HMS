import { useState } from "react";
import "../styles/dashboard.css";

const Patients = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Suman Das",
      age: 45,
      gender: "Male",
      phone: "9876543210",
      disease: "Diabetes",
      status: "Admitted",
    },
    {
      id: 2,
      name: "Anita Roy",
      age: 32,
      gender: "Female",
      phone: "9123456789",
      disease: "Migraine",
      status: "Discharged",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    age: "",
    gender: "Male",
    phone: "",
    disease: "",
    status: "Admitted",
  });

  /* ===== Open Add Modal ===== */
  const openAddModal = () => {
    setIsEdit(false);
    setFormData({
      id: null,
      name: "",
      age: "",
      gender: "Male",
      phone: "",
      disease: "",
      status: "Admitted",
    });
    setShowModal(true);
  };

  /* ===== Open Edit Modal ===== */
  const openEditModal = (patient) => {
    setIsEdit(true);
    setFormData(patient);
    setShowModal(true);
  };

  /* ===== Handle Input ===== */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ===== Save Patient ===== */
  const handleSave = () => {
    if (isEdit) {
      setPatients(
        patients.map((p) =>
          p.id === formData.id ? formData : p
        )
      );
    } else {
      setPatients([
        ...patients,
        { ...formData, id: Date.now() },
      ]);
    }
    setShowModal(false);
  };

  return (
    <div className="page-container">
      {/* HEADER */}
      <div className="page-header">
        <h2 className="page-title">Patient Record Management</h2>
        <button className="primary-btn" onClick={openAddModal}>
          + Add Patient
        </button>
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Disease</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient, index) => (
              <tr key={patient.id}>
                <td>{index + 1}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.phone}</td>
                <td>{patient.disease}</td>
                <td>
                  <span
                    className={
                      patient.status === "Admitted"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {patient.status}
                  </span>
                </td>
                <td>
                  <button
                    className="action-btn edit"
                    onClick={() => openEditModal(patient)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{isEdit ? "Edit Patient" : "Add Patient"}</h3>

            <input
              name="name"
              placeholder="Patient Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="age"
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              name="disease"
              placeholder="Disease / Diagnosis"
              value={formData.disease}
              onChange={handleChange}
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Admitted">Admitted</option>
              <option value="Discharged">Discharged</option>
            </select>

            <div className="modal-actions">
              <button
                className="action-btn delete"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="action-btn edit"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patients;
