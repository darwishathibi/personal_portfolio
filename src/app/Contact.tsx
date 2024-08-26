"use client";
import DrawOutlineButton from "../components/ui/draw-outline-button";

export default function Contact() {
  return (
    <div className="w-full h-full">
      <div className="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl flex justify-center items-center">
        <p className="mt-48">
          "can <span className="text-indigo-500">contact</span> me..."
        </p>
      </div>
      <div className="h-screen border">
        <div className="grid min-h-[200px] place-content-center">
          <DrawOutlineButton>Hover me</DrawOutlineButton>
        </div>
      </div>
    </div>
  );
}
