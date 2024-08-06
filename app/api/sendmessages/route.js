import { NextResponse } from "next/server";
import User from "@/models/usermodel";
import { connect } from "@/dbconfig/bdconfig";


connect()

export async function POST(request) {
    try {
        const reqbody = await request.json()
        const { id } = reqbody
        
        const user = await User.findOne({ id })
        if (!user) {
            return NextResponse.json({
                message:"User not found",success:false
            } ,{status:400})
        }
        const arr = user.messages

        return NextResponse.json({
            message:"User found",data:arr,success:true
        } )
    } catch (error) {
        return NextResponse.json({
            message:error.messages,success:false
        } ,{status:500})
    }
}