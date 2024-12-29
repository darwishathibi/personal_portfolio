"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BoxReveal from "../components/ui/magic/box-reveal-text";
import BackgroundIconCloud from "@/components/ui/magic/icon-cloud";

const techStacks = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function Intro() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <BackgroundIconCloud
      iconSlugs={techStacks}
      opacity={0.5}
      className="fixed inset-0"
    >
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
        className="flex justify-evenly items-center flex-col md:flex-row px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-24 min-h-screen w-full"
      >
        <motion.section
          id="avatar"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 md:mb-0 order-1 md:order-2"
        >
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="relative w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
              <Image
                src="/image/cvbox.org.notion-avatar-1724001646264.png"
                fill
                style={{ objectFit: "contain" }}
                alt="Picture of the author"
              />
            </div>
          </BoxReveal>
        </motion.section>
        <section>
          <div className="px-8 md:px-0">
            <BoxRevealText />
          </div>
        </section>
      </motion.section>
    </BackgroundIconCloud>
  );
}

function BoxRevealText() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <div className="top-10 md:left-40 absolute text-xs text-gray-500">
        portfolio v-2
      </div>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-5xl md:text-7xl lg:text-8xl font-semibold">
          Hi&#44; I&acute;m <span className="text-indigo-500">Darwis.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem] md:text-2xl">
          A <span className="text-indigo-500">Computer Science</span> student.
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p className="text-base md:text-2xl">
            -&gt; Life motto: &#34;If it compiles,{" "}
            <span className="font-semibold text-indigo-500">ship it.</span> If
            it doesn&acute;t…{" "}
            <span className="font-semibold text-indigo-500">still ship it</span>{" "}
            and{" "}
            <span className="font-semibold text-indigo-500">
              hope for the best.
            </span>
            &#34; <br />
            -&gt; Thrives on debugging sessions that start with{" "}
            <span className="font-semibold text-indigo-500">
              &#34;What if I just…?&#34;
            </span>{" "}
            <br />
          </p>
        </div>
      </BoxReveal>
    </div>
  );
}
