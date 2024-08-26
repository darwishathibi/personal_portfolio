"use client";
import { HoverEffect } from "../components/ui/card-hover-effect";

export default function Skills() {
  return (
    <div className="w-full h-full">
      <div className="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl flex justify-center items-center">
        <p className="mb-20 mt-48">
          "skills <span className="text-indigo-500">that i have</span>..."
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
    link: "https://stripe.com",
  },
  {
    title: "CSS",
    link: "https://netflix.com",
  },
  {
    title: "JavaScript",
    link: "https://google.com",
  },
  {
    title: "TypeScript",
    link: "https://meta.com",
  },
  {
    title: "Next.js",
    link: "https://amazon.com",
  },
  {
    title: "React Native",
    link: "https://microsoft.com",
  },
  {
    title: "TailwindCSS",
    link: "https://github.com",
  },
  {
    title: "GitHub",
    link: "https://github.com",
  },
  {
    title: "Firebase",
    link: "https://github.com",
  },
  {
    title: "Expo",
    link: "https://github.com",
  },
  {
    title: "Lightroom",
    link: "https://github.com",
  },
  {
    title: "Framer Motion",
    link: "https://github.com",
  },
];
