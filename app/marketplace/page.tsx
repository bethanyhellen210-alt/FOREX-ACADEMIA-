import Navbar from "@/components/Navbar";

export default function Marketplace() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white p-10">

        <h1 className="text-5xl font-bold mb-10">
          Marketplace
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 p-6 rounded-xl">

            /products/bot1.jpg

            <h2 className="text-2xl font-bold mt-4">
              Trading Journal Pro
            </h2>

            <p className="mt-2">
              Professional trading journal.
            </p>

            <p className="text-green-400 mt-4">
              $19
            </p>

            <button className="w-full mt-4 bg-green-600 p-3 rounded">
              Buy Now
            </button>

          </div>

          <div className="bg-slate-900 p-6 rounded-xl">

            /products/strategy.jpg

            <h2 className="text-2xl font-bold mt-4">
              Strategy Pack
            </h2>

            <p className="mt-2">
              Educational trading templates.
            </p>

            <p className="text-green-400 mt-4">
              $49
            </p>

            <button className="w-full mt-4 bg-green-600 p-3 rounded">
              Buy Now
            </button>

          </div>

          <div className="bg-slate-900 p-6 rounded-xl">

            /products/toolkit.jpg

            <h2 className="text-2xl font-bold mt-4">
              Premium Toolkit
            </h2>

            <p className="mt-2">
              Educational resources bundle.
            </p>

            <p className="text-green-400 mt-4">
              $99
            </p>

            <button className="w-full mt-4 bg-green-600 p-3 rounded">
              Buy Now
            </button>

          </div>

        </div>

      </main>
    </>
  );
}
