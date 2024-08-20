import Header from "../components/Header";
import Footer from "../components/Footer";
import Intro from "./Intro";

export default function Home() {
  return (
    <main className="font-sf tracking-widest flex min-h-screen flex-col items-center justify-between bg-black_russian bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] scrollbar-hide">
      <Header />
      <Intro />
      <Footer />
    </main>
  );
}
