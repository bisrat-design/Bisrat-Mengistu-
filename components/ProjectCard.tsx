import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
export default function ProjectCard({ p, priority = false }: { p: Project; priority?: boolean }) {
  return (
    <Link href={`/work/${p.slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy">
        <Image src={p.images[0].src} alt={p.images[0].alt} width={1456} height={819} priority={priority} sizes="(min-width:768px) 50vw, 100vw"
          className="h-auto w-full transition duration-700 group-hover:scale-[1.03]" />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="text-xl font-semibold group-hover:text-lime">{p.title}</h3>
        <span className="text-sm text-white/50">{p.category}</span>
      </div>
    </Link>
  );
}
