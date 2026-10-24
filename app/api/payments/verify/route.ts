import { NextResponse } from "next/server";
import { reconcilePayment } from "@/lib/paystack";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const reference = String(body.reference || "").trim();
    if (!reference || reference.length > 120) {
      return NextResponse.json({ error: "A valid payment reference is required." }, { status: 400 });
    }
    const result = await reconcilePayment(reference);
    if (!result.success) {
      return NextResponse.json({ success: false, status: result.status }, { status: 402 });
    }
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Payment verification failed.";
    const status = message.includes("not found") ? 404 : message.includes("not configured") ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
