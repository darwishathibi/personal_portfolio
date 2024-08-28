import ImagesCard from "@/app/photography/[gearID]/ImagesCard";
import Footer from "@/components/Footer";

export default function GearId({params} : any){
    return (
        <main className="bg-slate-950 scrollbar-hide tracking-widest">
            <ImagesCard params={params}/>
            <Footer />
        </main>
    )
}   