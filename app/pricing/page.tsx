import Navbar from "@/components/Navbar";

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white p-10">

        <h1 className="text-5xl font-bold text-center mb-12">
          Membership Plans
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Free */}

          <div className="bg-slate-900 rounded-xl p-8">

            <h2 className="text-3xl font-bold">
              Free
            </h2>

            <p className="text-4xl mt-6">
              $0
            </p>

            <ul className="mt-6 space-y-3">
              <li>✅ Beginner Courses</li>
              <li>✅ Basic Videos</li>
              <li>✅ Community Access</li>
              <li>❌ Premium Lessons</li>
              <li>❌ Certificates</li>
            </ul>

          </div>

          {/* Monthly */}

          <div className="bg-blue-900 rounded-xl p-8">

            <h2 className="text-3xl font-bold">
              Premium Monthly
            </h2>

            <p className="text-4xl mt-6">
              $19
            </p>

            <ul className="mt-6 space-y-3">
              <li>✅ All Courses</li>
              <li>✅ Premium Videos</li>
              <li>✅ Certificates</li>
              <li>✅ Downloads</li>
              <li>✅ Marketplace Discounts</li>
            </ul>

            <button
              className="
              mt-8
              bg-green-600
              px-6
              py-3
              rounded
              w-full
              "
            >
              Upgrade
            </button>

          </div>

          {/* Yearly */}

          <div className="bg-purple-900 rounded-xl p-8">

            <h2 className="text-3xl font-bold">
              Premium Yearly
            </h2>

            <p className="text-4xl mt-6">
              $149
            </p>

            <ul className="mt-6 space-y-3">
              <li>✅ Everything Included</li>
              <li>✅ Priority Support</li>
              <li>✅ Live Sessions</li>
              <li>✅ Premium Resources</li>
              <li>✅ VIP Access</li>
            </ul>

            <button
              className="
              mt-8
              bg-yellow-600
              px-6
              py-3
              rounded
              w-full
              "
            >
              Go Premium
            </button>

          </div>

        </div>

      </main>
    </>
  );
}
