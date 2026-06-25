import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const ORANGE = "#ec6a2c";

const INDUSTRIES = [
  "Real Estate Agencies", "Interior Design Firms", "Solar Installation Companies",
  "Dental Clinics", "Cosmetic Clinics", "Immigration Consultants",
  "Financial Advisors", "Insurance Agencies", "Home Renovation Companies", "Luxury Car Dealers",
];

export default function Footer() {
  return (
    <footer className="relative" style={{ backgroundColor: "#000" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-[var(--font-deva)] text-3xl font-extrabold text-white tracking-tight">
              बिक्री<span style={{ color: ORANGE }}>.</span>
            </span>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Lead generation systems built for conversion. We turn attention into qualified leads.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/the.bikri/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-lg p-2.5 text-white/60 hover:text-white transition-all hover:scale-110" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-lg p-2.5 text-white/60 hover:text-white transition-all hover:scale-110" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="rounded-lg p-2.5 text-white/60 hover:text-white transition-all hover:scale-110" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {["Meta Ads", "Landing Pages", "Lead Funnels", "CRM Automation"].map((s) => (
                <li key={s}><a href="#services" className="text-sm text-white/50 hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Industries</h4>
            <ul className="space-y-3">
              {INDUSTRIES.map((s) => (
                <li key={s}><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li><a href="mailto:rudraworkitup@gmail.com" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"><Mail size={15} style={{ color: ORANGE }} /> rudraworkitup@gmail.com</a></li>
              <li><a href="tel:+919370610854" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"><Phone size={15} style={{ color: ORANGE }} /> +91 93706 10854</a></li>
              <li className="flex items-center gap-2 text-sm text-white/50"><MapPin size={15} style={{ color: ORANGE }} /> Mumbai · Remote Worldwide</li>
            </ul>
            <a href="#book" className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: ORANGE }}>
              Book Free Call <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 flex items-center justify-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} बिक्री. All rights reserved.</p>
        </div>
      </div>

      {/* Orange accent bar */}
      <div className="h-1 w-full" style={{ backgroundColor: ORANGE }} />
    </footer>
  );
}
