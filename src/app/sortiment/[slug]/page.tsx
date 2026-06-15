import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { sortimentCategories, getCategoryBySlug } from "@/content/sortiment";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sortimentCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.description,
  };
}

export default async function SortimentDetailPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  return (
    <>
      {/* Page hero */}
      <div
        className="pt-32 pb-16"
        style={{ backgroundColor: "var(--dark)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <nav className="mb-6 flex items-center gap-2 text-xs" style={{ color: "var(--dark-secondary)", fontFamily: "var(--font-body)" }}>
            <Link href="/sortiment" className="hover:opacity-70 transition-opacity">
              Sortiment
            </Link>
            <span aria-hidden="true">›</span>
            <span>{cat.title}</span>
          </nav>
          <span className="eyebrow mb-5" style={{ color: "var(--dark-secondary)" }}>
            {cat.subtitle}
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
            {cat.title}
          </h1>
          <p
            className="mt-6 max-w-xl text-base leading-relaxed"
            style={{ color: "var(--dark-secondary)", fontFamily: "var(--font-body)" }}
          >
            {cat.description}
          </p>
        </div>
      </div>

      {/* Cover image */}
      <div
        className="aspect-[21/9] img-placeholder w-full"
        style={{ backgroundColor: "#DDD8CE" }}
        aria-hidden="true"
      >
        <span>{cat.coverAlt}</span>
      </div>

      {/* Product list + gallery */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Items */}
          <div className="lg:col-span-5">
            <RevealOnScroll>
              <span className="eyebrow mb-6">Urval</span>
              <h2
                className="mb-10"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                }}
              >
                Vad finns på disken
              </h2>
            </RevealOnScroll>
            <ul className="flex flex-col">
              {cat.items.map((item, i) => (
                <RevealOnScroll key={item.name} delay={i * 50}>
                  <li
                    className="flex items-start justify-between gap-4 py-5 border-b"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div>
                      <p
                        className="font-medium"
                        style={{ color: "var(--text)", fontFamily: "var(--font-body)", fontSize: "1rem" }}
                      >
                        {item.name}
                      </p>
                      {item.description && (
                        <p
                          className="mt-0.5 text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                    {item.price && (
                      <span
                        className="text-sm font-medium shrink-0"
                        style={{ color: "var(--accent-warm)", fontFamily: "var(--font-body)" }}
                      >
                        {item.price}
                      </span>
                    )}
                  </li>
                </RevealOnScroll>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <span className="eyebrow mb-6">Galleri</span>
            </RevealOnScroll>
            <div className="grid grid-cols-2 gap-4">
              {/* Hero gallery image */}
              <RevealOnScroll className="col-span-2">
                <div
                  className="aspect-[16/9] img-placeholder rounded-[var(--radius-lg)] overflow-hidden"
                  style={{ backgroundColor: "#DDD8CE" }}
                >
                  <span>{cat.galleryAlts[0] ?? cat.coverAlt}</span>
                </div>
              </RevealOnScroll>
              {/* Supporting images */}
              {cat.galleryAlts.slice(1).map((alt, i) => (
                <RevealOnScroll key={i} delay={(i + 1) * 60}>
                  <div
                    className="aspect-square img-placeholder rounded-[var(--radius-lg)] overflow-hidden"
                    style={{ backgroundColor: "#DDD8CE" }}
                  >
                    <span>{alt}</span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back nav */}
      <div
        className="pb-16"
        style={{ backgroundColor: "var(--surface)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Link
            href="/sortiment"
            className="text-sm font-medium tracking-wide border-b pb-0.5 transition-opacity hover:opacity-60"
            style={{
              color: "var(--accent)",
              borderColor: "var(--accent)",
              fontFamily: "var(--font-body)",
            }}
          >
            ← Tillbaka till sortiment
          </Link>
        </div>
      </div>
    </>
  );
}
