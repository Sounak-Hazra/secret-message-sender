import User from "@/models/usermodel";
import mongoose from "mongoose";


export async function connect() {
    try {
        
        mongoose.connect(process.env.MONGO_URI)
        const connect = mongoose.connection
        connect.on("connected", () => {
            console.log("MOngodb connected successfully")
        })
        connect.on("error", (err) => {
            console.log("MOngodb connected failed ")
            console.log(err)
        })
    } catch (error) {
        console.log(error)
    }
}