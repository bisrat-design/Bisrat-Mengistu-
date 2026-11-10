import Image from "next/image";
import SkillCard from "@/components/SkillCard";
import { Reveal } from "@/lib/motion";
import { about, tools } from "@/lib/data";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      {/* The single vertical line on the left is the grid's left border */}
      <div className="grid items-start gap-14 border-l border-white/40 pl-5 md:grid-cols-[1.15fr_1fr] md:gap-10 md:pl-12 lg:pl-16">
        <Reveal>
          <h2 id="about-title" className="text-4xl font-bold leading-tight md:text-6xl">
            <span className="block">Hello, I’m</span>
            <span className="block text-lime">Bisrat —</span>
          </h2>
          <p className="mt-10 max-w-md text-3xl font-light leading-[1.15] md:text-5xl">
            I design things people actually <strong className="font-bold">want to look at.</strong>
          </p>
          <p className="mt-10 max-w-[48ch] leading-relaxed text-white/80 md:text-lg">{about.body}</p>
        </Reveal>

        <Reveal className="flex flex-col items-center md:items-end">
          <Image src="/images/portrait.jpg" alt="Portrait of Bisrat Mengistu inside a lime circle" width={1000} height={1000}
            sizes="(min-width:768px) 40vw, 90vw" className="h-auto w-full max-w-[520px] rounded-full" />
          {/* Software skills: directly below the photo */}
          <div className="mt-8 w-full max-w-[300px] md:mr-[6%]">
            <h3 className="rounded-full bg-gradient-to-r from-lime to-white px-6 py-2 text-lg font-semibold text-ink">Software Skills</h3>
            <ul className="mt-2 flex items-center justify-around rounded-2xl border border-white/80 px-4 py-3" aria-label="Software I use">
              {tools.map((t) => <SkillCard key={t} name={t} />)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
