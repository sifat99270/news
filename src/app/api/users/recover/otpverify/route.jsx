import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const count = await prisma.users.count({ where: reqBody });
    if (count === 1) {
      return NextResponse.json(
        { status: "success", data: "valid otp code" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { status: "fail", data: "type valid data" },
        { status: 500 }
      );
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e }, { status: 500 });
  }
}
