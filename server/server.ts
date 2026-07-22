import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();

// middleware 
app.use(express.json());

// server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})