import { NextResponse } from "next/server";
import connectDB from "../../../../../db";
import User from "../../../../../models/user";

export async function PUT(request, { params }) {
  const { id } = params;
  const { name, phone_number, email,hobbies } = await request.json();
  await connectDB();
  await User.findByIdAndUpdate(id, { name, phone_number, email, hobbies });
  return NextResponse.json({message:"User Edited"},{status:200});
}

export async function GET({params}) {
    const { id } = params;
    await connectDB();
    const curruser = await User.findOne({ _id: id })
    return NextResponse.json({ curruser }, { status: 200 });
  }





