import { useState } from "react";
import "../styles/dashboard.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Suman Das",
      doctor: "Dr. Amit Sharma",
      department: "Cardiology",
      date: "2026-01-20",
      time: "10:30",
      status: "Scheduled",
    },
    {
      id: 2,
      patient: "Anita Roy",
      doctor: "Dr. Neha Roy",
      department: "Neurology",
      date: "2026-01-21",
      time: "12:00",
      status: "Completed",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    patient: "",
    doctor: "",
    department: "",
    date: "",
    time: "",
    status: "Scheduled",
  });

  /* ===== Open Add Modal ===== */
  const openAddModal = () => {
    setIsEdit(false);
    setFormData({
      id: null,
      patient: "",
      doctor: "",
      department: "",
      date: "",
      time: "",
      status: "Scheduled",
    });
    setShowModal(true);
  };

  /* ===== Open Edit Modal ===== */
  const openEditModal = (appointment) => {
    setIsEdit(true);
    setFormData(appointment);
    setShowModal(true);
  };

  /* ===== Handle Input ===== */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ===== Save Appointment ===== */
  const handleSave = () => {
    if (isEdit) {
      setAppointments(
        appointments.map((a) =>
          a.id === formData.id ? formData : a
        )
      );
    } else {
      setAppointments([
        ...appointments,
        { ...formData, id: Date.now() },
      ]);
    }
    setShowModal(false);
  };

  return (
    <div className="page-container">
      {/* HEADER */}
      <div className="page-header">
        <h2 className="page-title">Smart Scheduling</h2>
        <button className="primary-btn" onClick={openAddModal}>
          + Add Appointment
        </button>
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appt, index) => (
              <tr key={appt.id}>
                <td>{index + 1}</td>
                <td>{appt.patient}</td>
                <td>{appt.doctor}</td>
                <td>{appt.department}</td>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
                <td>
                  <span
                    className={
                      appt.status === "Scheduled"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {appt.status}
                  </span>
                </td>
                <td>
                  <button
                    className="action-btn edit"
                    onClick={() => openEditModal(appt)}
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
            <h3>{isEdit ? "Edit Appointment" : "Add Appointment"}</h3>

            <input
              name="patient"
              placeholder="Patient Name"
              value={formData.patient}
              onChange={handleChange}
            />

            <input
              name="doctor"
              placeholder="Doctor Name"
              value={formData.doctor}
              onChange={handleChange}
            />

            <input
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
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

export default Appointments;
