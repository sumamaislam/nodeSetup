import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String,
    
})

export const Productmodel = mongoose.model("products", productSchema)