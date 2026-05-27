import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import {
  Shield,
  Phone,
  ArrowRight,
  Check,
  Wrench,
  Building2,
  Users,
  Truck,
  AlertTriangle,
  FileText,
  Droplets,
  HardHat,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance Coverage for Concrete Lifting Contractors",
  description:
    "Explore our specialized insurance coverage for concrete lifting contractors: spray foam lifting, mud jacking, general liability, workers comp, commercial auto, and equipment breakdown.",
};

const services = [
  {
    id: "spray-foam",
    icon: Wrench,
    title: "Spray Foam Lifting Insurance",
    shortDesc: "Polyurethane Foam Injection Coverage",
    price: "Starting at $3,200/year",
    description:
      "Comprehensive coverage designed specifically for contractors who use polyurethane foam injection to lift and level concrete slabs. Our spray foam lifting insurance addresses the unique risks of this method, including pollution liability for foam materials.",
    whoFor: "Contractors using spray foam/foam jacking to raise concrete slabs in commercial and residential applications.",
    features: [
      "Pollution liability coverage (ISO GL 99 17)",
      "Equipment breakdown for pumps and hoses",
      "Completed operations coverage",
      "Tools and equipment protection",
      "Chemical liability coverage",
      "Subcontractor coverage options",
    ],
    gradient: "from-[#1e40af]/20 via-[#3b82f6]/10 to-transparent",
    iconColor: "text-[#1e40af]",
    popular: true,
  },
  {
    id: "mud-jacking",
    icon: Building2,
    title: "Mud Jacking Insurance",
    shortDesc: "Slurry & Concrete Leveling Coverage",
    price: "Starting at $2,800/year",
    description:
      "Specialized protection for traditional mud jacking contractors. Coverage addresses the specific risks of slurry-based concrete leveling, including property damage from blowouts and equipment protection for mud pumps and delivery systems.",
    whoFor: "Contractors using cementitious slurry (mud) to lift settled concrete slabs.",
    features: [
      "General liability with property damage",
      "Equipment breakdown coverage",
      "Blowout/overspray liability",
      "Legal defense cost coverage",
      "Medical payments coverage",
      "Completed operations",
    ],
    gradient: "from-[#3b82f6]/20 via-[#60a5fa]/10 to-transparent",
    iconColor: "text-[#3b82f6]",
    popular: false,
  },
  {
    id: "general-liability",
    icon: Shield,
    title: "General Liability Insurance",
    shortDesc: "Core Business Protection",
    price: "Starting at $1,500/year",
    description:
      "Essential protection for your concrete lifting business against third-party property damage and bodily injury claims. Our general liability coverage is specifically endorsed for concrete lifting operations, not a generic commercial policy.",
    whoFor: "Any concrete lifting contractor, whether spray foam or mud jacking.",
    features: [
      "$1M-$5M coverage limits available",
      "Per-occurrence and aggregate limits",
      "Property damage coverage",
      "Bodily injury coverage",
      "Legal defense cost inclusion",
      "Medical payments coverage",
    ],
    gradient: "from-[#10b981]/20 via-[#34d399]/10 to-transparent",
    iconColor: "text-[#10b981]",
    popular: false,
  },
  {
    id: "workers-comp",
    icon: Users,
    title: "Workers Compensation",
    shortDesc: "Employee Injury & Illness Coverage",
    price: "Starting at $4,500/year",
    description:
      "Protect your crew and your business with workers compensation coverage designed for concrete lifting work. Covers medical expenses, lost wages, and rehabilitation for employees injured on the job, including repetitive stress injuries common in our industry.",
    whoFor: "Concrete lifting contractors with employees (required in most states).",
    features: [
      "All 50 states coverage",
      "Medical expense benefits",
      "Disability income benefits",
      "Rehabilitation expense coverage",
      "Death benefits coverage",
      "OSHA compliance support",
    ],
    gradient: "from-[#8b5cf6]/20 via-[#a78bfa]/10 to-transparent",
    iconColor: "text-[#8b5cf6]",
    popular: false,
  },
  {
    id: "commercial-auto",
    icon: Truck,
    title: "Commercial Auto Insurance",
    shortDesc: "Fleet & Contractor Vehicle Coverage",
    price: "Starting at $2,200/year",
    description:
      "Coverage for your trucks, vans, and trailers used in concrete lifting operations. Includes hired and non-owned auto coverage for when you rent vehicles or use personal trucks for business. Hauling heavy equipment is specifically covered.",
    whoFor: "Contractors with company vehicles or who use personal vehicles for business.",
    features: [
      "Liability coverage for fleet vehicles",
      "Physical damage coverage",
      "Hired and non-owned auto",
      "Trailer interchange coverage",
      "Uninsured motorist coverage",
      "Mobile equipment haulage",
    ],
    gradient: "from-[#f59e0b]/20 via-[#fbbf24]/10 to-transparent",
    iconColor: "text-[#f59e0b]",
    popular: false,
  },
  {
    id: "equipment",
    icon: AlertTriangle,
    title: "Equipment Breakdown Insurance",
    shortDesc: "Pump & Tool Protection",
    price: "Starting at $800/year",
    description:
      "Protection for your concrete lifting equipment including spray foam pumps, mud jacking rigs, hydraulic jacks, and hand tools. Coverage includes sudden and accidental breakdown, mechanical failure, and power surge damage.",
    whoFor: "Any contractor with equipment investments over $10,000.",
    features: [
      "Pump and rig breakdown coverage",
      "Hydraulic system coverage",
      "Electrical motor coverage",
      "Tool coverage (portable)",
      "Expedited repair expense",
      "Debris removal coverage",
    ],
    gradient: "from-[#ef4444]/20 via-[#f87171]/10 to-transparent",
    iconColor: "text-[#ef4444]",
    popular: false,
  },
];

const faqs = [
  {
    q: "Why can't I just use a generic commercial insurance policy?",
    a: "Generic commercial policies are written for standard businesses. Concrete lifting—spray foam or mud jacking—has unique risks like pollution liability (for foam materials), specialized equipment breakdown, and completed operations exposures that standard policies often exclude or limit. We endorse our policies specifically for concrete lifting operations.",
  },
  {
    q: "How much does concrete lifting insurance cost?",
    a: "Costs vary based on your annual revenue, claims history, coverage limits, and the methods you use. Spray foam lifting insurance typically starts around $3,200/year for a small contractor. We offer payment plans and discounts for bundling multiple coverage types.",
  },
  {
    q: "Do I need pollution liability for spray foam lifting?",
    a: "Yes—if you use polyurethane foam, most clients and general contractors will require pollution liability coverage. Standard general liability policies typically exclude pollution claims. Our spray foam lifting policy includes ISO GL 99 17 pollution liability endorsements.",
  },
  {
    q: "How fast can I get a quote?",
    a: "Most quotes are available within 15 minutes for straightforward applications. Complex risks or high-limit coverage requests may take 24-48 hours. We can bind coverage same-day in many cases.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(30,64,175,0.1)] border border-[rgba(30,64,175,0.3)] mb-6">
              <span className="text-xs font-bold text-[#1e40af] uppercase tracking-wider">Our Coverage</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Insurance Built for{" "}
              <span className="gradient-text">Concrete Lifters</span>
            </h1>
            <p className="text-xl text-[#94a3b8] leading-relaxed">
              Whether you use spray foam injection or mud jacking, we have specialized coverage that
              actually fits your work. No gaps. No guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-3xl overflow-hidden"
                  style={{
                    background: "rgba(15,25,41,0.7)",
                    border: "1px solid rgba(30,64,175,0.15)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Left: Header */}
                    <div
                      className="p-8 md:p-10"
                      style={{
                        background: `linear-gradient(135deg, ${service.gradient.includes("from-[#1e40af]") ? "rgba(30,64,175,0.1)" : service.gradient.includes("from-[#3b82f6]") ? "rgba(59,130,246,0.1)" : service.gradient.includes("from-[#10b981]") ? "rgba(16,185,129,0.1)" : service.gradient.includes("from-[#8b5cf6]") ? "rgba(139,92,246,0.1)" : service.gradient.includes("from-[#f59e0b]") ? "rgba(245,158,11,0.1)" : "rgba(239,68,68,0.1)"} 0%, transparent 100%)`,
                        borderRight: "1px solid rgba(30,64,175,0.1)",
                      }}
                    >
                      {service.popular && (
                        <div className="inline-block px-3 py-1 bg-[#1e40af] text-white text-xs font-bold rounded-full mb-4 shadow-lg shadow-[#1e40af]/30">
                          MOST POPULAR
                        </div>
                      )}
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                        style={{
                          background: `linear-gradient(135deg, ${service.gradient.includes("from-[#1e40af]") ? "rgba(30,64,175,0.2)" : service.gradient.includes("from-[#3b82f6]") ? "rgba(59,130,246,0.2)" : service.gradient.includes("from-[#10b981]") ? "rgba(16,185,129,0.2)" : "rgba(139,92,246,0.2)"} 0%, transparent 100%)`,
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <Icon className={`w-8 h-8 ${service.iconColor}`} />
                      </div>
                      <h2 className="text-2xl font-black text-white mb-2">{service.title}</h2>
                      <p className={`font-semibold text-sm mb-4 ${service.iconColor}`}>{service.shortDesc}</p>
                      <p className="text-2xl font-black text-[#1e40af] mb-1">{service.price}</p>
                      <p className="text-xs text-[#64748b]">Typical cost for small contractors</p>
                    </div>

                    {/* Middle: Description & Features */}
                    <div className="lg:col-span-2 p-8 md:p-10">
                      <p className="text-[#94a3b8] leading-relaxed mb-6">{service.description}</p>

                      <div className="mb-6">
                        <p className="text-sm font-bold text-white uppercase tracking-wider mb-2">Who This Is For</p>
                        <p className="text-sm text-[#94a3b8]">{service.whoFor}</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                            <span className="text-sm text-[#e2e8f0]">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-bold text-sm rounded-xl shadow-lg shadow-[#1e40af]/30 hover:shadow-[#1e40af]/50 transition-all"
                      >
                        Get Quote for This Coverage
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 border-t border-[rgba(30,64,175,0.08)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(15,25,41,0.6)",
                  border: "1px solid rgba(30,64,175,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to Get a{" "}
            <span className="gradient-text">Custom Quote?</span>
          </h2>
          <p className="text-lg text-[#94a3b8] mb-10">
            Our insurance specialists understand concrete lifting. Get coverage that actually fits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18449675247"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-black text-lg rounded-2xl shadow-2xl shadow-[#1e40af]/40 hover:shadow-[#1e40af]/60 hover:scale-[1.02] transition-all"
            >
              <Phone className="w-6 h-6" />
              Call 844-967-5247
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(30,64,175,0.4)] text-white font-black text-lg rounded-2xl hover:bg-[rgba(30,64,175,0.1)] transition-all"
            >
              Get Free Quote Online
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
