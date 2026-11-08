export default function Timeline({ items }: { items: { label: string; value: string }[] }) {
  return (
    <ol className="relative ml-2 border-l border-white/30">
      {items.map((i) => (
        <li key={i.label} className="relative pb-8 pl-8 last:pb-0">
          <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-lime" />
          <p className="text-lg font-semibold">{i.label}</p><p className="text-sm text-lime">{i.value}</p>
        </li>
      ))}
    </ol>
  );
}
