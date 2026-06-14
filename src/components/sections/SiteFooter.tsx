import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer
      className="mt-auto"
      style={{ backgroundColor: "var(--dark)", color: "var(--dark-text)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-5">
            <Image
              src="/logo.jpg"
              alt="Nockeby Bageri"
              width={40}
              height={40}
              className="rounded-full object-contain brightness-90"
            />
            <span
              className="text-sm font-medium tracking-[0.12em] uppercase"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--dark-text)",
              }}
            >
              Nockeby Bageri
            </span>
          </Link>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--dark-secondary)", maxWidth: "28ch" }}
          >
            100% ekologiskt hantverksbageri och café i hjärtat av Nockeby.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p
            className="eyebrow mb-5"
            style={{ color: "var(--dark-secondary)" }}
          >
            Meny
          </p>
          <nav className="flex flex-col gap-3">
            {[
              { href: "/sortiment", label: "Sortiment" },
              { href: "/om-oss", label: "Om oss" },
              { href: "/hitta-oss", label: "Hitta oss" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: "var(--dark-text)", fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p
            className="eyebrow mb-5"
            style={{ color: "var(--dark-secondary)" }}
          >
            Kontakt
          </p>
          <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--dark-secondary)" }}>
            <span>Nockeby torg 9</span>
            <span>168 70 Stockholm</span>
            <a
              href="tel:+46825547​5"
              className="hover:text-[var(--dark-text)] transition-colors mt-1"
            >
              08-25 54 75
            </a>
            <a
              href="mailto:butik@nockebybageri.com"
              className="hover:text-[var(--dark-text)] transition-colors"
            >
              butik@nockebybageri.com
            </a>
            <div className="mt-3 flex flex-col gap-1">
              <span>Mån–Fre: 07:30–18:00</span>
              <span>Lör–Sön: 08:00–17:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "color-mix(in srgb, var(--dark-secondary) 25%, transparent)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-xs"
            style={{ color: "var(--dark-secondary)", fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Nockeby Bageri
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/nockeby_bageri/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:opacity-80 transition-opacity"
              style={{ color: "var(--dark-secondary)", fontFamily: "var(--font-body)" }}
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/nockebybageri/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:opacity-80 transition-opacity"
              style={{ color: "var(--dark-secondary)", fontFamily: "var(--font-body)" }}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
