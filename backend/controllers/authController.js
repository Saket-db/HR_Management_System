import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, error: "Invalid password" });

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '10d' });
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: { _id: user._id, username: user.username, email: user.email }
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

export { login };