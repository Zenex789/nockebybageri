export default function QuoteBand() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--dark)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
        <span
          className="eyebrow mb-6"
          style={{ color: "var(--dark-secondary)" }}
        >
          Nockeby Bageri
        </span>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.3,
            color: "var(--dark-text)",
            maxWidth: "820px",
            margin: "0 auto",
          }}
        >
          Skorpan som knastrar. Smöret som smälter. Kaffet som dröjer.
        </p>
      </div>
    </section>
  );
}
