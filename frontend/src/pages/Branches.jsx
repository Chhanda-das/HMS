import { useState } from "react";

const Branches = () => {
  const [branches, setBranches] = useState([
    {
      id: 1,
      name: "City Care – Kolkata",
      location: "Kolkata",
      status: "Active",
    },
    {
      id: 2,
      name: "City Care – Durgapur",
      location: "Durgapur",
      status: "Inactive",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    location: "",
    status: "Active",
  });

  // OPEN ADD MODAL
  const openAdd = () => {
    setForm({ name: "", location: "", status: "Active" });
    setIsEdit(false);
    setShowModal(true);
  };

  // OPEN EDIT MODAL
  const openEdit = (branch) => {
    setForm(branch);
    setCurrentId(branch.id);
    setIsEdit(true);
    setShowModal(true);
  };

  // HANDLE FORM CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SAVE (ADD / EDIT)
  const saveBranch = (e) => {
    e.preventDefault();

    if (isEdit) {
      setBranches(
        branches.map((b) =>
          b.id === currentId ? { ...form, id: currentId } : b
        )
      );
    } else {
      setBranches([
        ...branches,
        { ...form, id: Date.now() },
      ]);
    }

    setShowModal(false);
  };

  // DELETE
  const deleteBranch = (id) => {
    if (window.confirm("Delete this branch?")) {
      setBranches(branches.filter((b) => b.id !== id));
    }
  };

  // TOGGLE STATUS
  const toggleStatus = (id) => {
    setBranches(
      branches.map((b) =>
        b.id === id
          ? {
              ...b,
              status: b.status === "Active" ? "Inactive" : "Active",
            }
          : b
      )
    );
  };

  return (
    <div className="page-container">
      {/* HEADER */}
      <div className="page-header">
        <div>
          <h2 className="page-title">Branch Management</h2>
          <p className="page-desc">
            Manage hospital branches and locations
          </p>
        </div>

        <button className="add-branch-btn" onClick={openAdd}>
  + Add Branch
</button>
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Branch Name</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {branches.map((b) => (
              <tr key={b.id}>
                <td>{b.name}</td>
                <td>{b.location}</td>
                <td>
                  <span
                    className={`status ${
                      b.status === "Active" ? "active" : "inactive"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
                <td>
                  <button
                    className="action-btn edit"
                    onClick={() => openEdit(b)}
                  >
                    Edit
                  </button>

                  <button
                    className="action-btn delete"
                    onClick={() => deleteBranch(b.id)}
                  >
                    Delete
                  </button>

                  <button
                    className="action-btn"
                    onClick={() => toggleStatus(b.id)}
                  >
                    Toggle
                  </button>
                </td>
              </tr>
            ))}

            {branches.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No branches found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{isEdit ? "Edit Branch" : "Add Branch"}</h3>

            <form onSubmit={saveBranch}>
              <input
                type="text"
                name="name"
                placeholder="Branch Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={form.location}
                onChange={handleChange}
                required
              />

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <div className="modal-actions">
                <button
                  type="button"
                  className="action-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="primary-btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Branches;
