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

const COVERAGE_OPTIONS = [
  "General Liability",
  "Commercial Auto",
  "Workers Compensation",
  "Umbrella / Excess",
  "Pollution Liability",
  "Professional Liability",
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
    street: "",
    city: "",
    state: "",
    zip: "",
    coverage: [] as string[],
    serviceType: "",
    yearsInBusiness: "",
    annualGrossSales: "",
    message: "",
    "bot-field": "",
    estimated_employee_count: "", estimated_employee_payroll: "", estimated_material_costs: "", estimated_subcontractor_expenses: "", percent_subcontractors_insured: "", prior_policy_expiration: "", prior_policy_number: "", prior_year_employee_count: "", prior_year_employee_payroll: "", prior_year_subcontractor_expenses: "", subcontractors_have_insurance: "",
    prior_year_gross_sales: "", estimated_gross_sales: "", coverage_for_uninsured_subcontractors: "", business_description: "", class_code_1: "", class_code_2: "", class_code_3: "", class_code_4: "", class_code_5: "", residential_vs_commercial: "", new_vs_existing_construction: "", largest_projects: "", prior_carrier_name: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCoverageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      coverage: checked
        ? [...prev.coverage, value]
        : prev.coverage.filter((c) => c !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData["bot-field"]) return; // honeypot triggered
    if (formData.coverage.length === 0) {
      setError("Please select at least one coverage.");
      return;
    }
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
          coverage: formData.coverage.join(", "),
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
    "w-full px-4 py-3 rounded-xl border border-[rgba(154, 52, 18,0.2)] bg-white/80 text-[#1c1917] placeholder-[#78716c] focus:outline-none focus:border-[#9a3412] focus:ring-2 focus:ring-[#9a3412]/20 transition-all text-sm";
  const labelClass = "block text-sm font-semibold text-[#1c1917] mb-1.5";

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <section className="relative pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(154, 52, 18,0.1)] border border-[rgba(154, 52, 18,0.3)] mb-6">
              <Shield className="w-4 h-4 text-[#9a3412]" />
              <span className="text-xs font-bold text-[#9a3412] uppercase tracking-wider">Free Quote</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1c1917] mb-4">
              Get Your{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #9a3412 0%, #c2410c 100%)" }}
              >
                Free Coverage Quote
              </span>
            </h1>
            <p className="text-lg text-[#57534e] max-w-xl mx-auto">
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
                    background: "rgba(250, 250, 249,0.9)",
                    border: "1px solid rgba(154, 52, 18,0.12)",
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-[#9a3412] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1c1917] text-sm">{item.title}</p>
                    <p className="text-[#57534e] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div
                className="p-5 rounded-2xl text-center"
                style={{ background: "rgba(154, 52, 18,0.06)", border: "1px solid rgba(154, 52, 18,0.15)" }}
              >
                <p className="text-xs font-bold text-[#9a3412] uppercase tracking-wider mb-2">Prefer to call?</p>
                <a
                  href="tel:+18449675247"
                  className="flex items-center justify-center gap-2 text-[#1c1917] font-black text-lg hover:text-[#9a3412] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  844-967-5247
                </a>
                <p className="text-xs text-[#78716c] mt-1">Mon–Fri 8am–5pm AZ (MST)</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  className="p-10 rounded-3xl text-center"
                  style={{
                    background: "rgba(250, 250, 249,0.95)",
                    border: "1px solid rgba(154, 52, 18,0.15)",
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#9a3412]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#9a3412]" />
                  </div>
                  <h2 className="text-2xl font-black text-[#1c1917] mb-3">Quote Request Received</h2>
                  <p className="text-[#57534e] mb-2">
                    Thank you! We'll review your information and reach out within one business day with a
                    personalized quote.
                  </p>
                  <p className="text-sm text-[#78716c]">
                    Questions in the meantime? Call{" "}
                    <a href="tel:+18449675247" className="text-[#9a3412] font-semibold">
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
                    background: "rgba(250, 250, 249,0.95)",
                    border: "1px solid rgba(154, 52, 18,0.15)",
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

                  <fieldset className="space-y-4">
                    <legend className={`${labelClass} mb-0`}>Business Address *</legend>
                    <div>
                      <label htmlFor="street" className="sr-only">Street Address</label>
                      <input
                        id="street"
                        name="street"
                        type="text"
                        required
                        value={formData.street}
                        onChange={handleChange}
                        placeholder="Street address"
                        className={inputClass}
                      />
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="sr-only">City</label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="City"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="sr-only">State</label>
                        <select
                          id="state"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">State…</option>
                          {US_STATES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="zip" className="sr-only">ZIP Code</label>
                        <input
                          id="zip"
                          name="zip"
                          type="text"
                          required
                          inputMode="numeric"
                          pattern="[0-9]{5}(-[0-9]{4})?"
                          value={formData.zip}
                          onChange={handleChange}
                          placeholder="ZIP"
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className={labelClass}>Coverage Needed *</legend>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {COVERAGE_OPTIONS.map((c) => (
                        <label
                          key={c}
                          htmlFor={`coverage-${c}`}
                          className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-[rgba(154,52,18,0.2)] bg-white/80 cursor-pointer hover:border-[#9a3412] transition-colors"
                        >
                          <input
                            id={`coverage-${c}`}
                            type="checkbox"
                            name="coverage"
                            value={c}
                            checked={formData.coverage.includes(c)}
                            onChange={handleCoverageChange}
                            className="w-4 h-4 accent-[#9a3412] flex-shrink-0"
                          />
                          <span className="text-sm font-medium text-[#1c1917]">{c}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid sm:grid-cols-2 gap-4">
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
                  </div>

                  <div>
                    <label htmlFor="annualGrossSales" className={labelClass}>
                      Annual Gross Sales <span className="font-normal text-[#78716c]">(last 12 months)</span>
                    </label>
                    <input
                      id="annualGrossSales"
                      name="annualGrossSales"
                      type="text"
                      inputMode="numeric"
                      value={formData.annualGrossSales}
                      onChange={handleChange}
                      placeholder="$0 — $500,000"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Tell us about your operation{" "}
                      <span className="text-[#78716c] font-normal">(optional)</span>
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
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#9a3412] to-[#c2410c] text-white font-bold rounded-xl shadow-lg shadow-[#9a3412]/30 hover:shadow-[#9a3412]/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "Request My Free Quote"}
                    {!submitting && <ArrowRight className="w-5 h-5" />}
                  </button>

                  <p className="text-xs text-center text-[#78716c]">
                    No spam. No commitment. We'll contact you to discuss your specific needs.
                  </p>
                
        {/* complete contractor field set — forms-required-fields.json */}
        <div>
          <label className="block text-sm font-bold mb-1.5">Estimated employee count (year total)</label>
          <input type="number" name="estimated_employee_count" value={formData.estimated_employee_count} onChange={(e) => setFormData({ ...formData, estimated_employee_count: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Estimated employee annual payroll</label>
          <input type="text" name="estimated_employee_payroll" value={formData.estimated_employee_payroll} onChange={(e) => setFormData({ ...formData, estimated_employee_payroll: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Estimated material costs</label>
          <input type="text" name="estimated_material_costs" value={formData.estimated_material_costs} onChange={(e) => setFormData({ ...formData, estimated_material_costs: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Estimated subcontractor expenses (next 12 months)</label>
          <input type="text" name="estimated_subcontractor_expenses" value={formData.estimated_subcontractor_expenses} onChange={(e) => setFormData({ ...formData, estimated_subcontractor_expenses: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">What percent of your subcontractors have insurance?</label>
          <input type="number" name="percent_subcontractors_insured" value={formData.percent_subcontractors_insured} onChange={(e) => setFormData({ ...formData, percent_subcontractors_insured: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Prior policy expiration date</label>
          <input type="date" name="prior_policy_expiration" value={formData.prior_policy_expiration} onChange={(e) => setFormData({ ...formData, prior_policy_expiration: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Prior policy number</label>
          <input type="text" name="prior_policy_number" value={formData.prior_policy_number} onChange={(e) => setFormData({ ...formData, prior_policy_number: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Prior year employee count</label>
          <input type="number" name="prior_year_employee_count" value={formData.prior_year_employee_count} onChange={(e) => setFormData({ ...formData, prior_year_employee_count: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Prior year employee payroll</label>
          <input type="text" name="prior_year_employee_payroll" value={formData.prior_year_employee_payroll} onChange={(e) => setFormData({ ...formData, prior_year_employee_payroll: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Prior year subcontractor expenses</label>
          <input type="text" name="prior_year_subcontractor_expenses" value={formData.prior_year_subcontractor_expenses} onChange={(e) => setFormData({ ...formData, prior_year_subcontractor_expenses: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Do your subcontractors have insurance?</label>
          <select name="subcontractors_have_insurance" value={formData.subcontractors_have_insurance} onChange={(e) => setFormData({ ...formData, subcontractors_have_insurance: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg">
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* complete contractor field set — forms-required-fields.json */}
        <div>
          <label className="block text-sm font-bold mb-1.5">Prior year gross sales</label>
          <input type="text" name="prior_year_gross_sales" value={formData.prior_year_gross_sales} onChange={(e) => setFormData({ ...formData, prior_year_gross_sales: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Estimated gross sales (next 12 months)</label>
          <input type="text" name="estimated_gross_sales" value={formData.estimated_gross_sales} onChange={(e) => setFormData({ ...formData, estimated_gross_sales: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Do you need coverage for uninsured subcontractors?</label>
          <select name="coverage_for_uninsured_subcontractors" value={formData.coverage_for_uninsured_subcontractors} onChange={(e) => setFormData({ ...formData, coverage_for_uninsured_subcontractors: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg">
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Description of business</label>
          <textarea name="business_description" rows={3} value={formData.business_description} onChange={(e) => setFormData({ ...formData, business_description: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Class code 1 (+ % of operations)</label>
          <input type="text" name="class_code_1" value={formData.class_code_1} onChange={(e) => setFormData({ ...formData, class_code_1: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Class code 2 (+ % of operations)</label>
          <input type="text" name="class_code_2" value={formData.class_code_2} onChange={(e) => setFormData({ ...formData, class_code_2: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Class code 3 (+ % of operations)</label>
          <input type="text" name="class_code_3" value={formData.class_code_3} onChange={(e) => setFormData({ ...formData, class_code_3: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Class code 4 (+ % of operations)</label>
          <input type="text" name="class_code_4" value={formData.class_code_4} onChange={(e) => setFormData({ ...formData, class_code_4: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Class code 5 (+ % of operations)</label>
          <input type="text" name="class_code_5" value={formData.class_code_5} onChange={(e) => setFormData({ ...formData, class_code_5: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Residential vs commercial split</label>
          <input type="text" name="residential_vs_commercial" value={formData.residential_vs_commercial} onChange={(e) => setFormData({ ...formData, residential_vs_commercial: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">New construction vs existing / remodel</label>
          <input type="text" name="new_vs_existing_construction" value={formData.new_vs_existing_construction} onChange={(e) => setFormData({ ...formData, new_vs_existing_construction: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">5 largest projects ever (description + dollar amount)</label>
          <textarea name="largest_projects" rows={3} value={formData.largest_projects} onChange={(e) => setFormData({ ...formData, largest_projects: e.target.value })} placeholder="Description and dollar amount for each" className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1.5">Prior insurance carrier name</label>
          <input type="text" name="prior_carrier_name" value={formData.prior_carrier_name} onChange={(e) => setFormData({ ...formData, prior_carrier_name: e.target.value })} className="w-full px-4 py-2.5 border rounded-lg" />
        </div>
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
