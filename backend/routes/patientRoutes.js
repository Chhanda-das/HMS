import express from "express";
import Patient from "../models/Patient.js";

const router = express.Router();

/* GET all patients */
router.get("/", async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

/* ADD patient */
router.post("/", async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.json(patient);
});

/* UPDATE patient */
router.put("/:id", async (req, res) => {
  const updated = await Patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

/* DELETE patient */
router.delete("/:id", async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
