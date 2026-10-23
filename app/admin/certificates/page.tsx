"use client";

export default function AdminCertificates() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Certificate Manager
      </h1>

      <div className="bg-slate-900 p-8 rounded-xl">

        <input
          placeholder="Student Name"
          className="
          w-full
          p-3
          bg-slate-800
          rounded
          mb-4
          "
        />

        <input
          placeholder="Course Name"
          className="
          w-full
          p-3
          bg-slate-800
          rounded
          mb-4
          "
        />

        <button
          className="
          bg-green-600
          px-6
          py-3
          rounded
          "
        >
          Generate Certificate
        </button>

      </div>

    </main>
  );
}
