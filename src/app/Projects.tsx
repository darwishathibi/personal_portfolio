import React from "react";
import projectsData from "../data/projects.json";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,  
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <>
      <div className="border-solid h-full w-full my-96 relative h-full">
        <div className="text-xl sm:text-2xl md:texl-3xl lg:text-4xl flex justify-center items-center">
          <p className="mb-32">
            things i <span className="text-indigo-500">made</span>...
          </p>
        </div>
        <BentoGrid className="mx-auto order-solid">
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
        </BentoGrid>
      </div>
    </>
  );
}
