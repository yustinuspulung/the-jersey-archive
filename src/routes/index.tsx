import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/locker/SiteHeader";
import { Hero } from "@/components/locker/Hero";
import { Trust } from "@/components/locker/Trust";
import { Collections } from "@/components/locker/Collections";
import { BestSellers } from "@/components/locker/BestSellers";
import { WhyUs } from "@/components/locker/WhyUs";
import { VintageSpotlight } from "@/components/locker/VintageSpotlight";
import { Testimonials } from "@/components/locker/Testimonials";
import { Newsletter } from "@/components/locker/Newsletter";
import { SiteFooter } from "@/components/locker/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Locker Room — Original Football Jerseys" },
      {
        name: "description",
        content:
          "Premium online store for 100% original football jerseys. From the latest season releases to rare vintage and collector editions.",
      },
      { property: "og:title", content: "The Locker Room — Original Football Jerseys" },
      {
        property: "og:description",
        content:
          "Curated collection of authentic football jerseys — new season releases, vintage classics, and limited editions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <Trust />
        <Collections />
        <BestSellers />
        <WhyUs />
        <VintageSpotlight />
        <Testimonials />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
}
