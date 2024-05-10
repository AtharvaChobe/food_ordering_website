import mongoose, { Schema } from "mongoose";


const userModel = new Schema({
    username: String,
    email: String,
    clerkId: String,
},
    {
        timestamps: true
    }
)

export const User = mongoose.models.User || mongoose.model("User", userModel);