"use client";
import { useState } from "react";
import { site } from "@/lib/data";
const field = "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 placeholder:text-white/40";
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Portfolio inquiry from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form onSubmit={submit} className="space-y-4">
      <label className="block text-sm">Name<input name="name" required autoComplete="name" className={field} /></label>
      <label className="block text-sm">Email<input name="email" type="email" required autoComplete="email" className={field} /></label>
      <label className="block text-sm">Message<textarea name="message" required rows={5} className={field} /></label>
      <button className="rounded-full bg-lime px-7 py-3 font-semibold text-ink transition hover:bg-white">Send message</button>
      <p role="status" className="text-sm text-lime">{sent ? "Your email app should open with the message ready to send." : ""}</p>
    </form>
  );
}
