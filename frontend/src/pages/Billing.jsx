import { useState } from "react";
import "../styles/Dashboard.css";

const Billing = () => {
  const [bills, setBills] = useState([
    {
      id: 1,
      patient: "Suman Das",
      service: "Cardiology Consultation",
      amount: 1500,
      insurance: "Yes",
      insuranceProvider: "Star Health",
      status: "Paid",
    },
    {
      id: 2,
      patient: "Anita Roy",
      service: "Neurology Scan",
      amount: 3200,
      insurance: "No",
      insuranceProvider: "-",
      status: "Pending",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    patient: "",
    service: "",
    amount: "",
    insurance: "No",
    insuranceProvider: "",
    status: "Pending",
  });

  /* ===== Open Add Modal ===== */
  const openAddModal = () => {
    setIsEdit(false);
    setFormData({
      id: null,
      patient: "",
      service: "",
      amount: "",
      insurance: "No",
      insuranceProvider: "",
      status: "Pending",
    });
    setShowModal(true);
  };

  /* ===== Open Edit Modal ===== */
  const openEditModal = (bill) => {
    setIsEdit(true);
    setFormData(bill);
    setShowModal(true);
  };

  /* ===== Handle Input ===== */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ===== Save Bill ===== */
  const handleSave = () => {
    if (isEdit) {
      setBills(
        bills.map((b) =>
          b.id === formData.id ? formData : b
        )
      );
    } else {
      setBills([
        ...bills,
        { ...formData, id: Date.now() },
      ]);
    }
    setShowModal(false);
  };

  return (
    <div className="page-container">
      {/* HEADER */}
      <div className="page-header">
        <h2 className="page-title">Billing & Insurance</h2>
        <button className="primary-btn" onClick={openAddModal}>
          + Add Bill
        </button>
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Patient</th>
              <th>Service</th>
              <th>Amount (₹)</th>
              <th>Insurance</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bills.map((bill, index) => (
              <tr key={bill.id}>
                <td>{index + 1}</td>
                <td>{bill.patient}</td>
                <td>{bill.service}</td>
                <td>₹{bill.amount}</td>
                <td>
                  {bill.insurance === "Yes"
                    ? bill.insuranceProvider
                    : "No Insurance"}
                </td>
                <td>
                  <span
                    className={
                      bill.status === "Paid"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {bill.status}
                  </span>
                </td>
                <td>
                  <button
                    className="action-btn edit"
                    onClick={() => openEditModal(bill)}
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
            <h3>{isEdit ? "Edit Bill" : "Add Bill"}</h3>

            <input
              name="patient"
              placeholder="Patient Name"
              value={formData.patient}
              onChange={handleChange}
            />

            <input
              name="service"
              placeholder="Service / Treatment"
              value={formData.service}
              onChange={handleChange}
            />

            <input
              name="amount"
              type="number"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
            />

            <select
              name="insurance"
              value={formData.insurance}
              onChange={handleChange}
            >
              <option value="No">No Insurance</option>
              <option value="Yes">Insurance</option>
            </select>

            {formData.insurance === "Yes" && (
              <input
                name="insuranceProvider"
                placeholder="Insurance Provider"
                value={formData.insuranceProvider}
                onChange={handleChange}
              />
            )}

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
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

export default Billing;
