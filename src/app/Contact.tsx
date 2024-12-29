"use client";
import DrawOutlineButton from "../components/ui/draw-outline-button";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const sentences = "can contact me...";
  const specialWords = ["contact"];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full h-full">
      <section className="my-52">
        <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl flex justify-center items-center mb-24">
          <div>
            <TextGenerateEffect words={sentences} specialWords={specialWords} />
          </div>
        </div>
        <motion.div
          ref={ref}
          className="h-full flex justify-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInFromBottom}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid min-h-[200px] place-content-center flex justify-center space-y-14">
            <motion.a
              href="https://www.instagram.com/darwishathibi/"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInFromBottom}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <DrawOutlineButton>instagram.</DrawOutlineButton>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/darwis-shathibi-965609204/"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInFromBottom}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <DrawOutlineButton>linkedin.</DrawOutlineButton>
            </motion.a>
            <motion.a
              href="https://github.com/darwishathibi"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInFromBottom}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <DrawOutlineButton>github.</DrawOutlineButton>
            </motion.a>
            <motion.a
              href="mailto:danishdarwis82@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInFromBottom}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <DrawOutlineButton>email.</DrawOutlineButton>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
