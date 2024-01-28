import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const postID = searchParams.get("postID");
    const prisma = new PrismaClient();
    const count = await prisma.comments.count({
      where: { postID: parseInt(postID) },
    });
    const result = await prisma.comments.findMany({
      where: { postID: parseInt(postID) },
      orderBy: {
        id: 'desc'
      },

      include: {
        users: { select: { firstName: true } },
      },
    });
    return NextResponse.json(
      {
        status: "success",
        count: count,
        data: result
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e }, { status: 500 });
  }
}
