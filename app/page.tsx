import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import About from "@/components/About";
import CertificationsContact from "@/components/CertificationsContact";
import { Reveal } from "@/lib/motion";
import { services, projects } from "@/lib/data";
const h2 = "font-display text-6xl uppercase leading-none text-lilac md:text-8xl";
const sec = "mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32";
export default function Home() {
  return (<>
    <Hero />
    <About />
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
    <CertificationsContact />
  </>);
}
