import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.route.js';
import locationRoutes from './routes/location.route.js';
import cookieParser from 'cookie-parser'

const app = express();
const PORT = process.env.PORT || 5000;
 
// Middleware
app.use(cors());
app.use(express.json()); 
app.use(cookieParser())

app.use('/api/auth', authRoutes);
app.use('/api/locations', locationRoutes);

// Base route test layer
app.get('/', (req, res) => {
  res.send('Adbite Production Server API is running active...');
});

const startServer = async() => {
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`App is Running on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log('Failed to Start Server:',error.message)
        process.exit(1)
    }
}

startServer();