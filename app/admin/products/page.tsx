"use client";

export default function ProductAdmin() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Product Manager
      </h1>

      <div className="bg-slate-900 p-8 rounded-xl">

        <input
          placeholder="Product Name"
          className="w-full p-3 mb-4 bg-slate-800 rounded"
        />

        <input
          placeholder="Price"
          className="w-full p-3 mb-4 bg-slate-800 rounded"
        />

        <textarea
          placeholder="Description"
          className="w-full p-3 mb-4 bg-slate-800 rounded h-40"
        />

        <input
          type="file"
          className="mb-4"
        />

        <input
          type="file"
          className="mb-4"
        />

        <button
          className="
          bg-green-600
          px-6
          py-3
          rounded
          "
        >
          Publish Product
        </button>

      </div>

    </main>
  );
}
