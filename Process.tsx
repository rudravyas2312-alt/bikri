import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Users, LineChart } from "lucide-react";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const ORANGE = "#ec6a2c";

const steps = [
  { num: "01", icon: Search, title: "Research & Strategy", desc: "We deep-dive into your market, audience, and offer to engineer a lead generation blueprint tailored to your business." },
  { num: "02", icon: PenTool, title: "Campaign Creation", desc: "High-converting ad creative, copy, and landing pages built around your unique conversion mechanism." },
  { num: "03", icon: Users, title: "Lead Generation", desc: "Launch precision Meta Ads campaigns that attract and qualify prospects ready to do business with you." },
  { num: "04", icon: LineChart, title: "Optimization & Scaling", desc: "Continuous testing, refinement, and scaling to lower cost-per-lead and maximize ROI over time." },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineScaleX = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <section id="process" ref={sectionRef} className="relative py-24 sm:py-32" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: ORANGE }}>How It Works</span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-5xl font-bold tracking-tight text-black">
            A proven path from <span style={{ color: ORANGE }}>click to customer.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px">
            <div className="absolute inset-0" style={{ backgroundColor: "#eaeaea" }} />
            <motion.div style={{ scaleX: lineScaleX, backgroundColor: ORANGE }} className="absolute inset-0 origin-left" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: EASE }}
                className="relative"
              >
                <div className="flex flex-col items-start">
                  <motion.div className="relative mb-6" whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 15 } }}>
                    <div className="absolute inset-0 rounded-2xl blur-xl animate-pulse" style={{ backgroundColor: "rgba(236,106,44,0.2)", animationDelay: `${i * 0.5}s` }} />
                    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center card-light shadow-card">
                      <s.icon size={22} style={{ color: ORANGE }} />
                    </div>
                  </motion.div>
                  <div className="font-[var(--font-display)] text-5xl font-bold mb-2" style={{ color: "#eaeaea" }}>{s.num}</div>
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-black mb-3">{s.title}</h3>
                  <p className="text-sm text-[#555] leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
