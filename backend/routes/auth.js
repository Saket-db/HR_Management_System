import { login } from "../controllers/authController.js";
import express from 'express';

const router = express.Router();


// created a authController.js file to handle to make the code more scalable and modular.
router.post('/login', login)

export default router;