import mongoose from "mongoose"
import { Schema } from "mongoose"


const userSchema = new Schema({
    id: {
        type: String,
        require:[true,"id must require"]
    },
    messages:[]
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User