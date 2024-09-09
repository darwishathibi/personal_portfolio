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
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-evenly h-screen relative">
      {/* <div className="absolute text-white/10 text-[150px] sm:text-[250px] md:sm:text-[350px] lg:sm:text-[450px] overflow-hidden sm:-top-28 right-0 lg:-top-36 right-0 font-extrabold tracking-wide">
        <p>About</p>
      </div> */}
      <div>
        <DivOrigami />
      </div>
      <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl p-0 w-5/12 tracking-wider mb-10">
        <TextGenerateEffect words={sentences} specialWords={specialWords} />
      </div>
    </div>
  );
}
