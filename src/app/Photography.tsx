"use client";
import Link from "next/link";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const sentences =
  "Hey there! My hobby? Photography! I'm currently having a blast with my Fujifilm X-T20 and snapping away with my Google Pixel 6a.";

const specialWords = [
  "Photography!",
  "Fujifilm",
  "X-T20",
  "Google",
  "Pixel",
  "6a.",
];

const sentences2 = "Let's go!";

const specialWords2 = ["go!"];

export default function Photography() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl ">
        <p className="mb-32">
          &quot;ooooh, <span className="text-indigo-500">photography</span>{" "}
          magic!&quot;
        </p>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-evenly h-screen relative">
        <div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/image/DRWS6826.jpg"
              alt="photography-image"
              className="w-[15rem] sm:w-[20rem] md:w-[30rem] lg:w-[40rem] rounded-2xl hover:scale-110 transition duration-300"
            />
          </div>
          <p className="text-[10px] sm:text-xs md:text-sm">
            a <span className="text-indigo-500">coffee</span> stall at{" "}
            <span className="text-indigo-500">Ampang Park.</span>
          </p>
        </div>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl p-0 w-5/12 tracking-wider">
          <TextGenerateEffect words={sentences} specialWords={specialWords} />
          <Link href={"/photography"}>
            <div className="mt-56 w-fit hover:border-b-2 border-indigo-500  ">
              <TextGenerateEffect
                words={sentences2}
                specialWords={specialWords2}
                className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
