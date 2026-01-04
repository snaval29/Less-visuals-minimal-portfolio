import { MinimalHero } from "@/components/sections/MinimalHero";
import { MinimalWork } from "@/components/sections/MinimalWork";
import { MinimalPlayground } from "@/components/sections/MinimalPlayground";
import { MinimalAbout } from "@/components/sections/MinimalAbout";
import { MinimalContact } from "@/components/sections/MinimalContact";

export default function MinimalPage() {
  return (
    <main className="w-full bg-white selection:bg-black selection:text-white">
      {/* 1. Introduction & Hook */}
      <MinimalHero />
      
      {/* 2. The Main Case Studies (Khan, SwayZest, DormSpot) */}
      <MinimalWork />
      
      {/* 3. The Visual Experiments (Bento Grid) */}
      <MinimalPlayground />
      
      {/* 4. The Personal Story (Vocalist + AI Student) */}
      <MinimalAbout />
      
      {/* 5. Footer & Email */}
      <MinimalContact />
    </main>
  );
}