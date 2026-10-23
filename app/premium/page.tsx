import PremiumGuard from "@/components/PremiumGuard";

export default function PremiumPage() {

  const isPremium = false;

  return (
    <main className="p-10">

      <PremiumGuard isPremium={isPremium}>

        <h1 className="text-5xl font-bold">
          Premium Trading Academy
        </h1>

        <p className="mt-6">
          Welcome premium member.
        </p>

      </PremiumGuard>

    </main>
  );
}
