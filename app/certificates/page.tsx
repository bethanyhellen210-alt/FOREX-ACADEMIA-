import CertificateCard from "@/components/CertificateCard";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10">

      <h1 className="text-5xl text-white font-bold mb-10">
        My Certificates
      </h1>

      <CertificateCard
        studentName="Alexander Skirvin"
        courseName="Forex Beginner Academy"
        date="23 October 2026"
      />

      <button
        className="
        mt-10
        bg-green-600
        text-white
        px-6
        py-3
        rounded
        "
      >
        Download Certificate
      </button>

    </main>
  );
}
