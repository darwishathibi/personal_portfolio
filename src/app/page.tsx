import Header from "../components/Header";
import Footer from "../components/Footer";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Photography from "./Photography";
import Skills from "./Skills";
import Contact from "./Contact";

import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <TracingBeam className="h-full bg-zinc-900 bg-[radial-gradient(#27272a_1px,transparent_2px)] [background-size:16px_16px] overflow-hidden">
      <main className="text-white font-sf tracking-widest flex min-h-screen flex-col items-center justify-between">
        <Intro />
        <About />
        <Projects />
        <Photography />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </TracingBeam>
  );
}
