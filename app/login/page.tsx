"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setBusy(true);
    try {
      const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Sign in failed.");
      window.location.assign("/pricing");
    } catch (err) { setError(err instanceof Error ? err.message : "Sign in failed."); setBusy(false); }
  }
  return <><Navbar /><main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 py-12 text-white"><section className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8"><h1 className="text-3xl font-bold">Welcome back</h1><p className="mt-3 text-slate-300">Sign in to continue learning.</p><form onSubmit={submit} className="mt-7 space-y-4"><input required type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" className="w-full rounded-lg bg-slate-800 p-3 text-white" /><input required type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full rounded-lg bg-slate-800 p-3 text-white" />{error && <p role="alert" className="text-sm text-red-300">{error}</p>}<button disabled={busy} className="w-full rounded-lg bg-emerald-500 p-3 font-semibold text-slate-950 disabled:opacity-60">{busy ? "Signing in…" : "Sign in"}</button></form><p className="mt-5 text-sm text-slate-400">New here? <Link href="/register" className="text-emerald-400">Create an account</Link></p></section></main></>;
}
