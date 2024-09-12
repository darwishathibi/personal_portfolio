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
      <div className="flex justify-center items-center text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl my-52">
        <p>
          &quot;ooooh, <span className="text-indigo-500">photography</span>{" "}
          magic!&quot;
        </p>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-evenly h-full relative p-10">
        <div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/testauth-99b64.appspot.com/o/photo_2024-09-13_02-32-32.jpg?alt=media&token=ab268c69-f2ef-460d-9ccc-6f1e70f45e62"
              alt="photography-image"
              className="w-80 sm:w-80 md:w-[30rem] lg:w-[30rem] rounded-2xl hover:scale-110 transition duration-300"
            />
          </div>
          <p className="text-[10px] sm:text-xs md:text-sm">
            a <span className="text-indigo-500">family</span> on a{" "}
            <span className="text-indigo-500">rocks.</span>
          </p>
        </div>
        <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl lg:w-5/12 mt-10 lg:m-0 tracking-wider">
          <TextGenerateEffect words={sentences} specialWords={specialWords} />
          <Link href={"/photography"}>
            <div className="mt-40 w-fit hover:border-b-2 border-indigo-500  ">
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
