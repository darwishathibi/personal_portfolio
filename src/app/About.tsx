"use client";
import { text } from "stream/consumers";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const sentences = 
  "a network security student from IIUM, Malaysia with a passion for photography and tech. I enjoy developing software (but never release it, lol) and tackling CTF challenges, constantly upgrading my skills and expanding my knowledge in the digital world. I thrive on solving complex problems and always eager to learn and grow.";

const highlightColor = "#5C8374";

// const test ="hello <>s;

const highlightWords = [
  "IIUM",
  "Malaysia",
  "photography",
  "tech",
  "developing software",
  "CTF",
  "knowledge",
  "eager to learn",
];

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="absolute text-white/10 text-[150px] sm:text-[250px] md:sm:text-[350px] lg:sm:text-[450px] overflow-hidden sm:-top-28 right-0 lg:-top-36 right-0 font-extrabold tracking-wide">
        <p>About</p>
      </div>
      <div className="text-md sm:text-2xl md:text-3xl lg:text-4xl space-y-4 w-5/12 tracking-wider text-white mb-10">
        <TextGenerateEffect words={sentences} />
      </div>
    </div>
  );
}
