import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, DollarSign, Phone, Users, Target } from "lucide-react";
import AnimatedNumber from "./AnimatedNumber";

const EASE = [0.22, 1, 0.36, 1] as const;
const ORANGE = "#ec6a2c";
const USD_TO_INR = 83;

type Currency = "USD" | "INR";

const fmtMoney = (usd: number, currency: Currency, compact = false) => {
  if (currency === "INR") {
    const inr = usd * USD_TO_INR;
    if (compact) {
      if (inr >= 10000000) return `₹${(inr / 10000000).toFixed(1)}Cr`;
      if (inr >= 100000) return `₹${(inr / 100000).toFixed(1)}L`;
      if (inr >= 1000) return `₹${(inr / 1000).toFixed(1)}K`;
      return `₹${inr.toFixed(0)}`;
    }
    return `₹${inr.toLocaleString("en-IN")}`;
  }
  if (compact) {
    if (usd >= 1000) return `$${(usd / 1000).toFixed(1)}K`;
    return `$${usd.toFixed(0)}`;
  }
  return `$${usd.toLocaleString("en-US")}`;
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const leads = [42, 68, 95, 130, 175, 240, 310, 387];
const maxLead = Math.max(...leads);
const cplUsd = [9.5, 8.2, 7.1, 6.3, 5.8, 5.2, 4.8, 4.4];
const revenueK = [12, 28, 48, 55, 70, 83, 89, 92];
const maxRev = Math.max(...revenueK);

export default function CaseStudy() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [activeBar, setActiveBar] = useState<number | null>(null);
  const [activeSlice, setActiveSlice] = useState<number | null>(null);

  const totalRevUsd = revenueK[revenueK.length - 1] * 1000;
  const TARGET_USD = 200_000;
  const achievedPct = Math.round((totalRevUsd / TARGET_USD) * 100);

  const wheelR = 72;
  const wheelCircumference = 2 * Math.PI * wheelR;
  const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const kpis = [
    { icon: Users, label: "Leads / Month", numValue: 100, prefix: "", suffix: "+", decimals: 0, useCommas: false, change: "+212%", changeNum: 212, changePrefix: "+", changeSuffix: "%", up: true },
    { icon: DollarSign, label: "Cost per Lead", numValue: currency === "USD" ? 4.40 : 365, prefix: currency === "USD" ? "$" : "₹", suffix: "", decimals: currency === "USD" ? 2 : 0, useCommas: false, change: "-46%", changeNum: 46, changePrefix: "-", changeSuffix: "%", up: true },
    { icon: Phone, label: "Booked Calls", numValue: 80, prefix: "", suffix: "+", decimals: 0, useCommas: false, change: "+180%", changeNum: 180, changePrefix: "+", changeSuffix: "%", up: true },
    { icon: Target, label: "Conversion Rate", numValue: 32, prefix: "", suffix: "%", decimals: 0, useCommas: false, change: "+9 pts", changeNum: 9, changePrefix: "+", changeSuffix: " pts", up: true },
  ];

  return (
    <section id="case-study" className="relative py-24 sm:py-32" style={{ backgroundColor: "#fff" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-2xl mb-12"
        >
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: ORANGE }}>Case Study</span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-5xl font-bold tracking-tight text-black">
            Real numbers. <span style={{ color: ORANGE }}>Real growth.</span>
          </h2>
          <p className="mt-4 text-[#555] text-base sm:text-lg">
            A 90-day campaign for a real estate client — from cold start to predictable lead flow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="card-light rounded-3xl p-6 sm:p-8 overflow-hidden shadow-card"
        >
          {/* Currency toggle */}
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-[#555] font-semibold text-sm">Performance Dashboard</h4>
            <div className="inline-flex rounded-xl p-1" style={{ border: "1px solid #eaeaea", backgroundColor: "#f5f5f5" }}>
              {(["USD", "INR"] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${currency === c ? "text-white" : "text-[#555] hover:text-black"}`}
                  style={currency === c ? { backgroundColor: ORANGE } : {}}
                >
                  {c === "USD" ? "$ USD" : "₹ INR"}
                </button>
              ))}
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {kpis.map((k, i) => (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="rounded-2xl p-4 sm:p-5" style={{ backgroundColor: "#f5f5f5", border: "1px solid #eaeaea" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="rounded-lg p-2" style={{ backgroundColor: "rgba(236,106,44,0.1)" }}>
                    <k.icon size={16} style={{ color: ORANGE }} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: k.up ? "#2a2a2a" : "#ef4444" }}>
                    {k.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    <AnimatedNumber value={k.changeNum} prefix={k.changePrefix} suffix={k.changeSuffix} duration={1500} />
                  </span>
                </div>
                <div className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-black">
                  <AnimatedNumber key={`${k.label}-${currency}`} value={k.numValue} prefix={k.prefix} suffix={k.suffix} decimals={k.decimals} useCommas={k.useCommas} />
                </div>
                <div className="text-xs text-[#555] mt-1">{k.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Interactive bar chart */}
            <motion.div
              initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="lg:col-span-3 rounded-2xl p-5 sm:p-6" style={{ backgroundColor: "#f5f5f5", border: "1px solid #eaeaea" }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-black font-semibold">Monthly Lead Volume</h4>
                  <p className="text-xs text-[#555]">Click a bar for details · 8-month progression</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1" style={{ color: ORANGE, backgroundColor: "rgba(236,106,44,0.1)" }}>
                  <TrendingUp size={11} />
                  <AnimatedNumber value={821} prefix="+" suffix="%" duration={1800} /> growth
                </span>
              </div>

              {/* Bar graph with axes */}
              <div className="relative">
                <svg viewBox="0 0 520 240" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="#d45a1f" />
                      <stop offset="100%" stopColor="#ec6a2c" />
                    </linearGradient>
                    <linearGradient id="barGradActive" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="#ec6a2c" />
                      <stop offset="100%" stopColor="#f17a3a" />
                    </linearGradient>
                    <linearGradient id="barGradDim" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="rgba(212,90,31,0.3)" />
                      <stop offset="100%" stopColor="rgba(236,106,44,0.3)" />
                    </linearGradient>
                  </defs>

                  {[0, 100, 200, 300, 400].map((val) => {
                    const y = 200 - (val / 400) * 170;
                    return (
                      <g key={val}>
                        <line x1="40" y1={y} x2="510" y2={y} stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
                        <text x="32" y={y + 4} textAnchor="end" fill="rgba(85,85,85,0.5)" fontSize="10" fontFamily="Inter, sans-serif">{val}</text>
                      </g>
                    );
                  })}

                  <text x="14" y="110" fill="rgba(85,85,85,0.4)" fontSize="9" fontFamily="Inter, sans-serif" transform="rotate(-90 14 110)">Leads</text>

                  {leads.map((v, i) => {
                    const barW = 38;
                    const gap = (470 - barW * leads.length) / (leads.length - 1);
                    const x = 40 + i * (barW + gap);
                    const barH = (v / 400) * 170;
                    const y = 200 - barH;
                    const isActive = activeBar === i;
                    const isDimmed = activeBar !== null && activeBar !== i;
                    return (
                      <g key={i} className="cursor-pointer" onClick={() => setActiveBar((a) => (a === i ? null : i))}>
                        <rect x={x - 6} y="20" width={barW + 12} height="185" fill="transparent" />
                        <motion.rect x={x} width={barW} rx="5" initial={{ height: 0, y: 200 }} whileInView={{ height: barH, y }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }} fill={isActive ? "url(#barGradActive)" : isDimmed ? "url(#barGradDim)" : "url(#barGrad)"} className="transition-all duration-300" />
                        <motion.text x={x + barW / 2} y={y - 8} textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="Space Grotesk, sans-serif" fill={isActive ? "#ec6a2c" : "rgba(42,42,42,0.7)"} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}>{v}</motion.text>
                        <text x={x + barW / 2} y="218" textAnchor="middle" fill={isActive ? "#ec6a2c" : "rgba(85,85,85,0.5)"} fontSize="10" fontWeight={isActive ? 700 : 400} fontFamily="Inter, sans-serif">{months[i]}</text>
                      </g>
                    );
                  })}

                  {(() => {
                    const barW = 38;
                    const gap = (470 - barW * leads.length) / (leads.length - 1);
                    const pts = leads.map((v, i) => ({ x: 40 + i * (barW + gap) + barW / 2, y: 200 - (v / 400) * 170 }));
                    const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
                    return (
                      <>
                        <motion.path d={path} fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }} />
                        {pts.map((p, i) => (
                          <motion.circle key={i} cx={p.x} cy={p.y} r="3" fill="#fff" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 1 + i * 0.08 }} />
                        ))}
                      </>
                    );
                  })()}

                  <line x1="40" y1="200" x2="510" y2="200" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                </svg>
              </div>

              {/* Active bar detail panel */}
              <div className="mt-5 min-h-[64px]">
                {activeBar !== null ? (
                  <motion.div key={activeBar} initial={{ opacity: 0, y: 10, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.4, ease: EASE }} className="rounded-xl p-4 flex flex-wrap items-center gap-x-6 gap-y-2" style={{ backgroundColor: "rgba(236,106,44,0.06)", border: "1px solid rgba(236,106,44,0.2)" }}>
                    <div>
                      <span className="text-[#555] text-xs">{months[activeBar]} · Leads</span>
                      <div className="text-black font-bold text-lg"><AnimatedNumber value={leads[activeBar]} duration={800} /></div>
                    </div>
                    <div>
                      <span className="text-[#555] text-xs">Cost / Lead</span>
                      <div className="font-bold text-lg" style={{ color: ORANGE }}>
                        <AnimatedNumber key={`cpl-${activeBar}-${currency}`} value={currency === "USD" ? cplUsd[activeBar] : cplUsd[activeBar] * USD_TO_INR} prefix={currency === "USD" ? "$" : "₹"} decimals={currency === "USD" ? 2 : 0} duration={800} />
                      </div>
                    </div>
                    <div>
                      <span className="text-[#555] text-xs">Ad Spend</span>
                      <div className="text-black font-bold text-lg">
                        <AnimatedNumber key={`spend-${activeBar}-${currency}`} value={currency === "USD" ? leads[activeBar] * cplUsd[activeBar] : leads[activeBar] * cplUsd[activeBar] * USD_TO_INR} prefix={currency === "USD" ? "$" : "₹"} decimals={0} useCommas duration={800} />
                      </div>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[#555] text-xs">vs Prev Month</span>
                      <div className="font-bold text-lg" style={{ color: ORANGE }}>{activeBar === 0 ? "—" : `+${Math.round(((leads[activeBar] - leads[activeBar - 1]) / leads[activeBar - 1]) * 100)}%`}</div>
                    </div>
                  </motion.div>
                ) : (
                  <p className="text-[#555] opacity-50 text-xs">Tap any bar above to inspect that month's metrics.</p>
                )}
              </div>
            </motion.div>

            {/* Pie-chart wheel — orange = generated, gray = target */}
            <motion.div
              initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="lg:col-span-2 rounded-2xl p-5 sm:p-6 relative overflow-hidden" style={{ backgroundColor: "#f5f5f5", border: "1px solid #eaeaea" }}
            >
              <div className="mb-4 flex items-center justify-between relative">
                <div>
                  <h4 className="text-black font-semibold">Revenue Generated</h4>
                  <p className="text-xs text-[#555]">Orange = generated · Gray = remaining</p>
                </div>
              </div>

              {/* Donut pie chart */}
              <div className="flex items-center justify-center relative">
                <svg viewBox="0 0 200 200" className="w-44 h-44 sm:w-52 sm:h-52 -rotate-90">
                  <defs>
                    <linearGradient id="orangePieGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#d45a1f" />
                      <stop offset="100%" stopColor="#ec6a2c" />
                    </linearGradient>
                    <filter id="pieGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>

                  {/* Gray base — fills 100% (the full target) */}
                  <motion.circle cx="100" cy="100" r={wheelR} fill="none" stroke="#eaeaea" strokeWidth="28" strokeLinecap="round" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }} style={{ transformOrigin: "100px 100px" }} />

                  {/* Orange fill — grows to represent generated % */}
                  <motion.circle cx="100" cy="100" r={wheelR} fill="none" stroke="url(#orangePieGrad)" strokeWidth="28" strokeLinecap="round" strokeDasharray={`${achievedPct * wheelCircumference / 100} ${wheelCircumference}`} initial={{ strokeDasharray: `0 ${wheelCircumference}` }} whileInView={{ strokeDasharray: `${achievedPct * wheelCircumference / 100} ${wheelCircumference}` }} viewport={{ once: true }} transition={{ duration: 1.8, delay: 0.5, ease: EASE }} filter="url(#pieGlow)" className="cursor-pointer" onMouseEnter={() => setActiveSlice(0)} onMouseLeave={() => setActiveSlice(null)} onClick={() => setActiveSlice((a) => (a === 0 ? null : 0))} />

                  {/* Tick marks for 12 months */}
                  {allMonths.map((_, i) => {
                    const angle = (i / 12) * 360;
                    const rad = (angle * Math.PI) / 180;
                    return <line key={i} x1={100 + 58 * Math.cos(rad)} y1={100 + 58 * Math.sin(rad)} x2={100 + 62 * Math.cos(rad)} y2={100 + 62 * Math.sin(rad)} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />;
                  })}

                  <circle cx="100" cy="100" r="56" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                </svg>

                {/* Center — just the generated amount */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-6">
                  <motion.div initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }} whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 1.6, ease: EASE }}>
                    <div className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold" style={{ color: ORANGE }}>
                      <AnimatedNumber key={`wheel-total-${currency}`} value={currency === "USD" ? totalRevUsd / 1000 : (totalRevUsd * USD_TO_INR) / 100000} prefix={currency === "USD" ? "$" : "₹"} suffix={currency === "USD" ? "K" : "L"} decimals={1} duration={2200} />
                    </div>
                    <div className="text-[10px] text-[#555] mt-1 uppercase tracking-wider">Generated</div>
                  </motion.div>
                </div>

                {/* Pulse ring */}
                <motion.div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(236,106,44,0.15)" }} initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1.15, opacity: [0, 0.5, 0] }} viewport={{ once: true }} transition={{ duration: 2, delay: 1.5, ease: "easeOut" }} />
              </div>

              {/* Legend */}
              <div className="mt-4 flex items-center justify-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: ORANGE }} />
                  <span className="text-[10px] text-[#555]">Generated</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#eaeaea" }} />
                  <span className="text-[10px] text-[#555]">Remaining</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
