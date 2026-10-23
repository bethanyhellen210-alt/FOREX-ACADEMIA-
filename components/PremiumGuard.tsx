import Link from "next/link";
import type { ReactNode } from "react";

type Props = { isPremium: boolean; children: ReactNode };

export default function PremiumGuard({ isPremium, children }: Props) {
  if (!isPremium) {
    return (
      <div className="rounded-xl bg-slate-900 p-8 text-white">
        <h2 className="text-3xl font-bold">Premium content</h2>
        <p className="mt-4 text-slate-300">Upgrade your membership to access this content.</p>
        <Link href="/pricing" className="mt-6 inline-block rounded bg-emerald-500 px-5 py-3 font-semibold text-slate-950">View membership plans</Link>
      </div>
    );
  }
  return <>{children}</>;
}
