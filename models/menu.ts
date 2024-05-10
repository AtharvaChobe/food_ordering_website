import mongoose, { Schema } from "mongoose";


const menuModel = new Schema({
    title:String,
    image:String,
    details:String,
    price:Number
},
{
    timestamps:true
}
)

export const menu = mongoose.models.menu || mongoose.model("menu",menuModel);