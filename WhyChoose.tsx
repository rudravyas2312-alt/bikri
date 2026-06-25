import { motion } from "framer-motion";
import { BarChart3, Crosshair, Gauge, FileBarChart, Layers } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const ORANGE = "#ec6a2c";

const reasons = [
  { icon: BarChart3, title: "Data Driven", desc: "Every decision backed by real performance data — no guesswork, just measurable results." },
  { icon: Crosshair, title: "Conversion Focused", desc: "We optimize for revenue, not vanity metrics. Every dollar tracked to outcome." },
  { icon: Gauge, title: "Fast Execution", desc: "From kickoff to live campaigns in 14 days. Momentum is our competitive edge." },
  { icon: FileBarChart, title: "Transparent Reporting", desc: "Live dashboards and clear reporting. You always know exactly where your budget goes." },
  { icon: Layers, title: "Scalable Systems", desc: "Built to grow. Systems that handle 10 leads or 1,000 without breaking a sweat." },
];

export default function WhyChoose() {
  return (
    <section id="why" className="relative py-24 sm:py-32" style={{ backgroundColor: "#fff" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: ORANGE }}>Why बिक्री</span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-5xl font-bold tracking-tight text-black">
            Built different. <span style={{ color: ORANGE }}>Built to win.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`card-light rounded-3xl p-7 hover:shadow-card-hover transition-shadow duration-300 ${i === 4 ? "lg:col-span-1" : ""}`}
            >
              <motion.div
                className="rounded-2xl p-3 w-fit mb-5"
                style={{ backgroundColor: "rgba(236,106,44,0.1)" }}
                whileHover={{ scale: 1.1, rotate: 3, transition: { type: "spring", stiffness: 400, damping: 15 } }}
              >
                <r.icon size={22} style={{ color: ORANGE }} />
              </motion.div>
              <h3 className="font-[var(--font-display)] text-xl font-bold text-black mb-2">{r.title}</h3>
              <p className="text-sm text-[#555] leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
