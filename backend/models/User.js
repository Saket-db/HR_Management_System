import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type:String, required: true},
    email: { type:String, required: true, unique: true},
    password: { type:String, required: true},
    phone: {type: Number, required: true},
    profileImg :{type: String},
    bloodGroup: {type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now},
    role: {type: String, enum: ['user', 'admin'], default: 'user', required: true}
})

const User = mongoose.model("User", userSchema);
export default User;