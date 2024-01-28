import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    cookies().delete('token');
    return NextResponse.json({ status: "success", data: 'ok' })
}