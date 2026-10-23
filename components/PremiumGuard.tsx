type Props = {
  isPremium: boolean;
  children: React.ReactNode;
};

export default function PremiumGuard({
  isPremium,
  children,
}: Props) {

  if (!isPremium) {
    return (
      <div className="bg-slate-900 p-10 rounded-xl">

        <h2 className="text-3xl font-bold">
          Premium Content
        </h2>

        <p className="mt-4">
          Upgrade your membership to continue.
        </p>

        /pricing
          Upgrade Now
        </a>

      </div>
    );
  }

  return <>{children}</>;
}
