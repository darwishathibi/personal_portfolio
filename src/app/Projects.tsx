import React from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
// import projectsData from "../data/projects.json";
import getProjects from "@/components/server/projectsData";

const sentences = "things i made...";
const specialWords = ["made..."];

export default async function BentoGridDemo() {
  const projectsData = await getProjects();
   return (
     <div className="border-solid w-full py-20 relative h-full">
       <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl flex justify-center items-center">
         <div className="mb-32">
           <TextGenerateEffect words={sentences} specialWords={specialWords} />
         </div>
       </div>
       {/* <BentoGrid className="mx-auto order-solid px-8 text-deep-jungle-green">
         {projectsData.map((item, i) => (
           <BentoGridItem
             key={i}
             title={item.title}
             description={item.description}
             className=""
             imageURI={item.imageURI}
             frameworks={item.frameworks}
             github={item.github}
             demo={item.demo}
           />
         ))}
       </BentoGrid> */}
       {/*implemant getPorjects */}
        <BentoGrid className="mx-auto order-solid px-8 text-deep-jungle-green">
          {projectsData.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.desc}
              className=""
              imageURI={item.imageUrl}
              frameworks={item.frameworks}
              github={item.githubUrl}
              demo={item.liveUrl}
            />
          ))}
        </BentoGrid>

     </div>
   );
}
