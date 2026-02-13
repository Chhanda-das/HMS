import React, { useState } from "react";
import "../styles/Dashboard.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Ananya Sen",
      specialization: "Cardiologist",
      status: "Active",
    },
    {
      id: 2,
      name: "Dr. Rohit Das",
      specialization: "Neurologist",
      status: "Inactive",
    },
  ]);

  const toggleStatus = (id) => {
    const updatedDoctors = doctors.map((doc) =>
      doc.id === id
        ? {
            ...doc,
            status: doc.status === "Active" ? "Inactive" : "Active",
          }
        : doc
    );
    setDoctors(updatedDoctors);
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Doctor Management</h2>
      <p className="page-desc">
        Manage doctors and their specializations
      </p>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialization</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.name}</td>
                <td>{doc.specialization}</td>
                <td>
                  <span
                    className={
                      doc.status === "Active"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {doc.status}
                  </span>
                </td>
                <td>
                  <button
                    className="action-btn"
                    onClick={() => toggleStatus(doc.id)}
                  >
                    Toggle Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctors;
