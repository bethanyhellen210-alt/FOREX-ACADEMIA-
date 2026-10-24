import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { reconcilePayment, validPaystackSignature } from "@/lib/paystack";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const rawBody = await request.text();
  try {
    if (!validPaystackSignature(rawBody, request.headers.get("x-paystack-signature"))) {
      return NextResponse.json({ error: "Invalid webhook signature." }, { status: 401 });
    }
    const event = JSON.parse(rawBody);
    if (event.event === "charge.success" && event.data?.reference) {
      const reference = String(event.data.reference);
      const existing = await prisma.payment.findUnique({ where: { reference } });
      if (existing) await reconcilePayment(reference);
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Webhook processing failed.";
    const status = message.includes("not configured") ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
