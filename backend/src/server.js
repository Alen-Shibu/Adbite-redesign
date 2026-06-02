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
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:5173'
];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
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