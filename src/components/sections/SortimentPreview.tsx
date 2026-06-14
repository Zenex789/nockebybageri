import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const featured = [
  {
    slug: "brod",
    title: "Bröd",
    sub: "Stenugnsbakat",
    desc: "Surdegsbröd på råg och vete, levain och focaccia — bakade i vår vedeldade stenugn varje morgon.",
    accent: "#7A9E8E",
    imgAlt: "TODO: foto av surdegsbröd ur stenugnen",
  },
  {
    slug: "bakverk",
    title: "Bakverk",
    sub: "Hantverk i varje lager",
    desc: "Croissanter, kardemummabullar, semlor och mazariner — gjorda på ekologiskt smör och vår egna deg.",
    accent: "#C8922A",
    imgAlt: "TODO: foto av croissanter och bullar på disken",
  },
  {
    slug: "pizzakvall",
    title: "Pizzakväll",
    sub: "Varje fredag",
    desc: "Varje fredag eldar vi upp stenugnen igen och bakar pizza på surdegsdeg. Nytt recept varje vecka.",
    accent: "#1C2B3A",
    imgAlt: "TODO: foto av pizza ur stenugnen på fredag",
  },
];

export default function SortimentPreview() {
  return (
    <section
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="eyebrow mb-3">Sortiment</span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                }}
              >
                Ur stenugnen,{" "}
                <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                  varje dag
                </em>
              </h2>
            </div>
            <Link
              href="/sortiment"
              className="text-sm font-medium tracking-wide border-b pb-0.5 transition-opacity hover:opacity-60 shrink-0"
              style={{
                color: "var(--accent)",
                borderColor: "var(--accent)",
                fontFamily: "var(--font-body)",
              }}
            >
              Se allt sortiment →
            </Link>
          </div>
        </RevealOnScroll>

        {/* Asymmetric mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Large card — col 1–7 */}
          <RevealOnScroll className="md:col-span-7">
            <Link
              href={`/sortiment/${featured[0].slug}`}
              className="group relative block overflow-hidden rounded-[var(--radius-lg)]"
              style={{ backgroundColor: "#DDD8CE" }}
            >
              <div
                className="aspect-[4/3] img-placeholder"
                style={{ backgroundColor: "#DDD8CE" }}
              >
                <span>{featured[0].imgAlt}</span>
              </div>
              {/* Glass card at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 glass-panel rounded-t-none border-x-0 border-b-0">
                <p className="eyebrow mb-1.5">{featured[0].sub}</p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                    fontWeight: 400,
                    color: "var(--text)",
                  }}
                >
                  {featured[0].title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
                >
                  {featured[0].desc}
                </p>
              </div>
            </Link>
          </RevealOnScroll>

          {/* Right column — cards 2 + 3 */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {featured.slice(1).map((item, i) => (
              <RevealOnScroll key={item.slug} delay={(i + 1) * 80}>
                <Link
                  href={`/sortiment/${item.slug}`}
                  className="group relative block overflow-hidden rounded-[var(--radius-lg)]"
                  style={{ backgroundColor: "#DDD8CE" }}
                >
                  <div
                    className="aspect-[16/9] img-placeholder"
                    style={{ backgroundColor: "#DDD8CE" }}
                  >
                    <span>{item.imgAlt}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 glass-panel rounded-t-none border-x-0 border-b-0">
                    <p className="eyebrow mb-1">{item.sub}</p>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                        fontWeight: 400,
                        color: "var(--text)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-1 text-sm"
                      style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
