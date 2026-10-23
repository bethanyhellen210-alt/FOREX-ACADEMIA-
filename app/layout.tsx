import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forex Academia | Trading Education",
  description: "Learn forex, gold, digital markets, technical analysis, and risk management through structured trading education.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
