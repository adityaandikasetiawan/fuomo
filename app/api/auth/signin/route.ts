import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email = typeof body?.email === "string" ? body.email : "";
  const password = typeof body?.password === "string" ? body.password : "";
  if (!email || !password) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
  }
  const userId = "user_" + Buffer.from(email).toString("base64url");
  const token = "tok_" + Math.random().toString(36).slice(2);
  return NextResponse.json({ token, userId });
}