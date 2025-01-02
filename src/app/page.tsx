"use client";

import FollowCursor from "../components/ui/followCurser";
import Footer from "../components/Footer";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Photography from "./Photography";
import Skills from "./Skills";
import Contact from "./Contact";
import React, { useEffect } from "react";
import Lenis from "lenis";

import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-deep-jungle-green bg-[radial-gradient(circle,#A4C24F_1px,transparent_1px)] [background-size:150px_150px]">
      <main className="text-white font-sf tracking-widest flex min-h-screen flex-col items-center justify-between">
        <Intro />
        <About />
        <Projects />
        <Photography />
        <Skills />
        <Contact />
        <Footer />
      </main>
      <FollowCursor />
    </main>
  );
}
