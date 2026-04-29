import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SocialProofBar, TrustRibbon } from "@/components/SocialProofBar";
import { Services } from "@/components/Services";
import { Results } from "@/components/Results";
import { HowItWorks } from "@/components/HowItWorks";
import { WhoWeHelp } from "@/components/WhoWeHelp";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { DiscoveryForm } from "@/components/DiscoveryForm";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB, MobileStickyBar } from "@/components/WhatsAppFAB";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoreSoft Solutions — Hisar Ka Digital Partner | Websites in 7 Days" },
      {
        name: "description",
        content:
          "CoreSoft Solutions builds websites, runs social media, sets up Google My Business, and automates WhatsApp for Haryana's restaurants, salons, clinics & retail shops. Free audit in 30 minutes.",
      },
      { property: "og:title", content: "CoreSoft Solutions — Haryana Ka Digital Partner" },
      {
        property: "og:description",
        content:
          "Websites · Social Media · Digital Menus · Automations. 150+ Haryana businesses served. Free 5-minute audit, WhatsApp reply in 30 minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main style={{ background: "var(--off-white)" }}>
      <Nav />
      <Hero />
      <TrustRibbon />
      <SocialProofBar />
      <Services />
      <Results />
      <HowItWorks />
      <WhoWeHelp />
      <Testimonials />
      <Pricing />
      <DiscoveryForm />
      <Footer />
      <WhatsAppFAB />
      <MobileStickyBar />
    </main>
  );
}
