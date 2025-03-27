import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './database/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// Routes
import userRoutes from './routes/user.route.js';
dotenv.config ({});
const app = express ();
// Middleware
app.use (express.json ());
app.use (cookieParser ());
app.use (
  cors ({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use ('/api/v1/user', userRoutes);
const PORT = process.env.PORT || 5000; // Set a default value if not defined

connectDB (); // Connect to MongoDB database when server starts up
app.get ('/', (req, res) => {
  res.send ('Hello, World!');
});
// app.post ('/register', register);
// Start the server
app.listen (PORT, () => {
  console.log (`Server running on port ${PORT}`);
});
