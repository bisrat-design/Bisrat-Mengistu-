type P = { className?: string };
export function MailIcon({ className = "h-8 w-8" }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden focusable="false">
      <rect x="2" y="7" width="24" height="18" rx="3" fill="#fff" />
      <path d="M3.5 10.5 14 18l10.5-7.5" fill="none" stroke="#040523" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="26" cy="7" r="5" fill="#040523" /><circle cx="26" cy="7" r="3.4" fill="#fff" />
    </svg>
  );
}
export function InstagramIcon({ className = "h-8 w-8" }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden focusable="false" fill="none" stroke="#fff" strokeWidth="2.6">
      <rect x="2.5" y="2.5" width="27" height="27" rx="8" /><circle cx="16" cy="16" r="6.5" />
      <circle cx="23.5" cy="8.5" r="1.8" fill="#fff" stroke="none" />
    </svg>
  );
}
export function PhoneIcon({ className = "h-8 w-8" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
