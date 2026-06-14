import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { sortimentCategories } from "@/content/sortiment";

export const metadata: Metadata = {
  title: "Sortiment",
  description:
    "Surdegsbröd, croissanter, bakverk, smörgåsar, kaffe och fredagens pizzakväll — ekologiskt och handgjort.",
};

export default function SortimentPage() {
  return (
    <>
      {/* Page hero */}
      <div
        className="pt-32 pb-16"
        style={{ backgroundColor: "var(--dark)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <span className="eyebrow mb-5" style={{ color: "var(--dark-secondary)" }}>
            Sortiment
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
            Ur stenugnen,{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              varje dag
            </em>
          </h1>
          <p
            className="mt-6 max-w-xl text-base leading-relaxed"
            style={{ color: "var(--dark-secondary)", fontFamily: "var(--font-body)" }}
          >
            Allt vi bakar görs med 100% ekologiska råvaror. Från
            surdegsbrödet som jäser natten igenom till fredagskvällens pizza
            — hantverket är detsamma.
          </p>
        </div>
      </div>

      {/* Category listing — alternating image/text rows */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col gap-0">
          {sortimentCategories.map((cat, i) => {
            const isEven = i % 2 === 0;
            return (
              <RevealOnScroll key={cat.slug}>
                <Link
                  href={`/sortiment/${cat.slug}`}
                  className="group flex flex-col md:flex-row gap-0 border-b py-12 md:py-16 hover:opacity-90 transition-opacity"
                  style={{ borderColor: "var(--border)" }}
                >
                  {/* Image */}
                  <div
                    className={`w-full md:w-[44%] ${isEven ? "md:order-1" : "md:order-2"}`}
                  >
                    <div
                      className="aspect-[4/3] img-placeholder rounded-[var(--radius-lg)] overflow-hidden"
                      style={{ backgroundColor: "#DDD8CE" }}
                    >
                      <span>{cat.coverAlt}</span>
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={`flex-1 flex flex-col justify-center py-8 ${
                      isEven
                        ? "md:order-2 md:pl-14 lg:pl-20"
                        : "md:order-1 md:pr-14 lg:pr-20"
                    }`}
                  >
                    <p className="eyebrow mb-3">{cat.subtitle}</p>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                        color: "var(--text)",
                      }}
                    >
                      {cat.title}
                    </h2>
                    <p
                      className="mt-4 leading-relaxed"
                      style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
                    >
                      {cat.description}
                    </p>
                    {/* Item names */}
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {cat.items.slice(0, 4).map((item) => (
                        <li
                          key={item.name}
                          className="text-xs px-3 py-1.5 rounded-full border"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--text-secondary)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {item.name}
                        </li>
                      ))}
                    </ul>
                    <span
                      className="inline-flex items-center gap-1.5 mt-8 text-sm font-medium tracking-wide border-b pb-0.5 self-start"
                      style={{
                        color: "var(--accent)",
                        borderColor: "var(--accent)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Utforska {cat.title.toLowerCase()} →
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>
    </>
  );
}
