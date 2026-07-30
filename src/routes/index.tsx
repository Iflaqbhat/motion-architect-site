import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { AmenitiesStrip } from "@/components/home/AmenitiesStrip";
import { CTABand } from "@/components/home/CTABand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yuva Group | Premium Homes & Commercial Builders, Bangalore" },
      {
        name: "description",
        content:
          "Yuva Group builds premium residential and commercial developments across Bangalore — 20+ years, 25+ projects and 10,000+ happy families.",
      },
      { property: "og:title", content: "Yuva Group | Building Better Lives" },
      {
        property: "og:description",
        content: "Premium homes and commercial landmarks crafted with trust and quality in Bangalore.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <StatsBar />
      <AboutTeaser />
      <FeaturedProjects />
      <AmenitiesStrip />
      <CTABand />
    </SiteLayout>
  );
}
