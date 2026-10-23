import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">

      {/* Hero */}

      <section className="px-10 py-24 text-center">

        <h1 className="text-6xl font-bold">
          Master Forex, Gold, Bitcoin &
          Digital Markets
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          Learn Forex, Gold, Bitcoin, Volatility Indices,
          Risk Management, Trading Psychology and Professional
          Market Analysis through structured educational courses.
        </p>

        <div className="flex justify-center gap-4 mt-10">

          /register
            Start Learning
          </Link>

          /courses
            View Courses
          </Link>

        </div>

      </section>

      {/* Markets */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center">
          Markets Covered
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold">
              Forex
            </h3>
            <p>EUR/USD GBP/USD USD/JPY</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold">
              Gold
            </h3>
            <p>XAU/USD Education</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold">
              Bitcoin
            </h3>
            <p>BTC/USD Education</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold">
              Digital Markets
            </h3>
            <p>Volatility & Digits</p>
          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center">
          What You'll Learn
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-slate-900 rounded-xl p-6">
            <h3 className="text-2xl font-bold">
              Technical Analysis
            </h3>

            <ul className="mt-4 space-y-2">
              <li>Support & Resistance</li>
              <li>Market Structure</li>
              <li>Candlesticks</li>
              <li>Trend Analysis</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-xl p-6">
            <h3 className="text-2xl font-bold">
              Risk Management
            </h3>

            <ul className="mt-4 space-y-2">
              <li>Position Sizing</li>
              <li>Risk Reward</li>
              <li>Capital Protection</li>
              <li>Trade Journals</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-xl p-6">
            <h3 className="text-2xl font-bold">
              Trading Psychology
            </h3>

            <ul className="mt-4 space-y-2">
              <li>Discipline</li>
              <li>Patience</li>
              <li>Mindset</li>
              <li>Performance Growth</li>
            </ul>
          </div>

        </div>

      </section>

      {/* Premium */}

      <section className="bg-slate-900 py-24">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold">
            Premium Academy
          </h2>

          <p className="mt-5 text-gray-300">
            Unlock Advanced Lessons, Certificates,
            Downloads, Premium Videos & Live Sessions.
          </p>

          <div className="mt-8">

            /pricing
              Upgrade To Premium
            </Link>

          </div>

        </div>

      </section>

      {/* Marketplace */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center">
          Trading Resources Marketplace
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-slate-900 p-6 rounded-xl">
            Trading Journal
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            Strategy Templates
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            Educational Trading Tools
          </div>

        </div>

      </section>

      {/* Brokers */}

      <section className="bg-slate-900 py-20">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Recommended Broker Partners
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="p-6 bg-slate-800 rounded-xl">
              <h3 className="text-2xl font-bold">
                Forex Broker
              </h3>

              #
                Open Account
              </a>
            </div>

            <div className="p-6 bg-slate-800 rounded-xl">
              <h3 className="text-2xl font-bold">
                Digital Markets Broker
              </h3>

              #
                Open Account
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="text-center py-10 text-gray-400">

        Educational Purposes Only

        <p className="mt-4">
          Trading involves substantial risk.
          This platform does not provide financial advice.
        </p>

      </footer>

    </main>
  );
}
