import Image from "next/image";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/lib/motion";
import { about, tools, services, projects, certification as c, site } from "@/lib/data";
const h2 = "font-display text-6xl uppercase leading-none text-lilac md:text-8xl";
const sec = "mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32";
export default function Home() {
  return (<>
    <Hero />
    <section id="about" className={`${sec} grid items-center gap-12 md:grid-cols-[1.2fr_1fr]`}>
      <Reveal>
        <p className="text-3xl font-bold md:text-5xl">{about.hello.replace("Bisrat", "")}<span className="text-lime">Bisrat —</span></p>
        <p className="mt-6 max-w-xl text-3xl font-light leading-tight md:text-5xl">I design things people actually <strong className="font-bold">want to look at.</strong></p>
        <p className="mt-8 max-w-[60ch] text-white/70">{about.body}</p>
        <h3 className="mt-12 text-sm text-white/50">Software skills</h3>
        <ul className="mt-3 flex flex-wrap gap-3">{tools.map((t) => <SkillCard key={t} name={t} />)}</ul>
      </Reveal>
      <Reveal className="mx-auto w-full max-w-md">
        <div className="rounded-full border border-lime/60 p-4 shadow-[0_0_80px_rgba(255,255,255,.12)]">
          <Image src="/images/portrait.jpg" alt="Portrait of Bisrat Mengistu" width={640} height={640} className="aspect-square w-full rounded-full object-cover" />
        </div>
      </Reveal>
    </section>
    <section id="services" className={sec}>
      <Reveal><h2 className={h2}>Services</h2></Reveal>
      <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
        {services.map((s) => <li key={s.title} className="bg-ink p-8 transition hover:bg-navy"><h3 className="text-2xl font-semibold">{s.title}</h3><p className="mt-3 max-w-[45ch] text-white/60">{s.text}</p></li>)}
      </ul>
    </section>
    <section id="work" className={sec}>
      <Reveal><h2 className={h2}>Selected work</h2></Reveal>
      <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {projects.map((p, i) => <ProjectCard key={p.slug} p={p} priority={i < 2} />)}
      </div>
    </section>
    <section id="certification" className={`${sec} grid gap-12 md:grid-cols-2`}>
      <div><h2 className={h2}>Certifications</h2></div>
      <Reveal>
        <article className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-2xl font-semibold">{c.title}</h3>
          <p className="mt-4 text-white/60">Presented to</p><p className="text-3xl font-semibold text-lime">{c.recipient}</p>
          <p className="mt-4 max-w-[55ch] text-white/70">{c.text}</p>
          <p className="mt-6 font-medium">{c.signer}, {c.signerRole}</p>
          <p className="text-sm text-white/50">Program year: {c.year} · Presented on: {c.date}</p>
        </article>
      </Reveal>
    </section>
    <section id="contact" className={`${sec} grid gap-12 md:grid-cols-2`}>
      <div>
        <h2 className={h2}>Get in touch</h2>
        <ul className="mt-10 space-y-4 text-lg">
          <li><a className="hover:text-lime" href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><a className="hover:text-lime" href={`https://instagram.com/${site.instagram}`} rel="noopener noreferrer" target="_blank">@{site.instagram}</a></li>
          <li><a className="hover:text-lime" href={`tel:${site.phone}`}>{site.phone}</a></li>
        </ul>
      </div>
      <ContactForm />
    </section>
  </>);
}
