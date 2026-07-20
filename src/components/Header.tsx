"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { navLinks } from "@/lib/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/bmw-mark.png"
            alt="BMW Fin-Invest"
            width={87}
            height={40}
            className="h-11 w-auto shrink-0"
            priority
          />
          <span className="truncate font-display text-base font-bold tracking-tight text-navy">
            BMW Fin-Invest
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap text-sm font-medium ${
                  active ? "text-navy" : "text-grey hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-hairline text-navy lg:hidden"
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {menuOpen && (
        <div id="mobile-nav" className="border-t border-hairline bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                    active ? "bg-teal-dim text-navy" : "text-text"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </Container>
        </div>
      )}
    </header>
  );
}
