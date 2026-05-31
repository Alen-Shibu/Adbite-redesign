import express from 'express';
import { 
  getLocations, 
  createLocation, 
  updateLocation, 
  deleteLocation 
} from '../controllers/location.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route('/')
  .get(getLocations)
  .post(protect,createLocation);

router.route('/:id')
  .put(protect, updateLocation)
  .delete(protect, deleteLocation);

export default router;