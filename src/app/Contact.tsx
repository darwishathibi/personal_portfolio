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
      <div className="h-[60vh] flex justify-center">
        <div className="grid min-h-[200px] place-content-center flex justify-center space-y-14">
          <a
            href="https://www.instagram.com/darwishathibi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DrawOutlineButton>instagram.</DrawOutlineButton>
          </a>
          <a
            href="https://www.linkedin.com/in/darwis-shathibi-965609204/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DrawOutlineButton>linkedin.</DrawOutlineButton>
          </a>
          <a
            href="https://github.com/darwishathibi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DrawOutlineButton>github.</DrawOutlineButton>
          </a>
          <a
            href="mailto:danishdarwis82@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DrawOutlineButton>email.</DrawOutlineButton>
          </a>
        </div>
      </div>
    </div>
  );
}
