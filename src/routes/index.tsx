import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyChoose } from "@/components/home/WhyChoose";
import { AmenitiesStrip } from "@/components/home/AmenitiesStrip";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABand } from "@/components/home/CTABand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yuva Group | Builders in Bangalore, Flats Near Electronic City" },
      {
        name: "description",
        content:
          "Yuva Group builds luxury and affordable 1, 2 and 3 BHK flats in Bangalore — Yuva Sunrise, Yuva Utsav and Yuva Sunshine near Electronic City and Chandapura.",
      },
      { property: "og:title", content: "Yuva Group | Building Your Vision Into Reality" },
      {
        property: "og:description",
        content:
          "Premium and affordable apartments in Bangalore, delivered with quality construction and on-time handover.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      <WhyChoose />
      <AmenitiesStrip />
      <Testimonials />
      <CTABand />
    </SiteLayout>
  );
}
