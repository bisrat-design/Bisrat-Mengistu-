export default function SkillCard({ name }: { name: string }) {
  return <li className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold backdrop-blur transition hover:border-lime">{name}</li>;
}
