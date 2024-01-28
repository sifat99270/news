import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const header = headers();
    const id = parseInt(header.get("id"));
    const reqBody = await req.json();
    reqBody.userID = id;
    const result = await prisma.comments.create({
      data: reqBody,
    });
    return NextResponse.json(
      { status: "success", data: result },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e }, { status: 500 });
  }
}

export async function DELETE(req, res) {
  try {
    const header = headers();
    const userId = parseInt(header.get("id"));
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    const prisma = new PrismaClient();
    const result = await prisma.comments.delete({
      where: { id: id, userId: userId },
      //where: { AND: [{ userId: userId }, { id: parseInt(id) }] },
    });
    return NextResponse.json(
      { status: "success", data: result },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e }, { status: 500 });
  }
}

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const header = headers();
    const id = header.get("id");

    const result = await prisma.comnments.findMany({
      where: { userId: parseInt(id) },
      include: {
        news_list: { select: { title: true } },
      },
    });
    return NextResponse.json(
      { status: "success", data: result },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e }, { status: 500 });
  }
}
