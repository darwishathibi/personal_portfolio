import Intro from "@/app/photography/Intro"
import Footer from "@/components/Footer";
import Gear from "@/app/photography/Gear"; 

export default function PhotographyHome() {
    return (
      <main className="font-sf tracking-widest flex min-h-screen flex-col items-center justify-between bg-slate-950 scrollbar-hide">
        <Intro />
        <Gear />
        <Footer />
      </main>
    );
}
