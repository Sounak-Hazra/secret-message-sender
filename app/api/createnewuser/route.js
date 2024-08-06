import { connect } from "@/dbconfig/bdconfig";
import User from "@/models/usermodel";
import { NextResponse } from "next/server";


connect()

export async function POST(request) {
    try {

        const reqbody = await request.json()
        const { id } = reqbody
        const newuser = await User.create({
           id
        })

        return NextResponse.json({
            message: "User created successfully",
            success:true,
            saveUser:true
        })

    } catch (error) {
         console.log(error)
        return NextResponse.json({ message: error.massage }, { status: 500 })
    }
}