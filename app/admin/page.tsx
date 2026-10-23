import Navbar from "@/components/Navbar";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white p-8">

        <h1 className="text-5xl font-bold mb-10">
          Admin Dashboard
        </h1>

        {/* Statistics */}

        <section className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Total Students
            </h2>

            <p className="text-4xl font-bold mt-3">
              0
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Premium Members
            </h2>

            <p className="text-4xl font-bold mt-3">
              0
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Courses
            </h2>

            <p className="text-4xl font-bold mt-3">
              0
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-gray-400">
              Marketplace Products
            </h2>

            <p className="text-4xl font-bold mt-3">
              0
            </p>
          </div>

        </section>

        {/* Course Management */}

        <section className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            Course Management
          </h2>

          <div className="bg-slate-900 p-6 rounded-xl">

            <button className="bg-green-600 px-6 py-3 rounded">
              Create Course
            </button>

            <button className="bg-blue-600 px-6 py-3 rounded ml-4">
              Manage Courses
            </button>

          </div>

        </section>

        {/* Upload Section */}

        <section className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            Upload Lesson Content
          </h2>

          <div className="bg-slate-900 rounded-xl p-6">

            <div className="mb-5">
              <label>Upload Video</label>

              <input
                type="file"
                accept="video/*"
                className="block mt-2"
              />
            </div>

            <div className="mb-5">
              <label>Upload Image</label>

              <input
                type="file"
                accept="image/*"
                className="block mt-2"
              />
            </div>

            <div className="mb-5">
              <label>Upload PDF</label>

              <input
                type="file"
                accept=".pdf"
                className="block mt-2"
              />
            </div>

            <button className="bg-purple-600 px-6 py-3 rounded">
              Upload Files
            </button>

          </div>

        </section>

        {/* Premium Content */}

        <section className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            Premium Lessons
          </h2>

          <div className="bg-slate-900 p-6 rounded-xl">

            <select className="w-full p-3 bg-slate-800 rounded">

              <option>Free Lesson</option>

              <option>Premium Lesson</option>

            </select>

          </div>

        </section>

        {/* Marketplace */}

        <section className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            Marketplace
          </h2>

          <div className="bg-slate-900 p-6 rounded-xl">

            <input
              placeholder="Product Name"
              className="w-full p-3 bg-slate-800 rounded mb-4"
            />

            <input
              placeholder="Price"
              className="w-full p-3 bg-slate-800 rounded mb-4"
            />

            <textarea
              placeholder="Product Description"
              className="w-full p-3 bg-slate-800 rounded mb-4"
            />

            <button className="bg-orange-600 px-6 py-3 rounded">
              Publish Product
            </button>

          </div>

        </section>

        {/* Broker Referrals */}

        <section className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            Broker Referral Links
          </h2>

          <div className="bg-slate-900 p-6 rounded-xl">

            <input
              placeholder="Forex Referral Link"
              className="w-full p-3 bg-slate-800 rounded mb-4"
            />

            <input
              placeholder="Digital Markets Referral Link"
              className="w-full p-3 bg-slate-800 rounded mb-4"
            />

            <button className="bg-cyan-600 px-6 py-3 rounded">
              Save Links
            </button>

          </div>

        </section>

        {/* Students */}

        <section className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            Student Management
          </h2>

          <div className="bg-slate-900 p-6 rounded-xl">

            <button className="bg-red-600 px-6 py-3 rounded">
              View Students
            </button>

          </div>

        </section>

      </main>
    </>
  );
}
