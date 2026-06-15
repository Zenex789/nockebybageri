import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const featured = [
  {
    slug: "brod",
    title: "Bröd",
    sub: "Stenugnsbakat",
    desc: "Surdegsbröd på råg och vete, levain och focaccia — bakade i vår vedeldade stenugn varje morgon.",
    img: "/images/brod.jpg",
    imgAlt: "Surdegsbröd",
  },
  {
    slug: "bakverk",
    title: "Bakverk",
    sub: "Hantverk i varje lager",
    desc: "Croissanter, kardemummabullar, semlor och mazariner — gjorda på ekologiskt smör och vår egna deg.",
    img: "/images/bakverk.jpg",
    imgAlt: "Bakverk",
  },
  {
    slug: "pizzakvall",
    title: "Pizzakväll",
    sub: "Varje fredag",
    desc: "Varje fredag eldar vi upp stenugnen igen och bakar pizza på surdegsdeg. Nytt recept varje vecka.",
    img: "/images/pizza.jpg",
    imgAlt: "Pizzakväll",
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b" style={{ borderColor: "var(--border)" }}>
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
              className="text-[0.7rem] font-medium tracking-[0.14em] uppercase border-b pb-0.5 transition-opacity hover:opacity-60 shrink-0"
              style={{
                color: "var(--text-secondary)",
                borderColor: "var(--border)",
                fontFamily: "var(--font-body)",
              }}
            >
              Se allt sortiment →
            </Link>
          </div>
        </RevealOnScroll>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Large card — col 1–7 */}
          <RevealOnScroll className="md:col-span-7">
            <Link
              href={`/sortiment/${featured[0].slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: "var(--radius-sm)" }}>
                <Image
                  src={featured[0].img}
                  alt={featured[0].imgAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="pt-5">
                <span className="eyebrow mb-2">{featured[0].sub}</span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
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
                <span
                  className="mt-4 inline-block text-[0.7rem] tracking-[0.14em] uppercase border-b pb-0.5 transition-opacity group-hover:opacity-60"
                  style={{ color: "var(--accent)", borderColor: "var(--accent)", fontFamily: "var(--font-body)" }}
                >
                  Utforska →
                </span>
              </div>
            </Link>
          </RevealOnScroll>

          {/* Right column — cards 2 + 3 */}
          <div className="md:col-span-5 flex flex-col gap-8">
            {featured.slice(1).map((item, i) => (
              <RevealOnScroll key={item.slug} delay={(i + 1) * 80}>
                <Link
                  href={`/sortiment/${item.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/9] overflow-hidden" style={{ borderRadius: "var(--radius-sm)" }}>
                    <Image
                      src={item.img}
                      alt={item.imgAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="pt-4">
                    <span className="eyebrow mb-1.5">{item.sub}</span>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                        color: "var(--text)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-1.5 text-sm leading-relaxed"
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
