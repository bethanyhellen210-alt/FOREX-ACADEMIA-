import Navbar from "@/components/Navbar";
import PaystackCheckout from "@/components/PaystackCheckout";

const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    description: "Start learning the fundamentals.",
    features: ["Beginner learning resources", "Course previews", "Market education"],
  },
  {
    id: "monthly",
    name: "Premium Monthly",
    price: "$19",
    description: "Premium access billed as a one-time monthly membership payment.",
    features: ["Premium course access", "Premium lesson materials", "Downloadable resources", "Membership access after verified payment"],
  },
  {
    id: "yearly",
    name: "Premium Yearly",
    price: "$149",
    description: "A year of premium learning access.",
    features: ["All premium learning resources", "Course materials and downloads", "Priority learning resources", "Membership access after verified payment"],
  },
] as const;

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 px-5 py-12 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Forex Academia</p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Membership plans</h1>
            <p className="mt-4 leading-7 text-slate-300">Choose a plan. Premium checkout is handled by Paystack, and payment is verified on the server before membership is updated.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.id} className={`flex flex-col rounded-2xl border p-6 sm:p-8 ${plan.id === "monthly" ? "border-emerald-400 bg-slate-900" : "border-slate-800 bg-slate-900/70"}`}>
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <p className="mt-4 text-4xl font-bold">{plan.price}</p>
                <p className="mt-3 min-h-12 leading-6 text-slate-300">{plan.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {plan.features.map((feature) => <li key={feature} className="flex gap-2"><span className="text-emerald-400">✓</span><span>{feature}</span></li>)}
                </ul>
                <div className="mt-auto pt-6">
                  {plan.id === "free" ? (
                    <a href="/register" className="block rounded-lg border border-slate-700 px-5 py-3 text-center font-semibold hover:bg-slate-800">Get started free</a>
                  ) : (
                    <PaystackCheckout plan={plan.id} label={plan.id === "monthly" ? "Pay with Paystack" : "Get yearly access"} />
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-slate-500">Prices shown are USD display prices. Your Paystack integration must be configured for a supported currency and matching minor-unit amounts. Do not enable live payments until you have tested the integration.</p>
        </div>
      </main>
    </>
  );
}
