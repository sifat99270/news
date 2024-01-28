import { CreateToken } from "@/app/utility/token";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const prisma = new PrismaClient();
  const jsonData = await req.json();

  try {
    const count = await prisma.users.findUnique({
      where: { email: jsonData.email },
    });
    if (count.length === 0) {
      return NextResponse.json(
        { status: "fail", data: "please type a valid email" },
        { status: 500 }
      );
    } else {
      if (count.password === jsonData.password) {
        const token = await CreateToken(count.email, count.id);
        const expire = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const cookieString = `token=${token};expires=${expire.toUTCString()};path=/;`;

        return NextResponse.json(
          { status: "success", data: token },
          { status: 200, headers: { "set-cookie": cookieString } }
        );
      } else {
        return NextResponse.json(
          { status: "fail", data: "please type a valid password" },
          { status: 500 }
        );
      }
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e }, { status: 500 });
  }
}
