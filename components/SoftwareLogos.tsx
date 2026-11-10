export function FigmaLogo() {
  return (
    <svg viewBox="0 0 38 57" className="h-12 w-auto" focusable="false">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
    </svg>
  );
}
export function AdobeLogo({ abbr, bg, fg }: { abbr: string; bg: string; fg: string }) {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-xl border text-2xl font-bold leading-none"
      style={{ background: bg, color: fg, borderColor: `${fg}55` }}>{abbr}</span>
  );
}
