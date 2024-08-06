import { connect } from "@/dbconfig/bdconfig";
import User from "@/models/usermodel";
import { NextResponse } from "next/server";


connect()

export async function POST(request) {

    try {
        
        const reqbody = await request.json()
        const { id,message } = reqbody
        const user = await User.findOne({ id })
        if (!user) {
            return NextResponse.json({
                message: "User not found",
                success:false
            },{status:400})
        }
        user.messages.push(message)
        console.log(user)
        const saveUser = await user.save()

        if (!saveUser) {
            return NextResponse.json({
                message: "User not saved",
                success:false
            },{status:400})
        }

        return NextResponse.json({
            message: "User updated",
            success:true
        })
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success:false
        },{status:500})
    }
        
}