import { useState } from "react";
import "../styles/Dashboard.css";

const Departments = () => {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: "Cardiology",
      head: "Dr. Amit Sharma",
      floor: "2nd Floor",
      status: "Active",
    },
    {
      id: 2,
      name: "Neurology",
      head: "Dr. Neha Roy",
      floor: "3rd Floor",
      status: "Active",
    },
    {
      id: 3,
      name: "Orthopedics",
      head: "Dr. Rahul Verma",
      floor: "1st Floor",
      status: "Inactive",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    head: "",
    floor: "",
    status: "Active",
  });

  /* ===== Open Add Modal ===== */
  const openAddModal = () => {
    setIsEdit(false);
    setFormData({
      id: null,
      name: "",
      head: "",
      floor: "",
      status: "Active",
    });
    setShowModal(true);
  };

  /* ===== Open Edit Modal ===== */
  const openEditModal = (dept) => {
    setIsEdit(true);
    setFormData(dept);
    setShowModal(true);
  };

  /* ===== Handle Input ===== */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ===== Save Department ===== */
  const handleSave = () => {
    if (isEdit) {
      // Edit existing department
      setDepartments(
        departments.map((d) =>
          d.id === formData.id ? formData : d
        )
      );
    } else {
      // Add new department
      setDepartments([
        ...departments,
        { ...formData, id: Date.now() },
      ]);
    }

    setShowModal(false);
  };

  return (
    <div className="page-container">
      {/* HEADER */}
      <div className="page-header">
        <h2 className="page-title">Department Management</h2>
        <button className="primary-btn" onClick={openAddModal}>
          + Add Department
        </button>
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Department Name</th>
              <th>Department Head</th>
              <th>Floor</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {departments.map((dept, index) => (
              <tr key={dept.id}>
                <td>{index + 1}</td>
                <td>{dept.name}</td>
                <td>{dept.head}</td>
                <td>{dept.floor}</td>
                <td>
                  <span
                    className={
                      dept.status === "Active"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {dept.status}
                  </span>
                </td>
                <td>
                  <button
                    className="action-btn edit"
                    onClick={() => openEditModal(dept)}
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
            <h3>{isEdit ? "Edit Department" : "Add Department"}</h3>

            <input
              name="name"
              placeholder="Department Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="head"
              placeholder="Department Head"
              value={formData.head}
              onChange={handleChange}
            />

            <input
              name="floor"
              placeholder="Floor / Location"
              value={formData.floor}
              onChange={handleChange}
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
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

export default Departments;
