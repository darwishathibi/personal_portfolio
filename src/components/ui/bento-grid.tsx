"use client";
import { cn } from "../lib/utils";
import { Image } from "@unpic/react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imageURI,
  frameworks,
  github,
  demo,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imageURI?: string;
  frameworks?: string[];
  github?: string;
  demo?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 border-white/[0.2] bg-zinc-800 border border-white/40 flex flex-col space-y-4",
        className
      )}
    >
      <div className="w-full md:h-80 rounded-2xl overflow-hidden">
        <img
          src={imageURI || ""}
          alt="project-image"
          // layout="responsive"
          width={700}
          height={475}
          className="rounded-2xl h-full w-full object-cover border border-white/20"
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-bold mb-2 mt-2 text-xl sm:text-2xl md:text-3xl lg:text-[2rem]">
          {title}
        </div>
        <div className="text-xs sm:text-sm md:text-base font-thin">
          {description}
        </div>
        <div className="flex flex-wrap items-center mt-5">
          {frameworks?.map((framework, i) => (
            <div
              key={i}
              className="text-xs md:text-sm bg-stone-700 text-stone-100 px-3 py-1 rounded-full flex items-center mr-1 my-1"
            >
              {framework}
            </div>
          ))}
        </div>
        <div className="inset-x-0 bottom-0 flex  space-x-2 mt-7 text-xs md:text-sm">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="space-x-2 bg-indigo-500 text-white px-2 py-1 rounded-full"
          >
            See on Github
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="space-x-2 bg-indigo-500 text-white px-2 py-1 rounded-full"
            >
              View Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
