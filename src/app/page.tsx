// Homepage. Each section lives in src/components/sections/<name>.tsx.
// When your section is ready, its PR adds one import and one line below,
// in the same order as miniso.com (top to bottom).
import { Header } from "@/components/sections/header";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { IpSpotlight } from "@/components/sections/ip-spotlight";
import { IpTabs } from "@/components/sections/ip-tabs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        {/* Stats (Tolu) goes here */}
        <IpSpotlight />
        <IpTabs />
        {/* Global stores (Tolu) goes here */}
        {/* Joy cards (Tolu) goes here */}
      </main>
      {/* Footer (Tolu) goes here */}
    </>
  );
}
