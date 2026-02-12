let patients = [];

exports.getPatients = (req, res) => {
  res.json(patients);
};

exports.addPatient = (req, res) => {
  const patient = req.body;
  patients.push(patient);
  res.json({ message: "Patient added successfully" });
};
