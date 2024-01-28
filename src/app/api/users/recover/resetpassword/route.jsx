import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();

    const count = await prisma.users.count({
      where: { email: reqBody.email, otp: reqBody.otp },
    });
    if (count === 1) {
      const data = await prisma.users.update({
        where: { email: reqBody.email },
        data: { otp: 0, pasword: reqBody.pasword },
      });
      return NextResponse.json(
        { status: "success", data: data },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { status: "fail", data: "enter valid otp or email" },
        { status: 500 }
      );
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e }, { status: 500 });
  }
}
