import Link from "next/link";
import Navbar from "@/components/Navbar";

const courses = [
  { title: "Forex Fundamentals", level: "Beginner", description: "Learn currency pairs, pips, spreads, sessions, and the basics of how the forex market works." },
  { title: "Gold Market Education", level: "Beginner to intermediate", description: "Study XAU/USD drivers, volatility, market sessions, and risk-aware analysis." },
  { title: "Technical Analysis", level: "Intermediate", description: "Explore trend structure, support and resistance, candlesticks, and multi-timeframe context." },
  { title: "Risk Management", level: "All levels", description: "Understand position sizing, stop-loss planning, risk-to-reward, and trading journals." },
  { title: "Trading Psychology", level: "All levels", description: "Build consistent routines, patience, and a process for reviewing decisions." },
  { title: "Digital Markets", level: "Beginner", description: "An educational introduction to digital assets and synthetic index market concepts." },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 px-5 py-12 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Courses</h1>
          <p className="mt-4 max-w-3xl text-slate-300">Structured educational topics to help you develop market knowledge. Content is educational and does not guarantee trading results.</p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article key={course.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">{course.level}</p>
                <h2 className="mt-3 text-xl font-bold">{course.title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{course.description}</p>
                <Link href="/register" className="mt-6 inline-block rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950">Join to start learning</Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
