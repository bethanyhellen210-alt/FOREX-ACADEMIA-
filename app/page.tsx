import Link from "next/link";

const markets = [
  { title: "Forex", detail: "EUR/USD · GBP/USD · USD/JPY" },
  { title: "Gold", detail: "XAU/USD education" },
  { title: "Bitcoin", detail: "BTC/USD education" },
  { title: "Digital markets", detail: "Volatility indices and digit markets" },
];
const topics = [
  { title: "Technical analysis", items: ["Support and resistance", "Market structure", "Candlestick patterns", "Trend analysis"] },
  { title: "Risk management", items: ["Position sizing", "Risk-to-reward", "Capital protection", "Trade journals"] },
  { title: "Trading psychology", items: ["Discipline", "Patience", "Mindset", "Performance review"] },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link href="/" className="text-xl font-bold tracking-wide">FOREX ACADEMIA</Link>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <Link href="/marketplace" className="hover:text-white">Marketplace</Link>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/login" className="hover:text-white">Sign in</Link>
            <Link href="/register" className="rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-400">Join academy</Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-20 text-center sm:py-28">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">Learn · Practice · Improve</p>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">Master Forex, Gold, Bitcoin and Digital Markets</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">Build your market knowledge through structured lessons in technical analysis, risk management, trading psychology and market research.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/register" className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400">Start learning</Link>
          <Link href="/courses" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:bg-slate-900">Explore courses</Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Markets covered</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((market) => <article key={market.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6"><h3 className="text-xl font-bold">{market.title}</h3><p className="mt-3 text-slate-300">{market.detail}</p></article>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">What you’ll learn</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {topics.map((topic) => <article key={topic.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6"><h3 className="text-xl font-bold">{topic.title}</h3><ul className="mt-4 space-y-2 text-slate-300">{topic.items.map((item) => <li key={item}>• {item}</li>)}</ul></article>)}
        </div>
      </section>

      <section className="mx-5 my-12 rounded-3xl border border-slate-800 bg-slate-900 px-5 py-14 text-center sm:mx-auto sm:max-w-6xl sm:px-10">
        <h2 className="text-3xl font-bold sm:text-4xl">Take your learning further</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">Explore membership options, educational resources and course material for your learning journey.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-4"><Link href="/pricing" className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950">View membership</Link><Link href="/marketplace" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold">Browse resources</Link></div>
      </section>

      <footer className="border-t border-slate-800 px-5 py-8 text-center text-sm text-slate-400">
        <p>Forex Academia · Educational purposes only.</p>
        <p className="mt-2">Trading involves substantial risk. Educational content is not financial advice or a guarantee of results.</p>
      </footer>
    </main>
  );
}
