"use client";
import { HoverEffect } from "../components/ui/card-hover-effect";

export default function Skills() {
  return (
    <div className="w-full h-full">
      <div className="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl flex justify-center items-center">
        <p className="mb-20 mt-48">
          &quot;skills <span className="text-indigo-500">that i have</span>
          ...&quot;
        </p>
      </div>
      <div className="h-full">
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
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
];

