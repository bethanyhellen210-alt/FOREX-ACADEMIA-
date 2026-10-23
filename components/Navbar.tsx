import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-950 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        /
          <h1 className="text-white text-2xl font-bold">
            Trading Academy
          </h1>
        </Link>

        <div className="flex gap-6 text-white">

          /Home</Link>

          /coursesCourses</Link>

          /marketplaceMarketplace</Link>

          /pricingPricing</Link>

          /loginLogin</Link>

          /registerRegister</Link>

        </div>

      </div>

    </nav>
  );
}
