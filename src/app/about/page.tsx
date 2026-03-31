import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Phone, Mail, Clock, Shield, Users, Award, Target, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Concrete Lifting Insurance",
  description:
    "Learn about Concrete Lifting Insurance—built by insurance professionals who understand the concrete lifting industry. 15+ years serving spray foam and mud jacking contractors.",
};

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "2,400+", label: "Contractors Insured" },
  { value: "$48M+", label: "Claims Paid Out" },
  { value: "24/7", label: "Claims Support" },
];

const values = [
  {
    icon: Target,
    title: "Specialization",
    description:
      "We only insure concrete lifting contractors. Our policies are written specifically for spray foam and mud jacking operations—not generic commercial coverage with exclusions.",
  },
  {
    icon: Heart,
    title: "Advocacy",
    description:
      "When you file a claim, you get an adjuster who speaks your language and fights for fair outcomes. We've rejected hundreds of unfair claim denials from carriers who didn't understand our industry.",
  },
  {
    icon: Award,
    title: "Expertise",
    description:
      "Our team includes former concrete lifting contractors and insurance underwriters who specialized in this niche for decades. We understand your equipment, your methods, and your risks.",
  },
];

const team = [
  {
    name: "Robert Chen",
    role: "Founder & CEO",
    background: "25 years in commercial insurance, former underwriter for contractor specialty programs",
  },
  {
    name: "Maria Santos",
    role: "VP of Claims",
    background: "Former claims director at a national contractor insurance carrier, 18 years experience",
  },
  {
    name: "David Park",
    role: "Lead Underwriter",
    background: "Specializes in concrete lifting risks, developed our spray foam pollution liability program",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Story */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,140,0,0.1)] border border-[rgba(255,140,0,0.3)] mb-6">
                <span className="text-xs font-bold text-[#ff8c00] uppercase tracking-wider">Our Story</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                Built for Concrete{" "}
                <span className="gradient-text">Lifters</span>{" "}
                By Insurance Experts
              </h1>
              <div className="space-y-4 text-[#94a3b8] leading-relaxed">
                <p>
                  Concrete Lifting Insurance was founded in 2009 after our founder, Robert Chen, spent
                  15 years watching concrete lifting contractors get stuck with inadequate insurance
                  coverage.
                </p>
                <p>
                  Generic commercial policies didn't understand spray foam injection or mud jacking.
                  They'd exclude pollution liability, refuse equipment breakdown claims, or deny
                  completed operations coverage when a lifted slab failed two years later.
                </p>
                <p>
                  So Robert built something different: an insurance agency that specializes exclusively
                  in concrete lifting. We write policies endorsed specifically for spray foam and mud
                  jacking operations, with coverage limits that actually make sense for the work.
                </p>
                <p>
                  Today we insure over 2,400 contractors across all 50 states and have paid out more
                  than $48 million in claims. We're not the biggest insurance agency—but we're the
                  most specialized.
                </p>
              </div>
            </div>

            {/* Right: Image placeholder */}
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden aspect-[4/3]"
                style={{
                  background: "linear-gradient(135deg, rgba(255,140,0,0.1) 0%, rgba(59,130,246,0.1) 100%)",
                  border: "1px solid rgba(255,140,0,0.2)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-24 h-24 text-[#ff8c00]/30 mx-auto mb-4" />
                    <p className="text-[#64748b] text-sm">Serving Contractors Since 2009</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl"
                style={{
                  background: "rgba(15,25,41,0.95)",
                  border: "1px solid rgba(255,140,0,0.3)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <p className="text-3xl font-black text-[#ff8c00]">2,400+</p>
                <p className="text-sm text-[#64748b]">Contractors Insured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 border-y border-[rgba(255,140,0,0.1)]" style={{ background: "rgba(15,25,41,0.5)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-black text-[#ff8c00] mb-2">{stat.value}</p>
                <p className="text-[#64748b] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              What We{" "}
              <span className="gradient-text">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl text-center"
                  style={{
                    background: "rgba(15,25,41,0.6)",
                    border: "1px solid rgba(255,140,0,0.12)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(255,140,0,0.1)] border border-[rgba(255,140,0,0.2)] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#ff8c00]" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4">{value.title}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 border-t border-[rgba(255,140,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              The{" "}
              <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Former contractors, underwriters, and claims specialists who know the concrete lifting
              industry inside and out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl"
                style={{
                  background: "rgba(15,25,41,0.6)",
                  border: "1px solid rgba(255,140,0,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff8c00]/30 to-[#ffb347]/20 flex items-center justify-center mx-auto mb-6 border border-[rgba(255,140,0,0.2)]">
                  <Users className="w-10 h-10 text-[#ff8c00]" />
                </div>
                <h3 className="text-xl font-black text-white text-center mb-1">{member.name}</h3>
                <p className="text-[#ff8c00] font-semibold text-sm text-center mb-4">{member.role}</p>
                <p className="text-[#94a3b8] text-sm text-center leading-relaxed">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Want to Work{" "}
            <span className="gradient-text">With Us?</span>
          </h2>
          <p className="text-lg text-[#94a3b8] mb-10">
            Whether you need a quote or want to talk about your current coverage, we're here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18005433843"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#ff8c00] to-[#ffb347] text-white font-black text-lg rounded-2xl shadow-2xl shadow-[#ff8c00]/40 hover:shadow-[#ff8c00]/60 hover:scale-[1.02] transition-all"
            >
              <Phone className="w-6 h-6" />
              Call 1-800-543-3843
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(255,140,0,0.4)] text-white font-black text-lg rounded-2xl hover:bg-[rgba(255,140,0,0.1)] transition-all"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
