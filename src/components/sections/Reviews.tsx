import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface PlacesResult {
  rating?: number;
  user_ratings_total?: number;
  reviews?: Review[];
}

async function fetchReviews(): Promise<PlacesResult | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&language=sv&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.result ?? null;
  } catch {
    return null;
  }
}

function Stars({ rating }: { rating: number }) {
  return (
    <span aria-label={`${rating} av 5 stjärnor`} className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < Math.round(rating) ? "var(--accent-warm)" : "none"}
          stroke="var(--accent-warm)"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

export default async function Reviews() {
  const data = await fetchReviews();

  if (!data || !data.reviews || data.reviews.length === 0) {
    /* Gracefully hidden when no API key or no reviews */
    return null;
  }

  const reviews = data.reviews.slice(0, 4);

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 mb-16">
            <div>
              <span className="eyebrow mb-3">Vad gästerna säger</span>
              <div className="flex items-end gap-4">
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: "var(--accent)",
                  }}
                >
                  {data.rating?.toFixed(1)}
                </h2>
                <div>
                  <Stars rating={data.rating ?? 0} />
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
                  >
                    Baserat på {data.user_ratings_total} Google-recensioner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <RevealOnScroll key={i} delay={i * 60}>
              <div
                className="flex flex-col gap-3 p-6 rounded-[var(--radius-lg)] h-full"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <Stars rating={review.rating} />
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--text)", fontFamily: "var(--font-body)" }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-2.5 mt-2 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                  {review.profile_photo_url ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium"
                      style={{
                        backgroundColor: "var(--accent)",
                        color: "#fff",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {review.author_name[0]}
                    </div>
                  )}
                  <div>
                    <p
                      className="text-xs font-medium"
                      style={{ color: "var(--text)", fontFamily: "var(--font-body)" }}
                    >
                      {review.author_name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
                    >
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Required Google attribution */}
        <p
          className="mt-8 text-xs"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
        >
          Recensioner via Google Maps.{" "}
          <a
            href="https://maps.google.com/maps?q=59.328954,17.9279561"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-70"
            style={{ color: "var(--accent)" }}
          >
            Se alla recensioner på Google
          </a>
        </p>
      </div>
    </section>
  );
}
