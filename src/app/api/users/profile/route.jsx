import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const header = headers();
  try {
    const id = parseInt(header.get("id"));
    console.log(id)
    const prisma = new PrismaClient();
    const result = await prisma.users.findUnique({ where: { id: id } });
    return NextResponse.json(
      { status: "success", data: result },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e }, { status: 500 });
  }
}
