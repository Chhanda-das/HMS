const AppointmentsTable = () => {
  return (
    <div className="card shadow-sm p-3 mt-4">
      <h6>Recent Appointments</h6>
      <table className="table table-bordered mt-2">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rahul Das</td>
            <td>Dr. Sen</td>
            <td>Today</td>
            <td className="text-success">Approved</td>
          </tr>
          <tr>
            <td>Anita Roy</td>
            <td>Dr. Bose</td>
            <td>Tomorrow</td>
            <td className="text-warning">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
