"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "../../lib/utils";

interface TextRevealByWordProps {
  text: string;
  specialWords?: string[];
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  specialWords = [],
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-full", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex max-w-5xl items-center bg-transparent "
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-white/20 md:p-8 md:text-3xl lg:p-1 lg:text-4xl xl:text-5xl lg:py-96 top-0"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            const isSpecial = specialWords.includes(word)
              ? "text-middle-green-yellow font-bold"
              : "text-white";
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]} classname={isSpecial}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  classname?: string;
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range, classname }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={classname}>
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
