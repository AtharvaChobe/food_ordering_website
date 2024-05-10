import mongoose from "mongoose"

const dbInit = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log("MongoDB connected")
    } catch (error) {
        console.error(error)
    }
}

export default dbInit;