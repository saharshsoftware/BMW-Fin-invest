import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { legalLinks, quickLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-navy text-white/80">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/bmw-mark.png"
                alt="BMW Fin-Invest"
                width={87}
                height={40}
                className="h-9 w-auto shrink-0 rounded-md bg-white px-2.5 py-2"
              />
              <p className="font-display text-base font-bold text-white">
                {site.legalName}
              </p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Registered Office: {site.registeredOffice}
            </p>
            <p className="mt-3 text-sm text-white/70">GSTIN: {site.gstin}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              {site.rbiRegistration}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <span className="text-white/50">General Inquiries: </span>
                <a href={`mailto:${site.supportEmail}`} className="text-white hover:text-teal">
                  {site.supportEmail}
                </a>
              </li>
              <li>
                <span className="text-white/50">Support: </span>
                <a href={`tel:${site.supportPhone}`} className="text-white hover:text-teal">
                  {site.supportPhone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
