import User from '../models/User.js';
import bcrypt from 'bcrypt';
// import dotenv from 'dotenv';
// dotenv.config();
import jwt from 'jsonwebtoken';

const login = async (req,res) =>{
    const {email, password} = req.body;
    const user = await email.findOne({email});
    try{
        if(!user)
        {
            return res.status(400).json({success: false, error: "User not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
        {
            return res.status(400).json({succcess: false, error: "Invalid password"});
        }
        else{
            return res.status(200).json({success: true, message: "Login successful", user});
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '10d' });
        res.status(200).json({ success: true, token, user: {_id: user._id, username: user.username, email: user.email} });// sending token to the client
    }
    catch(error){
        console.log("Error during login:", error);
    }
    // Login Logic
}

export { login };