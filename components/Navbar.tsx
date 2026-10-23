import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="text-xl font-bold">Forex Academia</Link>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
}
