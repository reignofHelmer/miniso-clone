import Image from "next/image";
import { Stats } from "@/components/sections/Stats"
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="">
      <Stats />
      <Footer />
    </div>
  );
}
