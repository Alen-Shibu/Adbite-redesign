import Admin from '../models/admin.model.js';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (admin && (await admin.matchPassword(password))) {
      const token = generateToken(admin._id);

      res.cookie('jwt', token, {
        httpOnly: true,                 // Prevents JavaScript from reading the cookie (protects against XSS attacks)
        secure: process.env.NODE_ENV === 'production', // Only sends via HTTPS in production
        sameSite: 'lax',             // Protects against CSRF attacks
        maxAge: 24 * 60 * 60 * 1000,    // Cookie expires in 1 day (matches JWT expiration)
      });

      res.status(200).json({
        _id: admin._id,
        username: admin.username,
        message: "Logged in successfully!"
      });

    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};