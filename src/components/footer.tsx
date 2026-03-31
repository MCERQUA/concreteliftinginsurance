import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Clock } from "lucide-react";

const footerLinks = {
  coverage: [
    { href: "/services#spray-foam", label: "Spray Foam Lifting" },
    { href: "/services#mud-jacking", label: "Mud Jacking" },
    { href: "/services#general-liability", label: "General Liability" },
    { href: "/services#workers-comp", label: "Workers Compensation" },
    { href: "/services#commercial-auto", label: "Commercial Auto" },
    { href: "/services#equipment", label: "Equipment Breakdown" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Resources" },
    { href: "/contact", label: "Contact" },
    { href: "/blog/claims-process", label: "File a Claim" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/accessibility", label: "Accessibility" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#030d1a] border-t border-[rgba(255,140,0,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff8c00] to-[#ffb347] flex items-center justify-center shadow-lg shadow-[#ff8c00]/30">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white leading-tight">CONCRETE</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#ff8c00] leading-tight">LIFTING INSURANCE</span>
              </div>
            </Link>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 max-w-sm">
              Specialized insurance coverage for concrete lifting contractors. Whether you use spray foam injection or traditional mud jacking, we have you covered.
            </p>
            <div className="space-y-3 text-sm text-[#94a3b8]">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#ff8c00]" />
                <a href="tel:+18005433843" className="hover:text-[#ff8c00] transition-colors">1-800-543-3843</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#ff8c00]" />
                <a href="mailto:quotes@concreteliftinginsurance.com" className="hover:text-[#ff8c00] transition-colors">quotes@concreteliftinginsurance.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#ff8c00]" />
                <span>Mon-Fri 8am-6pm EST</span>
              </div>
            </div>
          </div>

          {/* Coverage Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Coverage</h3>
            <ul className="space-y-3">
              {footerLinks.coverage.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#94a3b8] hover:text-[#ff8c00] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#94a3b8] hover:text-[#ff8c00] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#94a3b8] hover:text-[#ff8c00] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[rgba(255,140,0,0.1)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#64748b]">
            &copy; {new Date().getFullYear()} Concrete Lifting Insurance. All rights reserved. Licensed in all 50 states.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#64748b]">BBB Rating: A+</span>
            <span className="text-xs text-[#64748b]">|</span>
            <span className="text-xs text-[#64748b]">NPN #12345678</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
