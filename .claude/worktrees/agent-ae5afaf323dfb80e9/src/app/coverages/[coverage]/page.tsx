import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Shield, Users, Truck, AlertTriangle, Wrench, ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { coverages, getCoverageBySlug, getAllCoverageSlugs } from "@/lib/coverages";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-8 h-8 text-white" />,
  Users: <Users className="w-8 h-8 text-white" />,
  Truck: <Truck className="w-8 h-8 text-white" />,
  AlertTriangle: <AlertTriangle className="w-8 h-8 text-white" />,
  Wrench: <Wrench className="w-8 h-8 text-white" />,
};

interface Props {
  params: Promise<{ coverage: string }>;
}

export async function generateStaticParams() {
  return getAllCoverageSlugs().map((slug) => ({ coverage: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { coverage: slug } = await params;
  const coverage = getCoverageBySlug(slug);
  if (!coverage) return { title: "Coverage Not Found" };
  const url = `https://concreteliftinginsurance.com/coverages/${slug}/`;
  return {
    title: coverage.title,
    description: coverage.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: coverage.title,
      description: coverage.description,
      siteName: "Concrete Lifting Insurance",
    },
  };
}

export default async function CoveragePage({ params }: Props) {
  const { coverage: slug } = await params;
  const coverage = getCoverageBySlug(slug);
  if (!coverage) notFound();

  const url = `https://concreteliftinginsurance.com/coverages/${slug}/`;
  const coverageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: coverage.title,
    description: coverage.description,
    url,
    provider: {
      "@id": "https://concreteliftinginsurance.com/#organization",
    },
    areaServed: "United States",
    serviceType: "Insurance",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://concreteliftinginsurance.com/" },
      { "@type": "ListItem", position: 2, name: "Coverages", item: "https://concreteliftinginsurance.com/coverages/" },
      { "@type": "ListItem", position: 3, name: coverage.shortTitle, item: url },
    ],
  };

  const otherCoverages = coverages.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <div className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coverageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AnimatedBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/coverages"
            className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#1e40af] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Coverages
          </Link>

          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e40af] to-[#3b82f6] flex items-center justify-center shadow-lg shadow-[#1e40af]/30 flex-shrink-0">
              {iconMap[coverage.icon] ?? <Shield className="w-8 h-8 text-white" />}
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(30,64,175,0.1)] border border-[rgba(30,64,175,0.3)] mb-3">
                <span className="text-xs font-bold text-[#1e40af] uppercase tracking-wider">Coverage</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f172a] leading-tight">
                {coverage.title}
              </h1>
            </div>
          </div>

          <p className="text-xl text-[#475569] leading-relaxed max-w-3xl">
            {coverage.longDescription}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Features */}
            <div
              className="p-8 rounded-3xl"
              style={{
                background: "rgba(248,250,252,0.95)",
                border: "1px solid rgba(30,64,175,0.12)",
              }}
            >
              <h2 className="text-xl font-black text-[#0f172a] mb-5">What's Covered</h2>
              <ul className="space-y-3">
                {coverage.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1e40af] flex-shrink-0 mt-0.5" />
                    <span className="text-[#475569] text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Claims + Limits */}
            <div className="space-y-6">
              <div
                className="p-8 rounded-3xl"
                style={{
                  background: "rgba(248,250,252,0.95)",
                  border: "1px solid rgba(30,64,175,0.12)",
                }}
              >
                <h2 className="text-xl font-black text-[#0f172a] mb-5">Common Claims</h2>
                <ul className="space-y-3">
                  {coverage.commonClaims.map((claim) => (
                    <li key={claim} className="flex items-start gap-3">
                      <span className="text-[#1e40af] font-black mt-0.5">→</span>
                      <span className="text-[#475569] text-sm leading-relaxed">{claim}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-6 rounded-3xl"
                style={{
                  background: "rgba(30,64,175,0.05)",
                  border: "1px solid rgba(30,64,175,0.15)",
                }}
              >
                <p className="text-xs font-bold text-[#1e40af] uppercase tracking-wider mb-2">Typical Limits</p>
                <p className="text-[#0f172a] font-semibold text-sm">{coverage.typicalLimits}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            className="p-10 rounded-3xl text-center mb-12"
            style={{
              background: "linear-gradient(135deg, rgba(30,64,175,0.08) 0%, rgba(30,64,175,0.04) 100%)",
              border: "1px solid rgba(30,64,175,0.2)",
            }}
          >
            <h2 className="text-2xl font-black text-[#0f172a] mb-3">
              Get a Quote for {coverage.shortTitle}
            </h2>
            <p className="text-[#475569] mb-6 max-w-lg mx-auto text-sm">
              Our specialists will review your operation and put together a policy that fits your specific
              exposure—within one business day.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-bold rounded-xl shadow-lg shadow-[#1e40af]/30 hover:shadow-[#1e40af]/50 transition-all"
            >
              Request Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Other Coverages */}
          {otherCoverages.length > 0 && (
            <div>
              <h2 className="text-2xl font-black text-[#0f172a] mb-6">Other Coverages</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {otherCoverages.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/coverages/${c.slug}`}
                    className="group p-5 rounded-2xl hover:-translate-y-0.5 transition-transform"
                    style={{
                      background: "rgba(248,250,252,0.95)",
                      border: "1px solid rgba(30,64,175,0.12)",
                    }}
                  >
                    <p className="font-bold text-[#0f172a] text-sm group-hover:text-[#1e40af] transition-colors mb-1">
                      {c.shortTitle}
                    </p>
                    <p className="text-[#64748b] text-xs line-clamp-2">{c.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
