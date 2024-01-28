import { SendEmail } from "@/app/utility/emailUtility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const prisma = new PrismaClient();
    const count = await prisma.users.count({ where: { email: email } });
    if (count === 1) {
      const number = Math.floor(100000 + Math.random() * 900000);
      const text = `your code is ${number}`;
      const mail = await SendEmail(email, text, "ras");
      const result = await prisma.users.update({
        where: { email: email },
        data: { otp: number },
      });
      return NextResponse.json({ status: "success", data: result });
    } else {
      return NextResponse.json({ status: "fail", data: "please login first" });
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
