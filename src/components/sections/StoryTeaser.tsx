import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function StoryTeaser() {
  return (
    <section
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Text — left */}
        <RevealOnScroll>
          <span className="eyebrow mb-6">Vår historia</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Ett bageri i hjärtat av{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Nockeby
            </em>
          </h2>
          <p
            className="mt-6 leading-relaxed"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
          >
            Nockeby Bageri föddes ur en enkel övertygelse: att riktigt bröd
            tar tid. Vi använder bara ekologiska råvaror och låter degen jäsa
            länge — resultatet är ett bröd med djup smak och en skorpa som
            knastrar när man skär det.
          </p>
          <p
            className="mt-4 leading-relaxed"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
          >
            Vår stenugn är hjärtat i bageriet. Brödet bakas direkt på stenen
            och får den värme och ånga som en elektrisk ugn aldrig kan
            reproducera. Kunder som passerar kan se rakt in i köket och följa
            baket — det är en del av upplevelsen.
          </p>
          <Link
            href="/om-oss"
            className="inline-flex items-center gap-2 mt-8 text-sm font-medium tracking-wide border-b pb-0.5 transition-opacity hover:opacity-60"
            style={{
              color: "var(--accent)",
              borderColor: "var(--accent)",
              fontFamily: "var(--font-body)",
            }}
          >
            Läs mer om oss →
          </Link>
        </RevealOnScroll>

        {/* Image — right */}
        <RevealOnScroll delay={120}>
          <div
            className="aspect-[4/5] img-placeholder overflow-hidden"
            style={{ backgroundColor: "#DDD8CE", borderRadius: "var(--radius-sm)" }}
          >
            <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
              TODO: foto av stenugnen inifrån bageriet
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
