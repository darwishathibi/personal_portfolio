"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { DivOrigami } from "../components/LogoOrigami";

const sentences =
  "a network security student from IIUM, Malaysia. Passionate about photography, tech, and CTF challenges. I enjoy developing software, solving complex problems, and continually expanding my skills and knowledge in the digital world.";

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

//html, css, javascript, next.js, react native, SiCyberdefenders, google, github

export default function About() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-evenly h-screen w-full relative">
      <div>
        <DivOrigami />
      </div>
      <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl lg:w-5/12 mx-10 tracking-wider mb-10">
        <TextGenerateEffect words={sentences} specialWords={specialWords} />
      </div>
    </div>
  );
}
