import Hero from "@/components/sections/Hero";
import StoryTeaser from "@/components/sections/StoryTeaser";
import SortimentPreview from "@/components/sections/SortimentPreview";
import Reviews from "@/components/sections/Reviews";
import QuoteBand from "@/components/sections/QuoteBand";
import FindUsSection from "@/components/sections/FindUsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StoryTeaser />
      <SortimentPreview />
      <Reviews />
      <QuoteBand />
      <FindUsSection />
    </>
  );
}
