import { useState } from "react";
import "../styles/dashboard.css";

const Staff = () => {
  const [staffList, setStaffList] = useState([
    {
      id: 1,
      name: "Rohit Das",
      role: "Nurse",
      department: "Emergency",
      phone: "9876543210",
      status: "Active",
    },
    {
      id: 2,
      name: "Anita Paul",
      role: "Receptionist",
      department: "Front Desk",
      phone: "9123456789",
      status: "Inactive",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    role: "",
    department: "",
    phone: "",
    status: "Active",
  });

  /* ===== Open Add Modal ===== */
  const openAddModal = () => {
    setIsEdit(false);
    setFormData({
      id: null,
      name: "",
      role: "",
      department: "",
      phone: "",
      status: "Active",
    });
    setShowModal(true);
  };

  /* ===== Open Edit Modal ===== */
  const openEditModal = (staff) => {
    setIsEdit(true);
    setFormData(staff);
    setShowModal(true);
  };

  /* ===== Handle Input ===== */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ===== Save Staff ===== */
  const handleSave = () => {
    if (isEdit) {
      setStaffList(
        staffList.map((s) =>
          s.id === formData.id ? formData : s
        )
      );
    } else {
      setStaffList([
        ...staffList,
        { ...formData, id: Date.now() },
      ]);
    }
    setShowModal(false);
  };

  return (
    <div className="page-container">
      {/* HEADER */}
      <div className="page-header">
        <h2 className="page-title">Staff Management</h2>
        <button className="primary-btn" onClick={openAddModal}>
          + Add Staff
        </button>
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Staff Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {staffList.map((staff, index) => (
              <tr key={staff.id}>
                <td>{index + 1}</td>
                <td>{staff.name}</td>
                <td>{staff.role}</td>
                <td>{staff.department}</td>
                <td>{staff.phone}</td>
                <td>
                  <span
                    className={
                      staff.status === "Active"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {staff.status}
                  </span>
                </td>
                <td>
                  <button
                    className="action-btn edit"
                    onClick={() => openEditModal(staff)}
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
            <h3>{isEdit ? "Edit Staff" : "Add Staff"}</h3>

            <input
              name="name"
              placeholder="Staff Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="role"
              placeholder="Role (Nurse, Admin, etc.)"
              value={formData.role}
              onChange={handleChange}
            />

            <input
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
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

export default Staff;
