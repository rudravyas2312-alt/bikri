import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#case-study" },
  { label: "Why Us", href: "#why" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className={`mx-auto max-w-7xl px-5 sm:px-8 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
        <nav className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${scrolled ? "glass shadow-card" : "bg-transparent"}`}>
          <a href="#top" className="flex items-center gap-2 group">
            <span className="font-[var(--font-deva)] text-2xl font-extrabold text-black tracking-tight">
              बिक्री<span style={{ color: "#ec6a2c" }}>.</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="px-4 py-2 text-sm font-medium text-[#555] hover:text-black transition-colors rounded-lg hover:bg-black/5">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#book" className="hidden sm:inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-all hover:scale-[1.03] active:scale-95" style={{ backgroundColor: "#ec6a2c" }}>
              Book Free Call
            </a>
            <button onClick={() => setOpen((o) => !o)} className="lg:hidden p-2 text-black" aria-label="Menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden overflow-hidden mt-2">
              <div className="glass rounded-2xl p-3 flex flex-col gap-1 shadow-card">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-medium text-[#555] hover:text-black hover:bg-black/5 rounded-xl transition-colors">
                    {l.label}
                  </a>
                ))}
                <a href="#book" onClick={() => setOpen(false)} className="mt-1 rounded-xl px-4 py-3 text-sm font-semibold text-white text-center" style={{ backgroundColor: "#ec6a2c" }}>
                  Book Free Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
