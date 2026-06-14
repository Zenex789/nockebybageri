import type { Metadata } from "next";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "Hitta oss",
  description:
    "Nockeby Bageri hittar du på Nockeby torg 9 i Bromma, Stockholm. Öppet mån–fre 7:30–18 och lör–sön 8–17.",
};

export default function HittaOssPage() {
  /* Coordinates from Google Maps URL: lat 59.328954, lng 17.9279561 */
  const mapSrc =
    "https://maps.google.com/maps?q=59.328954,17.9279561&output=embed&hl=sv&z=15";

  return (
    <>
      {/* Page hero */}
      <div
        className="pt-32 pb-16"
        style={{ backgroundColor: "var(--dark)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <span className="eyebrow mb-5" style={{ color: "var(--dark-secondary)" }}>
            Besök oss
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "var(--dark-text)",
            }}
          >
            Hitta oss
          </h1>
        </div>
      </div>

      {/* Main content */}
      <section
        className="py-24 md:py-36"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Info */}
          <RevealOnScroll>
            <div className="flex flex-col gap-10">
              {/* Address */}
              <div>
                <p className="eyebrow mb-3">Adress</p>
                <address
                  className="not-italic text-base leading-relaxed"
                  style={{ color: "var(--text)", fontFamily: "var(--font-body)" }}
                >
                  Nockeby torg 9
                  <br />
                  168 70 Stockholm
                  <br />
                  Bromma
                </address>
              </div>

              {/* Hours */}
              <div>
                <p className="eyebrow mb-3">Öppettider</p>
                <table
                  className="w-full max-w-xs text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <tbody>
                    {[
                      ["Måndag", "07:30 – 18:00"],
                      ["Tisdag", "07:30 – 18:00"],
                      ["Onsdag", "07:30 – 18:00"],
                      ["Torsdag", "07:30 – 18:00"],
                      ["Fredag", "07:30 – 18:00"],
                      ["Lördag", "08:00 – 17:00"],
                      ["Söndag", "08:00 – 17:00"],
                    ].map(([day, hours]) => (
                      <tr
                        key={day}
                        className="border-b"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <td
                          className="py-2.5 pr-6"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {day}
                        </td>
                        <td className="py-2.5 font-medium" style={{ color: "var(--text)" }}>
                          {hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Contact */}
              <div>
                <p className="eyebrow mb-3">Kontakt</p>
                <div
                  className="flex flex-col gap-1.5 text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
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

              <a
                href="https://maps.google.com/maps?q=59.328954,17.9279561"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start px-6 py-3 text-sm font-medium tracking-wide border transition-colors hover:opacity-70"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  borderRadius: "var(--radius)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Öppna i Google Maps →
              </a>
            </div>
          </RevealOnScroll>

          {/* Map */}
          <RevealOnScroll delay={100}>
            <div
              className="overflow-hidden rounded-[var(--radius-lg)]"
              style={{
                border: "1px solid var(--border)",
                height: "520px",
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

      {/* Pizzakväll callout */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--dark)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <RevealOnScroll>
            <p className="eyebrow mb-3" style={{ color: "var(--dark-secondary)" }}>
              Varje fredag
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--dark-text)",
              }}
            >
              Pizzakväll i stenugnen
            </h2>
            <p
              className="mt-4 max-w-lg leading-relaxed"
              style={{ color: "var(--dark-secondary)", fontFamily: "var(--font-body)" }}
            >
              Fredagskvällar bjuder vi på pizza bakad i samma stenugn som
              brödet. Veckans recept annonseras på Instagram.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <a
              href="https://www.instagram.com/nockeby_bageri/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors hover:opacity-80 shrink-0"
              style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
                borderRadius: "var(--radius)",
                fontFamily: "var(--font-body)",
              }}
            >
              Följ oss på Instagram →
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
