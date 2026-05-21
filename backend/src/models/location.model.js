import mongoose from 'mongoose';

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  }
});

const locationSchema = new mongoose.Schema({
  district: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    default: ""
  },
  venues: [venueSchema],
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const Location = mongoose.model('Location', locationSchema);
export default Location;