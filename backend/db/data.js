import mongoose from "mongoose";

const connectToDatabase = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
    }
    catch(error)
    {
        console.log("MongoDB connection error:", error);
    }
}
export default connectToDatabase;