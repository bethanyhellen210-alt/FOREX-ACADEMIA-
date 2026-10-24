import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, setSessionCookie } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    if (name.length < 2 || name.length > 80) return NextResponse.json({ error: "Enter your name (2–80 characters)." }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    if (password.length < 8 || password.length > 128) return NextResponse.json({ error: "Password must be 8–128 characters." }, { status: 400 });
    if (await prisma.user.findUnique({ where: { email } })) return NextResponse.json({ error: "An account with this email already exists. Sign in instead." }, { status: 409 });

    const paid = await prisma.payment.findFirst({
      where: { email, status: "success", paidAt: { not: null } },
      orderBy: { paidAt: "desc" },
    });
    const paidAt = paid?.paidAt || null;
    const planExpiresAt = paid && paidAt ? new Date(paidAt.getTime() + (paid.plan === "yearly" ? 365 : 30) * 24 * 60 * 60 * 1000) : null;
    const activePaidPlan = Boolean(paid && planExpiresAt && planExpiresAt > new Date());
    const plan = activePaidPlan && paid ? (paid.plan === "yearly" ? "premium-yearly" : "premium-monthly") : "free";
    const user = await prisma.user.create({ data: { name, email, password: await hashPassword(password), plan, planExpiresAt: activePaidPlan ? planExpiresAt : null } });
    await setSessionCookie(user.id);
    return NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email, plan: user.plan } }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Account creation failed.";
    return NextResponse.json({ error: message }, { status: message.includes("SESSION_SECRET") ? 503 : 500 });
  }
}
