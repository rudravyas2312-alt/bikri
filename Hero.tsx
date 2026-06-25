import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const ORANGE = "#ec6a2c";

export default function Hero() {
  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 900], [0, 250]);
  const yBlob2 = useTransform(scrollY, [0, 900], [0, -180]);
  const heroY = useTransform(scrollY, [0, 700], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20" style={{ backgroundColor: "#000" }}>
      {/* Orange glow blobs on black hero */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ y: yBlob1, backgroundColor: "rgba(236,106,44,0.18)" }}
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full blur-[140px] animate-gradient"
        />
        <motion.div
          style={{ y: yBlob2, backgroundColor: "rgba(236,106,44,0.1)" }}
          className="absolute bottom-[-30%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[140px] animate-gradient"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(15px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: EASE }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl blur-2xl animate-pulse" style={{ backgroundColor: "rgba(236,106,44,0.3)" }} />
            <div className="relative rounded-3xl px-8 py-5" style={{ border: "1px solid rgba(236,106,44,0.25)", backgroundColor: "rgba(236,106,44,0.05)" }}>
              <span className="font-[var(--font-deva)] text-5xl sm:text-7xl font-extrabold text-white tracking-tight">
                बिक्री<span style={{ color: ORANGE }}>.</span>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7"
          style={{ border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.05)" }}
        >
          <Sparkles size={14} style={{ color: ORANGE }} />
          <span className="text-xs sm:text-sm font-medium text-white/80">Lead Generation Agency · Meta Ads · Conversion Systems</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: EASE }}
          className="font-[var(--font-display)] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
        >
          Turn Attention Into
          <br />
          <span style={{ color: ORANGE }}>Qualified Leads.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          className="mx-auto mt-7 max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed"
        >
          We build lead generation systems that consistently attract, qualify, and convert prospects into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#book" className="group inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-semibold text-white transition-all hover:scale-[1.03] active:scale-95 glow-orange" style={{ backgroundColor: ORANGE }}>
            Book Free Strategy Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#process" className="group inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all hover:scale-[1.03] active:scale-95" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
            <Play size={16} style={{ color: ORANGE }} />
            See How It Works
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
          className="mt-6 text-xs text-white/40"
        >
          No commitment · 30-min strategy session · Built for high-value service businesses
        </motion.p>
      </motion.div>
    </section>
  );
}
