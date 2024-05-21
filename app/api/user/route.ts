import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function GET() {
  //database logic
  return Response.json({ name: "divyanshu", email: "divyanshu@yopmail.com" });
}

export async function POST(req: NextRequest) {
  // extract body
  const body = await req.json();
  console.log(body);

  client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });
  return NextResponse.json({
    message: "You are logged in!",
  });
}
