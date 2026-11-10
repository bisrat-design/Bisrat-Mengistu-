import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { MailIcon, InstagramIcon, PhoneIcon } from "@/components/ContactIcons";
import { Reveal } from "@/lib/motion";
import { certification as c, site } from "@/lib/data";

const title = "font-display uppercase leading-none text-lilac";
const row = "flex items-center gap-5 py-3 text-sm font-medium transition hover:text-lime md:text-base";

export default function CertificationsContact() {
  return (
    <section aria-label="Certifications and contact" className="bg-navy">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 md:px-10 lg:grid-cols-[1.5fr_1fr] lg:gap-20 lg:py-28">
        {/* Certifications */}
        <div id="certification" className="scroll-mt-24">
          <h2 className={`${title} text-center text-6xl md:text-8xl`}>Certifications</h2>
          <Reveal>
            <Image src="/images/certificate.jpg" width={1755} height={1241} sizes="(min-width:1024px) 55vw, 100vw"
              alt={`${c.title} presented to ${c.recipient}. ${c.text} Signed by ${c.signer}, ${c.signerRole}. Program year ${c.year}, presented on ${c.date}.`}
              className="mt-6 h-auto w-full" />
          </Reveal>
        </div>

        {/* Contact */}
        <div id="contact" className="scroll-mt-24 lg:pt-36">
          <h2 className={`${title} text-3xl md:text-4xl lg:pl-[3.75rem]`}>Get in touch</h2>
          <ul className="mt-8">
            <li><a className={row} href={`mailto:${site.email}`}><MailIcon className="h-9 w-9 shrink-0" />{site.email}</a></li>
            <li><a className={row} href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer"><InstagramIcon className="h-9 w-9 shrink-0" />@{site.instagram}</a></li>
            <li><a className={row} href={`tel:${site.phone}`}><PhoneIcon className="h-9 w-9 shrink-0" />{site.phone}</a></li>
          </ul>
          <div className="mt-12 max-w-md"><ContactForm /></div>
        </div>
      </div>
    </section>
  );
}
