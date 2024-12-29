"use client";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

export default function Skills() {
  const sentences = "skills that i have...";
  const specialWords = ["skills", "have..."];
  return (
    <div className="w-full h-full">
      <section className="flex flex-col justify-center items-center">
        <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl">
          <div className="mb-20 mt-48">
            <TextGenerateEffect words={sentences} specialWords={specialWords} />
          </div>
        </div>
        <div className="h-full">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </section>
    </div>
  );
}

export const projects = [
  {
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org",
  },
  {
    title: "Next.js",
    link: "https://nextjs.org",
  },
  {
    title: "React Native",
    link: "https://reactnative.dev",
  },
  {
    title: "TailwindCSS",
    link: "https://tailwindcss.com",
  },
  {
    title: "GitHub",
    link: "https://github.com",
  },
  {
    title: "Firebase",
    link: "https://firebase.google.com",
  },
  {
    title: "Expo",
    link: "https://expo.dev",
  },
  {
    title: "Lightroom",
    link: "https://www.adobe.com/products/photoshop-lightroom.html",
  },
  {
    title: "Framer Motion",
    link: "https://www.framer.com/motion/",
  },
  {
    title: "Boostrap",
    link: "https://getbootstrap.com",
  },
  {
    title: "Sanity.io",
    link: "https://getbootstrap.com",
  },
];

