import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Calendar, Clock, AlertCircle, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const FORMSPREE_ID = "mojoalga";
const INDUSTRIES = [
  "Real Estate Agencies",
  "Interior Design Firms",
  "Solar Installation Companies",
  "Dental Clinics",
  "Cosmetic Clinics",
  "Immigration Consultants",
  "Financial Advisors",
  "Insurance Agencies",
  "Home Renovation Companies",
  "Luxury Car Dealers",
  "Other",
];

const trustBadges = [
  { icon: Zap, label: "Instant Response" },
  { icon: ShieldCheck, label: "100% Secure" },
  { icon: Sparkles, label: "No Commitment" },
];

function BookingForm({ onSubmitted }: { onSubmitted: (data: { name: string; email: string }) => void }) {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [form, setForm] = useState({ name: "", email: "", business: "", industry: "Real Estate Agencies" });

  if (state.succeeded) {
    onSubmitted({ name: form.name, email: form.email });
    return null;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
          <span className="text-[10px] font-semibold text-orange uppercase tracking-widest">Free Strategy Call</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
        </div>
        <h3 className="font-[var(--font-display)] text-2xl font-bold text-white text-center">
          Book Your Free Call
        </h3>
        <p className="text-white/45 text-sm text-center mt-1.5">Fill in your details and we'll be in touch.</p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Full Name", name: "name", type: "text", placeholder: "John Doe", value: form.name },
          { label: "Email Address", name: "email", type: "email", placeholder: "john@business.com", value: form.email },
          { label: "Business Name", name: "business", type: "text", placeholder: "Your Company", value: form.business },
        ].map((field, i) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: EASE }}
            className="group"
          >
            <label className="block text-[11px] font-semibold text-white/50 mb-1.5 uppercase tracking-wider">{field.label}</label>
            <div className="relative">
              <input
                required
                type={field.type}
                name={field.name}
                value={field.value}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                className="w-full rounded-xl bg-black/40 border border-white/[0.08] px-4 py-3.5 text-sm text-white placeholder-white/25 focus:border-orange/50 focus:outline-none focus:ring-2 focus:ring-orange/15 transition-all hover:border-white/20"
                placeholder={field.placeholder}
              />
              <div className="absolute inset-0 rounded-xl pointer-events-none ring-1 ring-inset ring-orange/0 group-focus-within:ring-orange/10 transition-all" />
            </div>
            <ValidationError field={field.name} errors={state.errors} className="block mt-1 text-xs text-red-300" />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          className="group"
        >
          <label className="block text-[11px] font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Industry</label>
          <select
            name="industry"
            value={form.industry}
            onChange={(e) => setForm({ ...form, industry: e.target.value })}
            className="w-full rounded-xl bg-black/40 border border-white/[0.08] px-4 py-3.5 text-sm text-white focus:border-orange/50 focus:outline-none focus:ring-2 focus:ring-orange/15 transition-all hover:border-white/20"
          >
            {INDUSTRIES.map((o) => (
              <option key={o} value={o} className="bg-black">{o}</option>
            ))}
          </select>
        </motion.div>

        <input type="hidden" name="_subject" value={`New Strategy Call Request — ${form.business || form.name}`} />

        {state.errors && !state.submitting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-start gap-2 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-300"
          >
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span>Something went wrong sending your request. Please try again, or email us directly at rudraworkitup@gmail.com.</span>
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={state.submitting}
          initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 17 } }}
          whileTap={{ scale: 0.97 }}
          className="group relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange to-orange-bright px-6 py-4 text-base font-bold text-black hover:shadow-[0_8px_30px_-4px_rgba(255,106,0,0.5)] transition-all disabled:opacity-70 overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          {state.submitting ? "Sending..." : (
            <>
              Book Free Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </motion.button>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
          className="flex items-center justify-center gap-5 pt-2"
        >
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center gap-1.5">
              <b.icon size={13} className="text-orange/60" />
              <span className="text-[10px] text-white/35 font-medium">{b.label}</span>
            </div>
          ))}
        </motion.div>
      </form>
    </>
  );
}

export default function FinalCTA() {
  const [formKey, setFormKey] = useState(0);
  const [confirmation, setConfirmation] = useState<{ name: string; email: string } | null>(null);

  return (
    <section id="book" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vw] max-w-[800px] max-h-[600px] rounded-full bg-orange/20 blur-[130px] animate-gradient" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full bg-orange-deep/15 blur-[120px] animate-gradient" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - copy */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="text-orange text-sm font-semibold tracking-widest uppercase">Free Strategy Session</span>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Ready To Scale Your<span className="text-gradient-orange"> Lead Generation?</span>
            </h2>
            <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed">
              Book a free strategy session and discover your next growth opportunity. We'll map out exactly how to turn your ad spend into qualified leads.
            </p>

            <ul className="mt-8 space-y-3">
              {["30-minute deep-dive call", "Custom lead generation audit", "No commitment, no pressure"].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: EASE }}
                  className="flex items-center gap-3 text-white/80"
                >
                  <motion.span whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 400, damping: 15 } }}>
                    <CheckCircle2 size={18} className="text-orange shrink-0" />
                  </motion.span>
                  <span className="text-sm sm:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              className="mt-8 flex items-center gap-5 text-sm text-white/50"
            >
              <span className="flex items-center gap-2"><Calendar size={15} className="text-orange" /> Available this week</span>
              <span className="flex items-center gap-2"><Clock size={15} className="text-orange" /> 30 min</span>
            </motion.div>
          </motion.div>

          {/* Right - premium booking card */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(12px)", scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative"
          >
            {/* Glow layers */}
            <div className="absolute -inset-1 rounded-[26px] bg-gradient-to-br from-orange/20 via-transparent to-orange-deep/10 blur-xl" />
            <div className="absolute inset-0 rounded-3xl bg-orange/10 blur-2xl" />

            {/* Card */}
            <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-xl p-7 sm:p-9 min-h-[440px] overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent" />

              {/* Corner glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-orange/10 blur-3xl pointer-events-none" />

              {confirmation ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="text-center py-10 relative"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                    className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-orange to-orange-bright flex items-center justify-center mb-5 shadow-[0_0_30px_-4px_rgba(255,106,0,0.6)]"
                  >
                    <CheckCircle2 size={32} className="text-black" />
                  </motion.div>
                  <h3 className="font-[var(--font-display)] text-2xl font-bold text-white mb-2">You're booked!</h3>
                  <p className="text-white/60 text-sm max-w-xs mx-auto">
                    Thanks {confirmation.name || "there"}. We'll reach out to {confirmation.email || "you"} within 24 hours to confirm your strategy session.
                  </p>
                  <button
                    onClick={() => { setConfirmation(null); setFormKey((k) => k + 1); }}
                    className="mt-6 text-orange text-sm font-semibold hover:underline"
                  >
                    Book another call
                  </button>
                </motion.div>
              ) : (
                <BookingForm
                  key={formKey}
                  onSubmitted={(data) => setConfirmation(data)}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
