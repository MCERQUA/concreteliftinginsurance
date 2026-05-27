import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import {
  Shield,
  Phone,
  Clock,
  Award,
  Users,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Building2,
  Truck,
  Wrench,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Concrete Lifting Insurance | Spray Foam & Mud Jacking Coverage",
  description:
    "Specialized insurance for concrete lifting contractors. Coverage for spray foam lifting, mud jacking, general liability, workers comp, and equipment. Get a free quote in minutes.",
};

const services = [
  {
    id: "spray-foam",
    icon: Wrench,
    title: "Spray Foam Lifting",
    shortDesc: "Polyurethane foam injection coverage",
    description:
      "Comprehensive coverage for contractors using spray foam to lift and level concrete slabs. Includes pollution liability and equipment protection.",
    features: [
      "Pollution liability coverage",
      "Equipment breakdown",
      "Completed operations",
      "Tools and equipment",
    ],
    gradient: "from-[#1e40af]/20 via-[#3b82f6]/10 to-transparent",
    iconColor: "text-[#1e40af]",
    popular: true,
  },
  {
    id: "mud-jacking",
    icon: Building2,
    title: "Mud Jacking",
    shortDesc: "Slab jacking and concrete leveling",
    description:
      "Specialized insurance for traditional mud jacking contractors. Coverage for slurry materials, equipment, and third-party property damage.",
    features: [
      "General liability",
      "Equipment coverage",
      "Property damage",
      "Legal defense costs",
    ],
    gradient: "from-[#3b82f6]/20 via-[#60a5fa]/10 to-transparent",
    iconColor: "text-[#3b82f6]",
    popular: false,
  },
  {
    id: "general-liability",
    icon: Shield,
    title: "General Liability",
    shortDesc: "Core business protection",
    description:
      "Essential protection against property damage and bodily injury claims. Covers legal fees, medical costs, and settlements up to your policy limits.",
    features: [
      "$1M-$5M coverage options",
      "Property damage",
      "Bodily injury",
      "Legal defense",
    ],
    gradient: "from-[#10b981]/20 via-[#34d399]/10 to-transparent",
    iconColor: "text-[#10b981]",
    popular: false,
  },
  {
    id: "workers-comp",
    icon: Users,
    title: "Workers Compensation",
    shortDesc: "Employee injury and illness coverage",
    description:
      "Protect your crew with coverage for workplace injuries, repetitive stress claims, and OSHA compliance-related costs.",
    features: [
      "All states coverage",
      "Medical benefits",
      "Disability benefits",
      "Rehabilitation costs",
    ],
    gradient: "from-[#8b5cf6]/20 via-[#a78bfa]/10 to-transparent",
    iconColor: "text-[#8b5cf6]",
    popular: false,
  },
];

const trustStats = [
  { value: "15+", label: "Years in Business" },
  { value: "2,400+", label: "Contractors Insured" },
  { value: "$48M+", label: "Claims Paid Out" },
  { value: "24/7", label: "Claims Support" },
];

const testimonials = [
  {
    quote:
      "After 12 years in spray foam lifting, I finally found insurance that actually understands our work. They covered a tricky pollution liability claim that other carriers wouldn't touch.",
    author: "Marcus T.",
    company: "Level Right Concrete Solutions",
    location: "Phoenix, AZ",
    rating: 5,
  },
  {
    quote:
      "Switched from a generic commercial policy to Concrete Lifting Insurance. My premium dropped 18% and my coverage actually makes sense for mud jacking work.",
    author: "Sandra K.",
    company: "Kozlowski Concrete Leveling",
    location: "Milwaukee, WI",
    rating: 5,
  },
  {
    quote:
      "Filed a claim when my injection pump failed mid-job. Adjuster was on the phone within 2 hours and check arrived in 5 days. That's service.",
    author: "James R.",
    company: "Precision Lift Systems",
    location: "Dallas, TX",
    rating: 5,
  },
];

const whyChooseUs = [
  {
    icon: CheckCircle,
    title: "Specialized Coverage",
    description: "We only insure concrete lifting contractors. No generic policies that leave gaps.",
  },
  {
    icon: Clock,
    title: "Fast Quotes",
    description: "Get bindable quotes in under 15 minutes. Most competitors take 3-5 business days.",
  },
  {
    icon: Award,
    title: "Claims Experts",
    description: "Your adjuster understands spray foam vs mud jacking. No learning curve on your claim.",
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(30,64,175,0.1)] border border-[rgba(30,64,175,0.3)] backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#1e40af] animate-pulse" />
                <span className="text-xs font-bold text-[#1e40af] uppercase tracking-wider">
                  Trusted by 2,400+ Contractors
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]">
                <span className="gradient-text">Insurance Built</span>
                <br />
                <span className="text-[#0f172a]">for Concrete</span>
                <br />
                <span className="text-[#0f172a]">Lifting Pros</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-[#475569] leading-relaxed max-w-xl">
                Whether you use{" "}
                <span className="text-[#1e40af] font-semibold">spray foam injection</span> or{" "}
                <span className="text-[#3b82f6] font-semibold">mud jacking</span>, we have
                specialized coverage that actually makes sense for your work.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-bold text-lg rounded-2xl shadow-2xl shadow-[#1e40af]/30 hover:shadow-[#1e40af]/50 hover:scale-[1.02] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[rgba(30,64,175,0.05)] border border-[rgba(30,64,175,0.3)] text-[#1e40af] font-bold text-lg rounded-2xl hover:bg-[rgba(30,64,175,0.1)] transition-all"
                >
                  View Coverage Options
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-[#64748b]">
                  <CheckCircle className="w-4 h-4 text-[#10b981]" />
                  <span>Free quote</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#64748b]">
                  <CheckCircle className="w-4 h-4 text-[#10b981]" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#64748b]">
                  <CheckCircle className="w-4 h-4 text-[#10b981]" />
                  <span>15-min decision</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative hidden lg:block">
              {/* Floating cards */}
              <div className="relative w-full h-[500px]">
                {/* Background card */}
                <div
                  className="absolute top-12 right-0 w-[420px] h-[280px] rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 100%)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(59,130,246,0.2)] flex items-center justify-center">
                        <Truck className="w-6 h-6 text-[#3b82f6]" />
                      </div>
                      <div>
                        <p className="text-[#0f172a] font-bold">Commercial Auto</p>
                        <p className="text-[#64748b] text-sm">Fleet & contractor vehicles</p>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-3xl font-black text-[#0f172a]">$2.5M</p>
                        <p className="text-[#64748b] text-sm">Coverage limit</p>
                      </div>
                      <Check className="w-8 h-8 text-[#3b82f6]" />
                    </div>
                  </div>
                </div>

                {/* Middle card */}
                <div
                  className="absolute top-6 right-12 w-[420px] h-[280px] rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(30,64,175,0.15) 0%, rgba(30,64,175,0.05) 100%)",
                    border: "1px solid rgba(30,64,175,0.25)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(30,64,175,0.2)] flex items-center justify-center">
                        <Wrench className="w-6 h-6 text-[#1e40af]" />
                      </div>
                      <div>
                        <p className="text-[#0f172a] font-bold">Spray Foam Lifting</p>
                        <p className="text-[#64748b] text-sm">Polyurethane injection</p>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-3xl font-black text-[#0f172a]">$1M+</p>
                        <p className="text-[#64748b] text-sm">Starting coverage</p>
                      </div>
                      <div className="px-3 py-1 bg-[#10b981]/20 text-[#10b981] text-xs font-bold rounded-full">
                        MOST POPULAR
                      </div>
                    </div>
                  </div>
                </div>

                {/* Front card */}
                <div
                  className="absolute top-0 right-4 w-[420px] h-[320px] rounded-3xl p-8"
                  style={{
                    background: "rgba(248,250,252,0.98)",
                    border: "1px solid rgba(30,64,175,0.35)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.4), 0 0 60px rgba(30,64,175,0.1)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1e40af] to-[#3b82f6] flex items-center justify-center shadow-lg shadow-[#1e40af]/30">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-[#0f172a] font-black text-lg">Your Business Protected</p>
                      <p className="text-[#64748b] text-sm">Active policy</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#10b981]" />
                      <span className="text-[#475569] text-sm">General Liability Coverage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#10b981]" />
                      <span className="text-[#475569] text-sm">Workers Compensation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#10b981]" />
                      <span className="text-[#475569] text-sm">Equipment Breakdown</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#10b981]" />
                      <span className="text-[#475569] text-sm">24/7 Claims Support</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[rgba(30,64,175,0.15)]">
                    <p className="text-xs text-[#64748b] mb-1">Quote valid for 30 days</p>
                    <p className="text-sm text-[#1e40af] font-bold">Terms and conditions apply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Trust Stats Bar */}
      <section className="relative py-12 border-y border-[rgba(30,64,175,0.1)]" style={{ background: "rgba(248,250,252,0.7)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-[#1e40af] mb-1">{stat.value}</p>
                <p className="text-sm text-[#64748b]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(30,64,175,0.1)] border border-[rgba(30,64,175,0.3)] mb-6">
              <span className="text-xs font-bold text-[#1e40af] uppercase tracking-wider">Our Coverage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-4">
              Protection for Every Aspect of{" "}
              <span className="gradient-text">Your Business</span>
            </h2>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              From spray foam injection to mud jacking, we understand the unique risks concrete lifting
              contractors face. Get coverage that actually fits your work.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="group relative rounded-3xl overflow-hidden p-8 md:p-10 transition-all duration-500 hover:scale-[1.02] hover:z-10"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradient.includes("from-[#1e40af]") ? "rgba(30,64,175,0.08)" : service.gradient.includes("from-[#3b82f6]") ? "rgba(59,130,246,0.08)" : service.gradient.includes("from-[#10b981]") ? "rgba(16,185,129,0.08)" : "rgba(139,92,246,0.08)"} 0%, transparent 100%)`,
                    border: "1px solid rgba(30,64,175,0.15)",
                  }}
                >
                  {/* Popular badge */}
                  {service.popular && (
                    <div className="absolute top-6 right-6 px-3 py-1 bg-[#1e40af] text-white text-xs font-bold rounded-full shadow-lg shadow-[#1e40af]/30">
                      MOST POPULAR
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    style={{
                      background: `linear-gradient(135deg, ${service.gradient.includes("from-[#1e40af]") ? "rgba(30,64,175,0.2)" : service.gradient.includes("from-[#3b82f6]") ? "rgba(59,130,246,0.2)" : service.gradient.includes("from-[#10b981]") ? "rgba(16,185,129,0.2)" : "rgba(139,92,246,0.2)"} 0%, transparent 100%)`,
                      border: "1px solid rgba(30,64,175,0.2)",
                    }}
                  >
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-black text-[#0f172a] mb-2">{service.title}</h3>
                  <p className="text-[#1e40af] font-semibold text-sm mb-4">{service.shortDesc}</p>
                  <p className="text-[#475569] text-sm leading-relaxed mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#10b981]" />
                        <span className="text-sm text-[#475569]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-[#1e40af]" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 border-t border-[rgba(30,64,175,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-4">
              Why Contractors{" "}
              <span className="gradient-text">Choose Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="text-center p-8 rounded-3xl"
                  style={{
                    background: "rgba(248,250,252,0.95)",
                    border: "1px solid rgba(30,64,175,0.12)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(30,64,175,0.1)] border border-[rgba(30,64,175,0.2)] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#1e40af]" />
                  </div>
                  <h3 className="text-xl font-black text-[#0f172a] mb-3">{item.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(30,64,175,0.1)] border border-[rgba(30,64,175,0.3)] mb-6">
              <Star className="w-4 h-4 text-[#3b82f6]" />
              <span className="text-xs font-bold text-[#1e40af] uppercase tracking-wider">
                What Contractors Say
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">
              Trusted by Pros{" "}
              <span className="gradient-text">Nationwide</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl"
                style={{
                  background: "rgba(248,250,252,0.95)",
                  border: "1px solid rgba(30,64,175,0.15)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#3b82f6] fill-[#3b82f6]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#334155] leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-[rgba(30,64,175,0.1)]">
                  <p className="text-[#0f172a] font-bold">{testimonial.author}</p>
                  <p className="text-[#64748b] text-sm">
                    {testimonial.company} &middot; {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div
            className="rounded-3xl p-12 md:p-16"
            style={{
              background: "linear-gradient(135deg, rgba(30,64,175,0.1) 0%, rgba(30,64,175,0.05) 50%, rgba(59,130,246,0.05) 100%)",
              border: "1px solid rgba(30,64,175,0.25)",
              backdropFilter: "blur(20px)",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6">
              Ready to Get{" "}
              <span className="gradient-text">Protected?</span>
            </h2>
            <p className="text-lg text-[#475569] mb-10 max-w-2xl mx-auto">
              Get your free, no-obligation quote in under 15 minutes. We&apos;ll have you covered before
              your next job starts.
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
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[rgba(30,64,175,0.05)] border-2 border-[rgba(30,64,175,0.4)] text-[#1e40af] font-black text-lg rounded-2xl hover:bg-[rgba(30,64,175,0.1)] transition-all"
              >
                Get Free Quote Online
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <p className="mt-8 text-sm text-[#64748b]">
              Or email{" "}
              <a href="mailto:josh@contractorschoiceagency.com" className="text-[#1e40af] hover:underline">
                josh@contractorschoiceagency.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
