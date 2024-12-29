import React from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { getProjects } from "@/components/server/projectsData";

const sentences = "things i made...";
const specialWords = ["made..."];

export default async function BentoGridDemo() {
  const posts = await getProjects();
   return (
     <div className="border-solid w-full py-20 relative h-full">
       <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl flex justify-center items-center">
         <div className="mb-32">
           <TextGenerateEffect words={sentences} specialWords={specialWords} />
         </div>
       </div>
       <BentoGrid className="mx-auto order-solid px-8">
         {posts.map((post, index) => (
           <BentoGridItem
             key={post._id || `post-${index}`}
             title={post.title}
             description={post.desc}
             className=""
             imageURI={post.imageUrl}
             frameworks={post.frameworks}
             github={post.githubUrl}
             demo={post.liveUrl}
           />
         ))}
       </BentoGrid>
     </div>
   );
}
