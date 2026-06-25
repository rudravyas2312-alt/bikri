import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  useCommas?: boolean;
  duration?: number;
  startDelay?: number;
  className?: string;
}

/**
 * Apple-keynote-style number animation:
 * 1. Waits for startDelay (sync with parent container fade-in)
 * 2. Rapidly scrambles through random numbers (slot-machine effect)
 * 3. Smoothly counts up to the final value with easeOutQuart
 * 4. Triggers when scrolled into view
 */
export default function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  useCommas = false,
  duration = 2000,
  startDelay = 0,
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);
  const [active, setActive] = useState(false);

  // Wait for startDelay after entering view before starting the animation
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setActive(true), startDelay);
    return () => clearTimeout(t);
  }, [inView, startDelay]);

  useEffect(() => {
    if (!active) return;

    const scrambleDuration = 600;
    const countDuration = duration - scrambleDuration;
    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;

      if (elapsed < scrambleDuration) {
        // Scramble phase — random numbers in a similar magnitude
        const range = Math.max(value * 2.5, 100);
        setDisplay(Math.random() * range);
        frame = requestAnimationFrame(tick);
      } else if (elapsed < duration) {
        // Count-up phase — easeOutQuart
        const progress = (elapsed - scrambleDuration) / countDuration;
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplay(value * eased);
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value, duration]);

  const formatNumber = (n: number) => {
    const fixed = n.toFixed(decimals);
    if (!useCommas) return fixed;
    const [int, dec] = fixed.split(".");
    const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return dec ? `${withCommas}.${dec}` : withCommas;
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{formatNumber(display)}{suffix}
    </span>
  );
}
