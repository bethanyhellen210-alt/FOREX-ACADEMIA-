"use client";

import Navbar from "@/components/Navbar";

export default function CourseManager() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white p-8">

        <h1 className="text-5xl font-bold mb-10">
          Course Management
        </h1>

        {/* Create Course */}

        <section className="bg-slate-900 p-8 rounded-xl mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Create New Course
          </h2>

          <input
            type="text"
            placeholder="Course Title"
            className="w-full p-3 rounded bg-slate-800 mb-4"
          />

          <textarea
            placeholder="Course Description"
            className="w-full p-3 rounded bg-slate-800 mb-4 h-32"
          />

          <select
            className="w-full p-3 rounded bg-slate-800 mb-4"
          >
            <option>Forex</option>
            <option>Gold</option>
            <option>Bitcoin</option>
            <option>Digital Markets</option>
            <option>Risk Management</option>
            <option>Trading Psychology</option>
          </select>

          <input
            type="file"
            accept="image/*"
            className="mb-4"
          />

          <button className="bg-green-600 px-6 py-3 rounded">
            Create Course
          </button>

        </section>

        {/* Add Lesson */}

        <section className="bg-slate-900 p-8 rounded-xl mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Add Lesson
          </h2>

          <input
            type="text"
            placeholder="Lesson Title"
            className="w-full p-3 rounded bg-slate-800 mb-4"
          />

          <textarea
            placeholder="Lesson Notes"
            className="w-full p-3 rounded bg-slate-800 mb-4 h-40"
          />

          <select
            className="w-full p-3 rounded bg-slate-800 mb-4"
          >
            <option>Free Lesson</option>
            <option>Premium Lesson</option>
          </select>

          <h3 className="text-xl mb-2">
            Upload Lesson Video
          </h3>

          <input
            type="file"
            accept="video/*"
            className="mb-4"
          />

          <h3 className="text-xl mb-2">
            Upload Lesson Image
          </h3>

          <input
            type="file"
            accept="image/*"
            className="mb-4"
          />

          <h3 className="text-xl mb-2">
            Upload PDF Notes
          </h3>

          <input
            type="file"
            accept=".pdf"
            className="mb-6"
          />

          <button className="bg-blue-600 px-6 py-3 rounded">
            Publish Lesson
          </button>

        </section>

        {/* Quiz Builder */}

        <section className="bg-slate-900 p-8 rounded-xl mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Create Quiz
          </h2>

          <input
            type="text"
            placeholder="Question"
            className="w-full p-3 rounded bg-slate-800 mb-4"
          />

          <input
            type="text"
            placeholder="Option A"
            className="w-full p-3 rounded bg-slate-800 mb-4"
          />

          <input
            type="text"
            placeholder="Option B"
            className="w-full p-3 rounded bg-slate-800 mb-4"
          />

          <input
            type="text"
            placeholder="Option C"
            className="w-full p-3 rounded bg-slate-800 mb-4"
          />

          <input
            type="text"
            placeholder="Correct Answer"
            className="w-full p-3 rounded bg-slate-800 mb-4"
          />

          <button className="bg-purple-600 px-6 py-3 rounded">
            Add Quiz
          </button>

        </section>

        {/* Existing Courses */}

        <section className="bg-slate-900 p-8 rounded-xl">

          <h2 className="text-3xl font-bold mb-6">
            Existing Courses
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-800 p-4 rounded">
              Forex Beginner Course
            </div>

            <div className="bg-slate-800 p-4 rounded">
              Gold Masterclass
            </div>

            <div className="bg-slate-800 p-4 rounded">
              Bitcoin Fundamentals
            </div>

            <div className="bg-slate-800 p-4 rounded">
              Digital Markets Academy
            </div>

          </div>

        </section>

      </main>
    </>
  );
}
