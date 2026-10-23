"use client";

import Navbar from "@/components/Navbar";

export default function RegisterPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 flex items-center justify-center">

        <div className="bg-slate-900 p-10 rounded-xl w-full max-w-md">

          <h1 className="text-4xl text-white font-bold mb-6">

            Create Account

          </h1>

          <p className="text-gray-400 mb-8">

            Start your trading education journey.

          </p>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded bg-slate-800 text-white"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded bg-slate-800 text-white"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-slate-800 text-white"
            />

            <button
              className="
              w-full
              bg-green-600
              hover:bg-green-700
              text-white
              p-3
              rounded
              "
            >
              Create Account
            </button>

          </form>

        </div>

      </main>
    </>
  );
}
