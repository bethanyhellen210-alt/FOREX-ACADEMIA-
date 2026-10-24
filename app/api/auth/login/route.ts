import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { setSessionCookie, verifyPassword } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    if (!/^\S+@\S+\.\S+$/.test(email) || !password) {
      return NextResponse.json({ error: "Enter your email and password." }, { status: 400 });
    }
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await verifyPassword(password, user.password))) {
      return NextResponse.json({ error: "Email or password is incorrect." }, { status: 401 });
    }
    await setSessionCookie(user.id);
    return NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email, plan: user.plan, role: user.role } });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Sign in failed.";
    return NextResponse.json({ error: message }, { status: message.includes("SESSION_SECRET") ? 503 : 500 });
  }
}
