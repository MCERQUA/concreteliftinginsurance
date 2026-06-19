import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Shield, Users, Truck, AlertTriangle, Wrench, ArrowRight } from "lucide-react";
import { coverages } from "@/lib/coverages";

export const metadata: Metadata = {
  title: "Concrete Lifting Insurance Coverages",
  description:
    "Explore all coverage types available for concrete lifting contractors: general liability, workers comp, commercial auto, pollution liability, and equipment breakdown.",
  alternates: { canonical: "https://concreteliftinginsurance.com/coverages/" },
};

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-7 h-7 text-[#1e40af]" />,
  Users: <Users className="w-7 h-7 text-[#1e40af]" />,
  Truck: <Truck className="w-7 h-7 text-[#1e40af]" />,
  AlertTriangle: <AlertTriangle className="w-7 h-7 text-[#1e40af]" />,
  Wrench: <Wrench className="w-7 h-7 text-[#1e40af]" />,
};

export default function CoveragesPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(30,64,175,0.1)] border border-[rgba(30,64,175,0.3)] mb-6">
              <Shield className="w-4 h-4 text-[#1e40af]" />
              <span className="text-xs font-bold text-[#1e40af] uppercase tracking-wider">Coverage Types</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#0f172a] mb-6">
              Coverage Built for{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" }}
              >
                Lifting Contractors
              </span>
            </h1>
            <p className="text-xl text-[#475569] leading-relaxed">
              Every coverage type below is endorsed specifically for spray foam lifting and mud jacking
              operations—not generic contractor policies with hidden exclusions.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Cards */}
      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverages.map((coverage) => (
              <Link
                key={coverage.slug}
                href={`/coverages/${coverage.slug}`}
                className="group rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
                style={{
                  background: "rgba(248,250,252,0.95)",
                  border: "1px solid rgba(30,64,175,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-[#1e40af]/10 flex items-center justify-center mb-5">
                    {iconMap[coverage.icon] ?? <Shield className="w-7 h-7 text-[#1e40af]" />}
                  </div>
                  <h2 className="text-xl font-black text-[#0f172a] mb-3 group-hover:text-[#1e40af] transition-colors">
                    {coverage.shortTitle}
                  </h2>
                  <p className="text-[#475569] text-sm leading-relaxed mb-5 flex-1">
                    {coverage.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {coverage.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[#475569]">
                        <span className="text-[#1e40af] font-bold mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-[#1e40af] font-bold text-sm group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-16 p-10 rounded-3xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(30,64,175,0.08) 0%, rgba(30,64,175,0.04) 100%)",
              border: "1px solid rgba(30,64,175,0.2)",
            }}
          >
            <h2 className="text-3xl font-black text-[#0f172a] mb-4">
              Not sure which coverages you need?
            </h2>
            <p className="text-[#475569] mb-8 max-w-xl mx-auto">
              Our concrete lifting specialists will review your operation and recommend exactly the coverage you need—nothing
              more, nothing less.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-bold rounded-xl shadow-lg shadow-[#1e40af]/30 hover:shadow-[#1e40af]/50 transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
