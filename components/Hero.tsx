"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const corners = [["0%", "0%"], ["100%", "0%"], ["0%", "100%"], ["100%", "100%"]];
const glow = (a: number, b: number) =>
  `0 0 ${a}px ${a / 3}px rgba(255,255,255,.55), 0 0 ${b}px ${b / 3}px rgba(255,255,255,.28)`;

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="flex min-h-[100svh] items-center justify-center px-5 pb-10 pt-24 md:px-10">
      {/* Frame: everything inside scales with its width via container-query units (cqw) */}
      <div className="relative w-full max-w-[1100px] border border-dotted border-white/80 [container-type:inline-size]">
        {corners.map(([x, y]) => (
          <span key={x + y} aria-hidden style={{ left: x, top: y }}
            className="absolute h-[max(14px,3cqw)] w-[max(14px,3cqw)] -translate-x-1/2 -translate-y-1/2 bg-[#d9d9d9]" />
        ))}

        <div className="px-[7cqw] pb-[11cqw] pt-[8cqw]">
          <h1>
            <span className="sr-only">Graphic Design Portfolio by Bisrat Mengistu</span>
            <span aria-hidden className="block">
              <span className="block text-[max(0.95rem,3.2cqw)] font-semibold">
                <span className="text-white">Graphic</span> <span className="text-[#5f5f5f]">Design</span>
              </span>

              <span className="block whitespace-nowrap text-[19.5cqw] font-extrabold leading-[0.95] tracking-tight">
                <span className="bg-gradient-to-r from-white from-40% via-[#3d3d3d] via-[52%] to-[#d9d9d9] to-85% bg-clip-text text-transparent">Portf</span>
                {/* The "o": a glowing orb cradled by hands */}
                <span className="relative mx-[0.05em] inline-block h-[0.62em] w-[0.62em] align-[-0.03em]">
                  <motion.span style={{ x: "-50%" }} initial={reduce ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 0.5, ease }}
                    className="absolute left-1/2 top-[38%] z-0 block w-[143%]">
                    <Image src="/images/hands.png" alt="" width={412} height={369} priority className="h-auto w-full select-none" />
                  </motion.span>
                  <motion.span
                    initial={reduce ? false : { scale: 0, boxShadow: glow(0, 0) }}
                    animate={{ scale: 1, boxShadow: reduce ? glow(40, 100) : [glow(40, 100), glow(70, 160), glow(40, 100)] }}
                    transition={{ scale: { duration: 1, ease }, boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                    className="absolute inset-0 z-10 block rounded-full bg-white" />
                </span>
                <span className="text-[#d9d9d9]">lio</span>
              </span>

              <span className=" mt-[1.5cqw] block  text-right text-[max(0.9rem,3cqw)] font-bold text-lime">Bisrat Mengistu</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
