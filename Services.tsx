import { motion } from "framer-motion";
import { Megaphone, LayoutTemplate, Filter, Workflow, ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const ORANGE = "#ec6a2c";

const services = [
  { icon: Megaphone, title: "Meta Ads", desc: "Generate targeted leads at scale with precision-built Facebook & Instagram campaigns engineered for your audience.", tag: "Paid Acquisition" },
  { icon: LayoutTemplate, title: "Landing Pages", desc: "Conversion-optimized pages designed to turn clicks into customers — fast, mobile-first, and built to convert.", tag: "Design + Dev" },
  { icon: Filter, title: "Lead Funnels", desc: "Complete customer acquisition systems that move prospects from first touch to booked call automatically.", tag: "Full System" },
  { icon: Workflow, title: "CRM Automation", desc: "Lead tracking and follow-up automation so no opportunity slips through. Instant response, nurtured sequences.", tag: "Automation" },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32" style={{ backgroundColor: "#fff" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-2xl mb-14"
        >
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: ORANGE }}>What We Do</span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-5xl font-bold tracking-tight text-black">
            Everything you need to <span style={{ color: ORANGE }}>generate leads.</span>
          </h2>
          <p className="mt-4 text-[#555] text-base sm:text-lg">Four core systems that work together to turn ad spend into booked customers.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="group relative card-light rounded-3xl p-7 hover:shadow-card-hover transition-shadow duration-300 overflow-hidden"
              style={{ borderColor: "#eaeaea" }}
            >
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className="rounded-2xl p-3 transition-all duration-300"
                    style={{ backgroundColor: "rgba(236,106,44,0.1)" }}
                    whileHover={{ scale: 1.12, rotate: -3, transition: { type: "spring", stiffness: 400, damping: 15 } }}
                  >
                    <s.icon size={22} style={{ color: ORANGE }} />
                  </motion.div>
                  <ArrowUpRight size={18} className="text-[#eaeaea] group-hover:text-[#ec6a2c] transition-colors" />
                </div>
                <div className="text-xs font-medium mb-2" style={{ color: "rgba(236,106,44,0.7)" }}>{s.tag}</div>
                <h3 className="font-[var(--font-display)] text-xl font-bold text-black mb-3">{s.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
