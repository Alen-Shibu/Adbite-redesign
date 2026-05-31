import express from 'express';
import { loginAdmin } from '../controllers/auth.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/verify',protect,(req,res)=>{
    res.status(200).json({admin: req.admin.username})
})
router.post('/login', loginAdmin);

export default router;