import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Description",
  keywords: ["Brayan", "Infomración"],
};

export default function PricingPage() {
  return (
    <main className="flex flex-col items-center">
      <span className="text-7xl">Pricing Page</span>
    </main>
  );
}
