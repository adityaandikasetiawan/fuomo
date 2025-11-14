import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const username = typeof body?.username === "string" ? body.username : "";
  const email = typeof body?.email === "string" ? body.email : "";
  const password = typeof body?.password === "string" ? body.password : "";
  if (!username || !email || !password) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }
  const userId = "user_" + Math.random().toString(36).slice(2);
  return NextResponse.json({ userId });
}