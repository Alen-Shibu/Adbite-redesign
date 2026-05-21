import jwt from 'jsonwebtoken';
import Admin from '../models/admin.model.js';

export const protect = async (req, res, next) => {
  let token = req.cookies.jwt; 
  
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id).select('-password');
      
      if (!req.admin) {
        return res.status(401).json({ message: 'Not authorized, admin not found' });
      }

      return next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    return res.status(401).json({ message: 'Not authorized, no cookie token found' });
  }
};