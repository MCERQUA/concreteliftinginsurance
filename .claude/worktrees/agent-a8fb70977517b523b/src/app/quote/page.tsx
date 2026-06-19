"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { CheckCircle, Shield, ArrowRight, Phone } from "lucide-react";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

const SERVICE_TYPES = [
  "Spray Foam Lifting / Polyjacking",
  "Mud Jacking / Slab Jacking",
  "Both Spray Foam and Mud Jacking",
  "Concrete Leveling (Other Method)",
  "Other / Not Sure",
];

const YEARS_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];

const WEBHOOK_URL =
  "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=concreteliftinginsurance.com";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    state: "",
    serviceType: "",
    yearsInBusiness: "",
    message: "",
    "bot-field": "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData["bot-field"]) return; // honeypot triggered
    setSubmitting(true);
    setError("");

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_name: "quote",
          source: "concreteliftinginsurance.com",
          ...formData,
        }),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us at 844-967-5247 or try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-white/80 text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#1e40af] focus:ring-2 focus:ring-[#1e40af]/20 transition-all text-sm";
  const labelClass = "block text-sm font-semibold text-[#0f172a] mb-1.5";

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <section className="relative pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(30,64,175,0.1)] border border-[rgba(30,64,175,0.3)] mb-6">
              <Shield className="w-4 h-4 text-[#1e40af]" />
              <span className="text-xs font-bold text-[#1e40af] uppercase tracking-wider">Free Quote</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-4">
              Get Your{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" }}
              >
                Free Coverage Quote
              </span>
            </h1>
            <p className="text-lg text-[#475569] max-w-xl mx-auto">
              Tell us about your concrete lifting operation and we'll get back to you within one business day
              with a personalized quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Trust sidebar */}
            <div className="space-y-4">
              {[
                { title: "Specialized Coverage", desc: "Policies built for spray foam and mud jacking—not generic contractor policies." },
                { title: "Fast Turnaround", desc: "Most quotes delivered within 1 business day." },
                { title: "No Obligation", desc: "Get a quote and compare. No pressure, no commitment." },
                { title: "All 50 States", desc: "We write concrete lifting insurance nationwide." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 p-4 rounded-2xl"
                  style={{
                    background: "rgba(248,250,252,0.9)",
                    border: "1px solid rgba(30,64,175,0.12)",
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-[#1e40af] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#0f172a] text-sm">{item.title}</p>
                    <p className="text-[#475569] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div
                className="p-5 rounded-2xl text-center"
                style={{ background: "rgba(30,64,175,0.06)", border: "1px solid rgba(30,64,175,0.15)" }}
              >
                <p className="text-xs font-bold text-[#1e40af] uppercase tracking-wider mb-2">Prefer to call?</p>
                <a
                  href="tel:+18449675247"
                  className="flex items-center justify-center gap-2 text-[#0f172a] font-black text-lg hover:text-[#1e40af] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  844-967-5247
                </a>
                <p className="text-xs text-[#64748b] mt-1">Mon–Fri 8am–5pm AZ (MST)</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  className="p-10 rounded-3xl text-center"
                  style={{
                    background: "rgba(248,250,252,0.95)",
                    border: "1px solid rgba(30,64,175,0.15)",
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#1e40af]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#1e40af]" />
                  </div>
                  <h2 className="text-2xl font-black text-[#0f172a] mb-3">Quote Request Received</h2>
                  <p className="text-[#475569] mb-2">
                    Thank you! We'll review your information and reach out within one business day with a
                    personalized quote.
                  </p>
                  <p className="text-sm text-[#64748b]">
                    Questions in the meantime? Call{" "}
                    <a href="tel:+18449675247" className="text-[#1e40af] font-semibold">
                      844-967-5247
                    </a>
                  </p>
                </div>
              ) : (
                <form
                  name="quote"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="rounded-3xl p-8 md:p-10 space-y-6"
                  style={{
                    background: "rgba(248,250,252,0.95)",
                    border: "1px solid rgba(30,64,175,0.15)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <input type="hidden" name="form-name" value="quote" />
                  <input
                    name="bot-field"
                    type="hidden"
                    value={formData["bot-field"]}
                    onChange={handleChange}
                    className="hidden"
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="businessName" className={labelClass}>Business Name *</label>
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Smith Concrete Lifting LLC"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@smithconcrete.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(480) 555-0100"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="state" className={labelClass}>Primary State *</label>
                      <select
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a state…</option>
                        {US_STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="serviceType" className={labelClass}>Service Type *</label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select service type…</option>
                        {SERVICE_TYPES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="yearsInBusiness" className={labelClass}>Years in Business</label>
                    <select
                      id="yearsInBusiness"
                      name="yearsInBusiness"
                      value={formData.yearsInBusiness}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select…</option>
                      {YEARS_OPTIONS.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Tell us about your operation{" "}
                      <span className="text-[#94a3b8] font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Number of employees, annual revenue, types of jobs, current insurer, or anything else that would help us quote accurately…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm font-medium">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-bold rounded-xl shadow-lg shadow-[#1e40af]/30 hover:shadow-[#1e40af]/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "Request My Free Quote"}
                    {!submitting && <ArrowRight className="w-5 h-5" />}
                  </button>

                  <p className="text-xs text-center text-[#94a3b8]">
                    No spam. No commitment. We'll contact you to discuss your specific needs.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
