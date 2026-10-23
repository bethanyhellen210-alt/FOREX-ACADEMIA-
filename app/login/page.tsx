"use client";

import Navbar from "@/components/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 flex items-center justify-center">

        <div className="bg-slate-900 p-10 rounded-xl w-full max-w-md">

          <h1 className="text-4xl text-white font-bold mb-6">

            Welcome Back

          </h1>

          <p className="text-gray-400 mb-8">

            Sign in to continue learning.

          </p>

          <form className="space-y-4">

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
              bg-blue-600
              hover:bg-blue-700
              text-white
              p-3
              rounded
              "
            >
              Sign In
            </button>

          </form>

        </div>

      </main>
    </>
  );
}
