import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { prisma } from "@/lib/prisma";
import { paystackRequest, paymentConfig } from "@/lib/paystack";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const plan = String(body.plan || "");
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }
    if (plan !== "monthly" && plan !== "yearly") {
      return NextResponse.json({ error: "Choose a valid membership plan." }, { status: 400 });
    }

    const config = paymentConfig();
    const amount = plan === "monthly" ? config.monthlyAmount : config.yearlyAmount;
    if (!Number.isSafeInteger(amount) || amount <= 0) {
      return NextResponse.json({ error: "Payment amount configuration is invalid." }, { status: 500 });
    }
    const reference = `fa_${Date.now()}_${randomBytes(8).toString("hex")}`;
    await prisma.payment.create({
      data: { email, plan, amount, currency: config.currency, reference, status: "initialized" },
    });

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
    try {
      const checkout = await paystackRequest("/transaction/initialize", {
        method: "POST",
        body: JSON.stringify({
          email,
          amount,
          currency: config.currency,
          reference,
          callback_url: `${baseUrl.replace(/\/$/, "")}/payment/callback`,
          metadata: { product: "Forex Academia membership", plan, email },
        }),
      });
      return NextResponse.json({ authorizationUrl: checkout.authorization_url, reference });
    } catch (error) {
      await prisma.payment.update({ where: { reference }, data: { status: "initialization_failed" } });
      throw error;
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to start payment.";
    const status = message.includes("not configured") ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
