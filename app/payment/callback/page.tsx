"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function CallbackResult() {
  const params = useSearchParams();
  const reference = params.get("reference") || "";
  const [status, setStatus] = useState("Checking your payment securely…");

  useEffect(() => {
    let active = true;
    if (!reference) {
      setStatus("No payment reference was supplied. If you paid, contact support with your receipt.");
      return () => { active = false; };
    }
    fetch("/api/payments/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reference }),
    }).then(async (response) => {
      const data = await response.json();
      if (!active) return;
      setStatus(response.ok && data.success
        ? "Payment verified. Your membership payment is recorded. Sign in using the same email address used at checkout."
        : data.error || "Payment is not confirmed yet. Do not pay again immediately; check your receipt or contact support.");
    }).catch(() => {
      if (active) setStatus("We could not verify the payment right now. Your payment may still be processing; please try again shortly.");
    });
    return () => { active = false; };
  }, [reference]);

  return <main className="min-h-screen bg-slate-950 px-5 py-16 text-white"><section className="mx-auto max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-8"><h1 className="text-3xl font-bold">Payment status</h1><p className="mt-5 leading-7 text-slate-300">{status}</p>{reference && <p className="mt-4 break-all text-xs text-slate-500">Reference: {reference}</p>}<div className="mt-8 flex flex-wrap gap-3"><Link href="/pricing" className="rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950">Membership plans</Link><Link href="/" className="rounded-lg border border-slate-700 px-5 py-3">Home</Link></div></section></main>;
}

export default function PaymentCallbackPage() {
  return <Suspense fallback={<main className="min-h-screen bg-slate-950 p-8 text-white">Checking payment…</main>}><CallbackResult /></Suspense>;
}
