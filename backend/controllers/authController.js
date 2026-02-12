import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password required",
      });
    }

    // demo user (replace with DB later)
    const demoUser = {
      id: "1",
      name: "Admin Doctor",
      email: "admin@hms.com",
      role: "Doctor",
      passwordHash: await bcrypt.hash("123456", 10),
    };

    if (email !== demoUser.email) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, demoUser.passwordHash);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: demoUser.id, role: demoUser.role },
      process.env.JWT_SECRET || "hms_secret",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      token,
      user: {
        id: demoUser.id,
        name: demoUser.name,
        role: demoUser.role,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
