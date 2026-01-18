import { MinimalHero } from "@/components/sections/MinimalHero";
import { MinimalWork } from "@/components/sections/MinimalWork";
import { MinimalPlayground } from "@/components/sections/MinimalPlayground";
import { MinimalAbout } from "@/components/sections/MinimalAbout";
import { MinimalExperience } from "@/components/sections/MinimalExperience";
import { MinimalContact } from "@/components/sections/MinimalContact";

export default function MinimalPage() {
  return (
    <main className="w-full bg-white dark:bg-neutral-950 transition-colors duration-500
      selection:bg-black dark:selection:bg-white
      selection:text-white dark:selection:text-black">
      <MinimalHero />
      <MinimalWork />
      <MinimalPlayground />
      <MinimalExperience/>
      <MinimalAbout />
      <MinimalContact />
    </main>
  );
}
