import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import { projects } from "@/lib/data";
type Props = { params: { slug: string } };
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: Props): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return {};
  return { title: p.title, description: p.summary, openGraph: { title: p.title, description: p.summary, images: [p.images[0].src] } };
}
export default function ProjectPage({ params }: Props) {
  const i = projects.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const p = projects[i], next = projects[(i + 1) % projects.length];
  return (
    <article className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-10">
      <Link href="/#work" className="text-sm text-white/60 hover:text-lime">Back to all work</Link>
      <p className="mt-8 text-lime">{p.category}</p>
      <h1 className="mt-2 max-w-4xl text-4xl font-extrabold leading-tight md:text-7xl">{p.title}</h1>
      {p.tag && <p className="mt-3 text-white/50">{p.tag}</p>}
      <p className="mt-6 max-w-[60ch] text-lg text-white/70">{p.summary}</p>
      {p.meta.length > 0 && (p.timeline ? <div className="mt-10"><Timeline items={p.meta} /></div> :
        <dl className="mt-10 grid gap-6 sm:grid-cols-3">{p.meta.map((m) => <div key={m.label}><dt className="text-lime">{m.label}</dt><dd>{m.value}</dd></div>)}</dl>)}
      <div className="mt-12 space-y-6">
        {p.images.map((m, k) => <Image key={m.src} src={m.src} alt={m.alt} width={1456} height={819} priority={k === 0} sizes="(min-width:1280px) 1216px, 100vw" className="h-auto w-full rounded-2xl border border-white/10" />)}
      </div>
      {p.list && <section className="mt-12"><h2 className="text-2xl font-semibold">{p.list.title}</h2>
        <ul className="mt-4 flex flex-wrap gap-2">{p.list.items.map((s) => <li key={s} className="rounded-full border border-white/15 px-4 py-1.5 text-sm">{s}</li>)}</ul></section>}
      <Link href={`/work/${next.slug}`} className="mt-20 block border-t border-white/10 pt-8 text-white/60 hover:text-lime">
        Next project<span className="mt-1 block text-3xl font-bold text-white md:text-5xl">{next.title}</span></Link>
    </article>
  );
}
