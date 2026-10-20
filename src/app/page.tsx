// Homepage. Each section lives in src/components/sections/<name>.tsx.
import { Footer } from "@/components/sections/footer";
import { GlobalStores } from "@/components/sections/global-stores";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Lines } from "@/components/sections/lines";
import { Shop } from "@/components/sections/shop";
import { Stats } from "@/components/sections/stats";
import { Stories } from "@/components/sections/stories";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Lines />
        <Shop />
        <GlobalStores />
        <Stories />
      </main>
      <Footer />
    </>
  );
}
