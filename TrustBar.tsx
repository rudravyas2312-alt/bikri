import { motion } from "framer-motion";
import { TrendingUp, Target, Rocket, Zap } from "lucide-react";
import AnimatedNumber from "./AnimatedNumber";

const EASE = [0.22, 1, 0.36, 1] as const;
const ORANGE = "#ec6a2c";

const metrics = [
  { icon: TrendingUp, value: 12400, prefix: "", suffix: "+", useCommas: true, label: "Qualified Leads Generated" },
  { icon: Target, value: 98, prefix: "", suffix: "%", useCommas: false, label: "Conversion-Focused Systems" },
  { icon: Rocket, value: 4.8, prefix: "", suffix: "x", decimals: 1, useCommas: false, label: "ROI Driven Campaigns" },
  { icon: Zap, value: 14, prefix: "", suffix: " Days", useCommas: false, label: "Fast Deployment" },
];

const INDUSTRIES = [
  "Real Estate Agencies", "Interior Design Firms", "Solar Installation Companies",
  "Dental Clinics", "Cosmetic Clinics", "Immigration Consultants",
  "Financial Advisors", "Insurance Agencies", "Home Renovation Companies", "Luxury Car Dealers",
];

export default function TrustBar() {
  return (
    <section className="relative py-16 sm:py-20" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="card-light rounded-2xl p-5 sm:p-7 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="rounded-lg p-2"
                  style={{ backgroundColor: "rgba(236,106,44,0.1)" }}
                  whileHover={{ scale: 1.15, transition: { type: "spring", stiffness: 400, damping: 15 } }}
                >
                  <m.icon size={18} style={{ color: ORANGE }} />
                </motion.div>
              </div>
              <div className="font-[var(--font-display)] text-2xl sm:text-4xl font-bold text-black tracking-tight">
                <AnimatedNumber value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals || 0} useCommas={m.useCommas} />
              </div>
              <div className="mt-1 text-xs sm:text-sm text-[#555] leading-snug">{m.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-14 overflow-hidden relative"
        >
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10" />
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex gap-3 shrink-0">
                {INDUSTRIES.map((t) => (
                  <span key={t} className="card-light rounded-full px-5 py-2 text-sm text-[#555] font-medium shadow-card">{t}</span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
