import Image from "next/image";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

const highlightColor = "#5C8374";
const checkboardColor = "border-solid border-2 border-sky-500";

const coloredWords = [
  { word: "Student", color: highlightColor },
  {
    word: "Software Developer",
    coloredPart: "Developer",
    color: highlightColor,
  },
  { word: "Photographer", color: highlightColor },
  { word: "Cyber Security", color: highlightColor },
];

const word1 =[
  {
    text: "a",
  },
  {
    text: "Student.",
    className: "text-green-idk",
  },
];

const word2 = [
  {
    text: "a",
  },
  {
    text: "Software",
  },
  {
    text: "Developer.",
    className: "text-green-idk",
  },
];

const word3 = [
  {
    text: "a",
  },
  {
    text: "Photographer.",
    className: "text-green-idk",
  },
];

const word4 = [
  {
    text: "a",
  },
  {
    text: "Cyber Security",
    className: "text-green-idk",
  },
  {
    text: "Enthusiastic.",
  },
];

export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row justify-evenly items-center px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-24 min-h-screen">
      <section
        id="avatar"
        className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2 "
      >
        <div className="relative w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] mx-auto">
          <Image
            src="/image/cvbox.org.notion-avatar-1724001646264.png"
            fill
            style={{ objectFit: "contain" }}
            alt="Picture of the author"
          />
        </div>
      </section>
      <section id="introText" className="order-2 md:order-1">
        <div className="">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl mb-6 md:mb-8 lg:mb-10 text-center md:text-left w-full">
            Hi, I'm <span className="text-green-idk font-bold">Darwis</span>.
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl flex flex-col">
            <TypewriterEffect words={word1} />
            <TypewriterEffect words={word2} />
            <TypewriterEffect words={word3} />
            <TypewriterEffect words={word4} />
          </div>
        </div>
      </section>
    </section>
  );
}
