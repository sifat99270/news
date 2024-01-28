import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.news_list.findMany({
      include: { categories: true },
    });
    return NextResponse.json(
      { status: "success", data: result },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e }, { status: 500 });
  }
}
