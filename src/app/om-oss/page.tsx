import type { Metadata } from "next";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Läs om Nockeby Bageris historia, vår filosofi och stenugnen som är hjärtat i allt vi gör.",
};

export default function OmOssPage() {
  return (
    <>
      {/* Page hero */}
      <div
        className="pt-40 pb-20 border-b"
        style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <span className="eyebrow mb-6">Om oss</span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "var(--text)",
            }}
          >
            Bröd tar tid.{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Det är poängen.
            </em>
          </h1>
        </div>
      </div>

      {/* Main story */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Text — wide column */}
          <RevealOnScroll className="lg:col-span-7">
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--text)",
              }}
            >
              Vår historia
            </h2>
            <div
              className="flex flex-col gap-5 leading-relaxed"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
            >
              <p>
                Nockeby Bageri öppnade i Nockeby torg i Bromma med en enkel ambition: att
                baka riktigt bröd och servera riktigt kaffe till grannskapet. Inget mer,
                inget mindre.
              </p>
              <p>
                Vi bakar allt från grunden med 100% ekologiska råvaror. Degen blandas
                kvällen innan, jäser långsamt under natten och bakas tidigt på morgonen
                — direkt på stenen i vår stenugn. Det är processen som ger brödet
                karaktär: den knastrande skorpan, den öppna smulan och smaken som
                håller sig under hela dagen.
              </p>
              <p>
                Konditoriet jobbar med samma princip: smör av god kvalitet, ägg från
                frilands­höns och i möjligaste mån säsongens råvaror. Semlan är färsk
                i säsong, jordgubbarna är svenska på sommaren och äppeltårtan kommer
                med hösten.
              </p>
              <p>
                På fredagskvällar förvandlas bageriet. Stenugnen eldar upp igen och vi
                bakar pizza på samma surdegsdeg som brödet — en naturlig förlängning av
                baket och en rolig avslutning på veckan. Veckans pizza annonseras alltid
                på Instagram.
              </p>
            </div>
          </RevealOnScroll>

          {/* Sidebar detail */}
          <RevealOnScroll delay={120} className="lg:col-span-5">
            <div
              className="aspect-[3/4] img-placeholder rounded-[var(--radius-lg)] mb-8"
              style={{ backgroundColor: "#DDD8CE" }}
            >
              <span>TODO: foto av bageriet inifrån med stenugnen synlig</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stone oven feature */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "var(--dark)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div
              className="aspect-[4/3] img-placeholder rounded-[var(--radius-lg)]"
              style={{ backgroundColor: "#2A3D4E" }}
            >
              <span style={{ color: "var(--dark-secondary)" }}>
                TODO: närbild av stenugnen under baket
              </span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <span className="eyebrow mb-5" style={{ color: "var(--dark-secondary)" }}>
              Stenugnen
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--dark-text)",
              }}
            >
              Hjärtat i bageriet
            </h2>
            <p
              className="mt-5 leading-relaxed"
              style={{ color: "var(--dark-secondary)", fontFamily: "var(--font-body)" }}
            >
              Stenugnen är inte enbart ett redskap — den är anledningen till varför
              brödet smakar som det gör. Stenytan lagrar värme jämnt och ger den
              intensiva understimulerande heat som ger en krispig, välkaramellierad
              botten. Ångan i ugnen de första minuterna skapar skorpan.
            </p>
            <p
              className="mt-4 leading-relaxed"
              style={{ color: "var(--dark-secondary)", fontFamily: "var(--font-body)" }}
            >
              Kunder som besöker bageriet kan se rakt in i köket och följa baket
              — vi ser det som en del av upplevelsen.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--surface)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <span className="eyebrow mb-6">Vår filosofi</span>
            <h2
              className="mb-14"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--text)",
              }}
            >
              100% ekologiskt, alltid
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              {
                label: "Ekologiska råvaror",
                text: "Allt mjöl, smör, ägg och socker är ekologiskt certifierat. Inga undantag.",
              },
              {
                label: "Lång jäsning",
                text: "Vi arbetar aldrig med snabbdeg. Jäsning tar 12–18 timmar och det märks i smaken.",
              },
              {
                label: "Säsongens rytm",
                text: "Sortimentet anpassas efter säsong. Semlor, jordgubbar, äpplen — i rätt tid.",
              },
            ].map((item, i) => (
              <RevealOnScroll key={item.label} delay={i * 80}>
                <div
                  className="border-t pt-6"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="eyebrow mb-3">
                    {item.label}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
                  >
                    {item.text}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
