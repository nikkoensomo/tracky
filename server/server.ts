import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
connectDB();

const app = express();

// middleware 
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

// server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})