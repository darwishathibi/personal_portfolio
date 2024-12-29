"use client";
import Link from "next/link";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import BoxReveal from "../components/ui/magic/box-reveal-text";

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
const sentences2 = "Checkout more!";
const specialWords2 = ["more!"];
const sentences3 = "oooooh, photography magic!";
const specialWords3 = ["photography"];

let wordsArray = sentences.split(" ");

export default function Photography() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl mt-52 ">
        <TextGenerateEffect words={sentences3} specialWords={specialWords3} />
      </div>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-evenly h-full relative px-8 py-20 lg:py-52">
        <div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://xbodhzbvucbyooxotirc.supabase.co/storage/v1/object/sign/portfolio/projects/DRWS8272%20(3).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vcHJvamVjdHMvRFJXUzgyNzIgKDMpLmpwZyIsImlhdCI6MTcyODM4ODA3NSwiZXhwIjoyMDQzNzQ4MDc1fQ.SADR8k8RS7FOT36PM4J3efgW7G96vL2-A8Ek26Al32I&t=2024-10-08T11%3A47%3A55.020Z"
              alt="photography-image"
              className="w-80 sm:w-80 md:w-[30rem] lg:w-[30rem] rounded-2xl hover:scale-110 transition duration-300"
            />
          </div>
          <p className="text-[10px] sm:text-xs md:text-sm">
            a <span className="text-indigo-500">family</span> on a{" "}
            <span className="text-indigo-500">breakwater.</span>
          </p>
        </div>
        <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl lg:w-5/12 mt-10 lg:m-0 tracking-wider">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="font-semibold py-1">
              {wordsArray.map((word, i) => {
                const className = specialWords.includes(word)
                  ? "text-indigo-500 font-bold "
                  : "text-white ";
                return (
                  <span key={i} className={className}>
                    {word}{" "}
                  </span>
                );
              })}
            </p>
          </BoxReveal>
          <Link href={"/maintenance"}>
            <div className="mt-40 w-fit hover:border-b-2 border-indigo-500">
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
