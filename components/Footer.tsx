import { site } from "@/lib/data";
export default function Footer() {
  return <footer className="border-t border-white/10 px-5 py-10 text-sm text-white/50 md:px-10"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
    <p>© {new Date().getFullYear()} {site.name}</p><p>Graphic Design Portfolio</p></div></footer>;
}
