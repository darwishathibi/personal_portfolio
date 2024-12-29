"use client";
import { DivOrigami } from "../components/LogoOrigami";
import { VelocityScroll } from "@/components/ui/magic/scroll-based-velocity";
import { TextRevealByWord } from "@/components/ui/magic/text-reveal";

const sentences =
  "a network security student from IIUM, Malaysia. Passionate about photography, tech, and some CTF challenges. I enjoy developing software, solving complex problems, and continually expanding my skills and knowledge in the digital world.";

const specialWords = [
  "IIUM,",
  "Malaysia.",
  "photography,",
  "tech,",
  "CTF",
  "developing",
  "software,",
  "expanding",
  "my",
  "skills",
  "knowledge",
];

export default function About() {
  return (
    <div className="h-full w-full relative">
      <VelocityScroll
        text="Nothing to see. I just put here."
        default_velocity={4}
        rowsAmount={2}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm opacity-10 md:text-8xl md:leading-[5rem] pb-4"
      />
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center mt-10">
        <div>
          <DivOrigami />
        </div>
        <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-9xl lg:w-/12 mx-10 tracking-wider mb-10">
          <TextRevealByWord text={sentences} specialWords={specialWords} />
        </div>
      </div>
    </div>
  );
}
