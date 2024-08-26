"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

const word1 = [
  {
    text: "a",
  },
  {
    text: "Student.",
    className: "text-indigo-500",
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
    className: "text-indigo-500",
  },
];

const word3 = [
  {
    text: "a",
  },
  {
    text: "Photographer.",
    className: "text-indigo-500",
  },
];

const word4 = [
  {
    text: "a",
  },
  {
    text: "Cyber Security",
    className: "text-indigo-500",
  },
  {
    text: "Enthusiastic.",
  },
];

export default function Intro() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row justify-evenly items-center px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-24 min-h-screen"
    >
      <motion.section
        id="avatar"
        variants={fadeInUpVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2"
      >
        <div className="relative w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] mx-auto">
          <Image
            src="/image/cvbox.org.notion-avatar-1724001646264.png"
            fill
            style={{ objectFit: "contain" }}
            alt="Picture of the author"
          />
        </div>
      </motion.section>
      <motion.section
        id="introText"
        variants={fadeInUpVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="order-2 md:order-1"
      >
        <div>
          <motion.h1
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl mb-6 md:mb-8 lg:mb-10 text-center md:text-left w-full"
          >
            Hi, I'm <span className="text-indigo-500 font-bold">Darwis</span>.
          </motion.h1>
          <motion.div
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-4xl flex flex-col"
          >
            <TypewriterEffect words={word1} />
            <TypewriterEffect words={word2} />
            <TypewriterEffect words={word3} />
            <TypewriterEffect words={word4} />
          </motion.div>
        </div>
      </motion.section>
    </motion.section>
  );
}
