import { createHmac, timingSafeEqual } from "node:crypto";
import { prisma } from "@/lib/prisma";

const API = "https://api.paystack.co";

export function paymentConfig() {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) throw new Error("PAYSTACK_SECRET_KEY is not configured.");
  return {
    secret,
    currency: (process.env.PAYSTACK_CURRENCY || "USD").toUpperCase(),
    monthlyAmount: Number(process.env.PAYSTACK_MONTHLY_AMOUNT || 1900),
    yearlyAmount: Number(process.env.PAYSTACK_YEARLY_AMOUNT || 14900),
  };
}

export async function paystackRequest(path: string, init?: RequestInit) {
  const { secret } = paymentConfig();
  const response = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });
  const body = await response.json().catch(() => null);
  if (!response.ok || !body?.status) {
    throw new Error(body?.message || "Paystack request failed.");
  }
  return body.data;
}

export function validPaystackSignature(rawBody: string, signature: string | null) {
  const { secret } = paymentConfig();
  if (!signature) return false;
  const expected = createHmac("sha512", secret).update(rawBody).digest("hex");
  const a = Buffer.from(expected, "hex");
  const b = Buffer.from(signature, "hex");
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function reconcilePayment(reference: string) {
  const payment = await prisma.payment.findUnique({ where: { reference } });
  if (!payment) throw new Error("Payment reference not found.");

  const verified = await paystackRequest(`/transaction/verify/${encodeURIComponent(reference)}`);
  const config = paymentConfig();
  if (
    verified.status !== "success" ||
    verified.reference !== payment.reference ||
    Number(verified.amount) !== payment.amount ||
    String(verified.currency).toUpperCase() !== payment.currency ||
    String(verified.customer?.email || "").toLowerCase() !== payment.email.toLowerCase()
  ) {
    if (verified.status && verified.status !== "success") {
      await prisma.payment.update({ where: { reference }, data: { status: String(verified.status) } });
    }
    return { success: false, status: String(verified.status || "unverified") };
  }

  await prisma.$transaction(async (tx) => {
    await tx.payment.update({
      where: { reference },
      data: { status: "success", paidAt: payment.paidAt || new Date() },
    });
    const user = await tx.user.findUnique({ where: { email: payment.email } });
    if (user) {
      await tx.user.update({
        where: { id: user.id },
        data: { plan: payment.plan === "yearly" ? "premium-yearly" : "premium-monthly" },
      });
    }
  });
  return { success: true, status: "success", plan: payment.plan, currency: config.currency };
}
