import express from 'express';
// import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './routes/auth.js';
import connectToDatabase from './db/data.js';
// dotenv.config();

// app.use() registers middleware. Client → app.use(...) → app.use(...) → app.get(...) → Response
connectToDatabase();
const app = express();
app.use(cors()); // allows frontend port to talk to the backend port
app.use(express.json());
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});