import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const catid = searchParams.get("catId");
    const prisma = new PrismaClient();
    const result = await prisma.news_list.findMany({
      where: { catID: parseInt(catid) },
      select: {
        id: true,
        img1: true,
        title: true,
        short_des: true,
        createdAt: true,
      },
    });
    return NextResponse.json(
      { status: "success", data: result },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ status: "fail", data: [] }, { status: 500 });
  }
}
