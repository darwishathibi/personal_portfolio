import ImagesCard from "@/app/photography/[gearID]/ImagesCard";
import Footer from "@/components/Footer";
import Return from "@/app/photography/[gearID]/Return";

export default function GearId({params} : any){
    return (
      <main className="bg-slate-950 scrollbar-hide tracking-widest">
        <div className="h-full">
          <ImagesCard params={params} />
        </div>
        <Return />
        <Footer />
      </main>
    );
}   