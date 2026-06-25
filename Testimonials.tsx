import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";
import AnimatedNumber from "./AnimatedNumber";

const EASE = [0.22, 1, 0.36, 1] as const;
const ORANGE = "#ec6a2c";

const testimonials = [
  { quote: "बिक्री transformed our lead flow completely. Within 60 days we went from struggling to find clients to turning away work. The systems they built just work.", role: "Verified Client", industry: "Real Estate Agencies", metricValue: 3.2, metricPrefix: "", metricSuffix: "x leads", metricDecimals: 1 },
  { quote: "Our clinic was invisible online. After बिक्री rebuilt our funnel and ads, we're booking 40+ new patient calls a month. Best investment we've made.", role: "Verified Client", industry: "Dental Clinics", metricValue: 124, metricPrefix: "", metricSuffix: " calls/mo", metricDecimals: 0 },
  { quote: "As a design firm, we relied on referrals. Now we have a predictable pipeline of qualified projects. The landing page alone converted at 38%.", role: "Verified Client", industry: "Interior Design Firms", metricValue: 38, metricPrefix: "", metricSuffix: "% conv.", metricDecimals: 0 },
  { quote: "We scaled from inconsistent months to predictable revenue. Their CRM automation means no lead is ever missed. This is what real systems look like.", role: "Verified Client", industry: "Solar Installation Companies", metricValue: 4, metricPrefix: "", metricSuffix: "x revenue", metricDecimals: 0 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: ORANGE }}>Client Results</span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-5xl font-bold tracking-tight text-black">
            Trusted by businesses that <span style={{ color: ORANGE }}>grow.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="group relative card-light rounded-3xl p-7 sm:p-8 hover:shadow-card-hover transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 transition-colors" size={48} style={{ color: "#eaeaea" }} />
              <motion.div className="flex gap-1 mb-5" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}>
                {[...Array(5)].map((_, k) => (
                  <motion.span key={k} initial={{ scale: 0, rotate: -30 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.4 + i * 0.12 + k * 0.08 }}>
                    <Star size={16} className="fill-current" style={{ color: ORANGE }} />
                  </motion.span>
                ))}
              </motion.div>
              <p className="text-[#2a2a2a] text-base sm:text-lg leading-relaxed mb-7 relative z-10">"{t.quote}"</p>
              <div className="flex items-center justify-between gap-4 pt-5" style={{ borderTop: "1px solid #eaeaea" }}>
                <div className="flex items-center gap-3">
                  <motion.div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: ORANGE }} whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 15 } }}>
                    <BadgeCheck size={20} className="text-white" />
                  </motion.div>
                  <div>
                    <div className="text-black font-semibold text-sm">{t.role}</div>
                    <div className="text-[#555] text-xs">{t.industry}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm" style={{ color: ORANGE }}>
                    <AnimatedNumber value={t.metricValue} prefix={t.metricPrefix} suffix={t.metricSuffix} decimals={t.metricDecimals} />
                  </div>
                  <div className="text-[#555] text-xs">Result</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
