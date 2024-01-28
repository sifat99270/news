import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const prisma = new PrismaClient();
  const jsonData = await req.json();
  jsonData.otp = "";
  try {
    const count = await prisma.users.count({
      where: { email: jsonData.email },
    });
    if (count === 0) {
      const result = await prisma.users.create({
        data: jsonData,
      });
      return NextResponse.json(
        { status: "success", data: result },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { status: "fail", data: "sorry" },
        { status: 500 }
      );
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e }, { status: 500 });
  }
}
