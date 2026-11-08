"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const links = [["About", "/#about"], ["Services", "/#services"], ["Work", "/#work"], ["Certification", "/#certification"], ["Contact", "/#contact"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/60 backdrop-blur-xl">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <Link href="/" className="font-semibold">Bisrat <span className="text-lime">Mengistu</span></Link>
        <ul className="hidden gap-8 text-sm text-white/70 md:flex">
          {links.map(([l, h]) => <li key={l}><Link className="transition hover:text-lime" href={h}>{l}</Link></li>)}
        </ul>
        <button aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)} className="rounded-full border border-white/20 px-4 py-1.5 text-sm md:hidden">{open ? "Close" : "Menu"}</button>
      </nav>
      <AnimatePresence>
        {open && <motion.ul id="menu" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-ink px-5 md:hidden">
          {links.map(([l, h]) => <li key={l}><Link onClick={() => setOpen(false)} href={h} className="block border-t border-white/10 py-4 text-2xl font-semibold">{l}</Link></li>)}
        </motion.ul>}
      </AnimatePresence>
    </header>
  );
}
