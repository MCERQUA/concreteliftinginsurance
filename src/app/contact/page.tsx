"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Phone, Mail, Clock, MapPin, Shield, CheckCircle, ArrowRight, Send } from "lucide-react";

const insuranceTypes = [
  "Spray Foam Lifting",
  "Mud Jacking",
  "Both Spray Foam and Mud Jacking",
  "General Liability Only",
  "Not Sure - Need Guidance",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.insuranceType) newErrors.insuranceType = "Please select an insurance type";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,140,0,0.1)] border border-[rgba(255,140,0,0.3)] mb-6">
              <span className="text-xs font-bold text-[#ff8c00] uppercase tracking-wider">Get Started</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Get Your{" "}
              <span className="gradient-text">Free Quote</span>
            </h1>
            <p className="text-xl text-[#94a3b8] leading-relaxed">
              Ready to get coverage that actually fits your concrete lifting business? Fill out the
              form or call us directly. No obligation, no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div
              className="lg:col-span-3 rounded-3xl p-8 md:p-10"
              style={{
                background: "rgba(15,25,41,0.7)",
                border: "1px solid rgba(255,140,0,0.15)",
                backdropFilter: "blur(20px)",
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[rgba(16,185,129,0.2)] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#10b981]" />
                  </div>
                  <h2 className="text-2xl font-black text-white mb-4">Quote Request Received!</h2>
                  <p className="text-[#94a3b8] mb-6">
                    Thanks, {formData.name}. One of our insurance specialists will review your
                    information and reach out within 1 business day.
                  </p>
                  <p className="text-[#64748b] text-sm">
                    Need immediate help? Call us at{" "}
                    <a href="tel:+18005433843" className="text-[#ff8c00] font-semibold">
                      1-800-543-3843
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Full Name <span className="text-[#ff8c00]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border ${
                          errors.name ? "border-[#ef4444]" : "border-[rgba(255,140,0,0.2)]"
                        } text-white placeholder-[#64748b] focus:border-[#ff8c00] focus:outline-none transition-colors`}
                      />
                      {errors.name && <p className="text-[#ef4444] text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Smith Concrete Solutions"
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,140,0,0.2)] text-white placeholder-[#64748b] focus:border-[#ff8c00] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Email <span className="text-[#ff8c00]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@smithconcrete.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border ${
                          errors.email ? "border-[#ef4444]" : "border-[rgba(255,140,0,0.2)]"
                        } text-white placeholder-[#64748b] focus:border-[#ff8c00] focus:outline-none transition-colors`}
                      />
                      {errors.email && <p className="text-[#ef4444] text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Phone <span className="text-[#ff8c00]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className={`w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border ${
                          errors.phone ? "border-[#ef4444]" : "border-[rgba(255,140,0,0.2)]"
                        } text-white placeholder-[#64748b] focus:border-[#ff8c00] focus:outline-none transition-colors`}
                      />
                      {errors.phone && <p className="text-[#ef4444] text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Insurance Type <span className="text-[#ff8c00]">*</span>
                    </label>
                    <select
                      name="insuranceType"
                      value={formData.insuranceType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border ${
                        errors.insuranceType ? "border-[#ef4444]" : "border-[rgba(255,140,0,0.2)]"
                      } text-white focus:border-[#ff8c00] focus:outline-none transition-colors`}
                    >
                      <option value="" className="bg-[#0f1929]">Select insurance type...</option>
                      {insuranceTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#0f1929]">
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.insuranceType && <p className="text-[#ef4444] text-xs mt-1">{errors.insuranceType}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your business—annual revenue, years in business, current coverage, any specific questions..."
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,140,0,0.2)] text-white placeholder-[#64748b] focus:border-[#ff8c00] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff8c00] to-[#ffb347] text-white font-bold text-lg rounded-xl shadow-2xl shadow-[#ff8c00]/40 hover:shadow-[#ff8c00]/60 hover:scale-[1.01] transition-all"
                  >
                    <Send className="w-5 h-5" />
                    Request Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-[#64748b] text-center">
                    By submitting, you agree to be contacted by our team. We never sell your information.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(15,25,41,0.6)",
                  border: "1px solid rgba(255,140,0,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(255,140,0,0.1)] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#ff8c00]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">Call Us</p>
                    <a href="tel:+18005433843" className="text-xl font-black text-[#ff8c00] hover:underline">
                      1-800-543-3843
                    </a>
                    <p className="text-xs text-[#64748b] mt-1">Toll-free, no obligation</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(15,25,41,0.6)",
                  border: "1px solid rgba(255,140,0,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(255,140,0,0.1)] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#ff8c00]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">Email Us</p>
                    <a href="mailto:quotes@concreteliftinginsurance.com" className="text-[#94a3b8] hover:text-[#ff8c00] transition-colors text-sm">
                      quotes@concreteliftinginsurance.com
                    </a>
                    <p className="text-xs text-[#64748b] mt-1">Responded within 1 business day</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(15,25,41,0.6)",
                  border: "1px solid rgba(255,140,0,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(255,140,0,0.1)] flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#ff8c00]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">Business Hours</p>
                    <p className="text-[#94a3b8] text-sm">Mon-Fri: 8am - 6pm EST</p>
                    <p className="text-[#94a3b8] text-sm">Sat: 9am - 2pm EST</p>
                    <p className="text-[#64748b] text-xs mt-2">24/7 claims hotline available</p>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(15,25,41,0.6)",
                  border: "1px solid rgba(255,140,0,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(255,140,0,0.1)] flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-[#ff8c00]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-2">Trust Signals</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#10b981]" />
                        <span className="text-xs text-[#94a3b8]">Licensed in all 50 states</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#10b981]" />
                        <span className="text-xs text-[#94a3b8]">BBB Accredited: A+ Rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#10b981]" />
                        <span className="text-xs text-[#94a3b8]">NPN #12345678</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#10b981]" />
                        <span className="text-xs text-[#94a3b8]">No obligation quote</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
