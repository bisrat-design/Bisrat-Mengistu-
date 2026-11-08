"use client";
import { motion, useReducedMotion } from "framer-motion";
export default function Hero() {
  const r = useReducedMotion();
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-16 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xl font-semibold md:text-3xl">Graphic <span className="text-white/40">Design</span></p>
        <h1 aria-label="Portfolio" className="flex items-center bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-[clamp(3.2rem,16.5vw,15rem)] font-extrabold leading-[1.05] tracking-tight text-transparent">
          <span aria-hidden>Portf</span>
          <motion.span aria-hidden className="mx-[0.02em] inline-block h-[0.7em] w-[0.7em] rounded-full bg-white"
            initial={r ? false : { scale: 0 }} animate={{ scale: 1, boxShadow: ["0 0 40px 8px rgba(255,255,255,.35)", "0 0 110px 30px rgba(255,255,255,.6)", "0 0 40px 8px rgba(255,255,255,.35)"] }}
            transition={{ scale: { duration: 1, ease: [0.22, 1, 0.36, 1] }, boxShadow: { duration: 4, repeat: Infinity } }} />
          <span aria-hidden>lio</span>
        </h1>
        <p className="mt-4 text-right text-2xl font-semibold text-lime md:text-4xl">Bisrat Mengistu</p>
      </div>
    </section>
  );
}
