/**
 * CIVIC PRECISION — motion is restrained, document-like, and respectful of reduced-motion preferences.
 */
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function MotionReveal({ children, className, delay = 0, variant = "rise" }: { children: ReactNode; className?: string; delay?: number; variant?: "rise" | "slide" | "scale" }) {
  const reducedMotion = useReducedMotion();
  const initial = variant === "slide" ? { opacity: 0, x: -34 } : variant === "scale" ? { opacity: 0, y: 20, scale: 0.975 } : { opacity: 0, y: 34 };
  const visible = variant === "slide" ? { opacity: 1, x: 0 } : variant === "scale" ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : initial}
      whileInView={reducedMotion ? undefined : visible}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.72, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
