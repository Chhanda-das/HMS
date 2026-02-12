import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({
    token: "dummy-token",
    user: { email: req.body.email }
  });
});

router.post("/register", (req, res) => {
  res.json({
    message: "Registered successfully"
  });
});

export default router;
