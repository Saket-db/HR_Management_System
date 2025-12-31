import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

// app.use() registers middleware. Client → app.use(...) → app.use(...) → app.get(...) → Response

const app = express();
app.use(cors()); // allows frontend port to talk to the backend port
app.use(express.json());

app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
})