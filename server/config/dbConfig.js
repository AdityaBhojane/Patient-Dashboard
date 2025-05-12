import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js"

export const connectDB = async()=>{
    try {
        await mongoose.connect(DB_URL);
        console.log("Database connected")
    } catch (error) {
        console.log('Database connection error ',error)
    }
}