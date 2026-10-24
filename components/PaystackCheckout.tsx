"use client";

import { useState } from "react";

type Props = { plan: "monthly" | "yearly"; label: string };

export default function PaystackCheckout({ plan, label }: Props) {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function checkout() {
    setError("");
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }
    setBusy(true);
    try {
      const response = await fetch("/api/payments/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), plan }),
      });
      const data = await response.json();
      if (!response.ok || !data.authorizationUrl) throw new Error(data.error || "Could not start checkout.");
      window.location.assign(data.authorizationUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Payment could not be started.");
      setBusy(false);
    }
  }

  return <div className="mt-7">
    <label className="mb-2 block text-sm text-slate-300" htmlFor={`paystack-email-${plan}`}>Email for payment receipt and membership</label>
    <input id={`paystack-email-${plan}`} type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none focus:border-emerald-400" />
    <button type="button" onClick={checkout} disabled={busy} className="mt-3 w-full rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-60">{busy ? "Connecting to Paystack…" : label}</button>
    {error && <p role="alert" className="mt-3 text-sm text-red-300">{error}</p>}
    <p className="mt-3 text-xs leading-5 text-slate-400">Checkout is processed securely by Paystack. Membership is activated only after server-side payment verification.</p>
  </div>;
}
