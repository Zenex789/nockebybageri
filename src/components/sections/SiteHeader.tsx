"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/sortiment", label: "Sortiment" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/hitta-oss", label: "Hitta oss" },
];

const social = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nockeby_bageri/",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" strokeWidth={0} />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/nockebybageri/",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "header-frosted" : "bg-transparent"
      }`}
    >
      {/* Announcement strip */}
      <div
        className="text-center py-1.5 text-[0.6rem] tracking-[0.18em] uppercase hidden md:block"
        style={{ backgroundColor: "var(--dark)", color: "var(--dark-secondary)" }}
      >
        Öppet Mån–Fre{" "}
        <span style={{ color: "var(--dark-text)" }}>07:30–18:00</span>
        {" · "}Lör–Sön{" "}
        <span style={{ color: "var(--dark-text)" }}>08:00–17:00</span>
        {" · "}
        <span style={{ color: "var(--accent-warm)" }}>Pizzakväll</span>
        {" "}varje fredag
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.jpg"
            alt="Nockeby Bageri"
            width={44}
            height={44}
            className="rounded-full object-contain"
            priority
          />
          <span
            className="hidden sm:block text-[0.68rem] font-medium tracking-[0.18em] uppercase"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--text)",
            }}
          >
            Nockeby Bageri
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.68rem] tracking-[0.15em] uppercase transition-opacity hover:opacity-60"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text)",
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Divider */}
          <span
            className="h-5 w-px"
            style={{ backgroundColor: "var(--border)" }}
            aria-hidden="true"
          />

          {/* Social icons */}
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-[var(--radius-sm)] transition-colors hover:bg-[var(--border)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {s.icon}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
        >
          <span
            className={`block h-px w-5 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ backgroundColor: "var(--text)" }}
          />
          <span
            className={`block h-px w-5 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            style={{ backgroundColor: "var(--text)" }}
          />
          <span
            className={`block h-px w-5 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ backgroundColor: "var(--text)" }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "var(--bg)",
            borderColor: "var(--border)",
          }}
        >
          <nav className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base transition-colors hover:opacity-70"
                style={{ fontFamily: "var(--font-body)", color: "var(--text)" }}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="border-t pt-5 flex gap-4"
              style={{ borderColor: "var(--border)" }}
            >
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border transition-colors hover:bg-[var(--border)]"
                  style={{
                    color: "var(--text-secondary)",
                    borderColor: "var(--border)",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
