import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-[92svh] flex items-end"
      style={{ backgroundColor: "var(--dark)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/images/hero.jpg"
          alt="Nockeby Bageri"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Scrim */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, color-mix(in srgb, var(--dark) 88%, transparent) 0%, color-mix(in srgb, var(--dark) 40%, transparent) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="max-w-2xl">
          <span
            className="eyebrow mb-6"
            style={{ color: "var(--dark-secondary)" }}
          >
            Bromma, Stockholm
          </span>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 8vw, 6rem)",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--dark-text)",
            }}
          >
            Nockeby
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Bageri
            </em>
          </h1>

          <p
            className="mt-6 text-base"
            style={{
              color: "var(--dark-secondary)",
              fontFamily: "var(--font-body)",
              maxWidth: "42ch",
              lineHeight: 1.65,
            }}
          >
            100% ekologiskt hantverksbageri och café i Nockeby. Surdegsbröd
            bakade i stenugn, handgjorda bakverk och riktigt kaffe — varje dag
            sedan öppning.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/sortiment"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors"
              style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
                borderRadius: "var(--radius)",
                fontFamily: "var(--font-body)",
              }}
            >
              Vårt sortiment
            </Link>
            <Link
              href="/hitta-oss"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide border transition-colors hover:opacity-80"
              style={{
                borderColor: "color-mix(in srgb, var(--dark-text) 35%, transparent)",
                color: "var(--dark-text)",
                borderRadius: "var(--radius)",
                fontFamily: "var(--font-body)",
              }}
            >
              Hitta oss
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
