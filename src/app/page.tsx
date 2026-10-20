// Homepage. Each section lives in src/components/sections/<name>.tsx.
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Lines } from "@/components/sections/lines";
import { Shop } from "@/components/sections/shop";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Lines />
        <Shop />
      </main>
    </>
  );
}
