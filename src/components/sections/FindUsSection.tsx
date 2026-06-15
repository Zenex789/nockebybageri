import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function FindUsSection() {
  /* Coordinates from Google Maps URL: lat 59.328954, lng 17.9279561 */
  const mapSrc =
    "https://maps.google.com/maps?q=59.328954,17.9279561&output=embed&hl=sv&z=15";

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Text side */}
        <RevealOnScroll>
          <span className="eyebrow mb-6">Besök oss</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Hitta oss
          </h2>

          <div
            className="mt-8 space-y-6 text-sm"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
          >
            <div>
              <p className="eyebrow mb-1.5">Adress</p>
              <p style={{ color: "var(--text)" }}>
                Nockeby torg 9
                <br />
                168 70 Stockholm
              </p>
            </div>

            <div>
              <p className="eyebrow mb-1.5">Öppettider</p>
              <div className="flex flex-col gap-1" style={{ color: "var(--text)" }}>
                <span>Måndag–Fredag: 07:30–18:00</span>
                <span>Lördag–Söndag: 08:00–17:00</span>
              </div>
            </div>

            <div>
              <p className="eyebrow mb-1.5">Kontakt</p>
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+4682554​75"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "var(--accent)" }}
                >
                  08-25 54 75
                </a>
                <a
                  href="mailto:butik@nockebybageri.com"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "var(--accent)" }}
                >
                  butik@nockebybageri.com
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://maps.google.com/maps?q=59.328954,17.9279561"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 px-6 py-3 text-sm font-medium tracking-wide border transition-colors hover:opacity-70"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
              borderRadius: "var(--radius)",
              fontFamily: "var(--font-body)",
            }}
          >
            Vägbeskrivning →
          </a>

          <div
            className="mt-10 p-5 border"
            style={{
              borderColor: "var(--accent)",
              borderRadius: "var(--radius)",
            }}
          >
            <p className="eyebrow mb-2">Varje fredag</p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
            >
              Vi eldar stenugnen och bakar pizza på surdegsdeg. Nytt recept varje vecka.
            </p>
          </div>
        </RevealOnScroll>

        {/* Map side */}
        <RevealOnScroll delay={100}>
          <div
            className="overflow-hidden rounded-[var(--radius-lg)]"
            style={{
              border: "1px solid var(--border)",
              height: "420px",
            }}
          >
            <iframe
              title="Nockeby Bageri på kartan"
              src={mapSrc}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
