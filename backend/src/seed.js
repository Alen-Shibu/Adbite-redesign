import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Admin from './models/admin.model.js';

dotenv.config();
connectDB();

const seedAdmin = async () => {
  try {
    // Clear out preexisting admin users
    await Admin.deleteMany();

    const username = process.env.ADMIN_USERNAME ;
    const password = process.env.ADMIN_PASSWORD ;

    // The password will automatically be hashed by the Admin.js schema pre-save hook
    await Admin.create({
      username,
      password
    });

    console.log('Admin credentials seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding admin: ${error}`);
    process.exit(1);
  }
};

seedAdmin();