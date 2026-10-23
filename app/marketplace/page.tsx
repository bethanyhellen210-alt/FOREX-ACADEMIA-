import Link from "next/link";
import Navbar from "@/components/Navbar";

const resources = [
  { title: "Trading Journal Pro", description: "A structured journal template for reviewing your trading decisions.", price: "$19" },
  { title: "Strategy Pack", description: "Educational worksheets for documenting and testing trading ideas.", price: "$49" },
  { title: "Premium Toolkit", description: "A collection of educational planning and analysis resources.", price: "$99" },
];

export default function Marketplace() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 px-5 py-12 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Marketplace</h1>
          <p className="mt-3 max-w-2xl text-slate-300">Explore educational resources to support your market study. Checkout is not configured yet.</p>
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <article key={resource.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="flex h-36 items-center justify-center rounded-xl bg-slate-800 text-sm text-slate-400">Educational resource</div>
                <h2 className="mt-5 text-2xl font-bold">{resource.title}</h2>
                <p className="mt-3 min-h-16 text-slate-300">{resource.description}</p>
                <p className="mt-4 text-xl font-semibold text-emerald-400">{resource.price}</p>
                <Link href="/login" className="mt-5 block rounded-lg bg-emerald-500 px-4 py-3 text-center font-semibold text-slate-950">Sign in to continue</Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
