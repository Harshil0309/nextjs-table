import { NextResponse } from "next/server";
import connectDB from "../../../../db";
import User from "../../../../models/user";

export async function POST(request) {
  const { name, phone_number, email, hobbies } = await request.json();
  await connectDB();
  await User.create({name,phone_number,email,hobbies});
  return NextResponse.json({message:"user created"},{status:201});
}

export async function GET(){
    await connectDB();
    const users=await User.find();
    return NextResponse.json({users});
}

export async function DELETE(request){
    const id= request.nextUrl.searchParams.get("id");
    await connectDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({message:"User deleted"},{status:200});
}

