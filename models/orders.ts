import mongoose, { Schema } from "mongoose";

const orderModel = new Schema({
    orderedBy: String,
    phone: String,
    address: String,
    fullname: String,
    products: [],
    totalAmount: Number,
    completed: {
        type: Boolean,
        default: false
    }    
},
    {
        timestamps: true
    }
)

export const orders = mongoose.models.orders || mongoose.model("orders", orderModel);