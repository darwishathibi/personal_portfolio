"use client";
import DrawOutlineButton from "../components/ui/draw-outline-button";

export default function Contact() {
  return (
    <div className="w-full h-full">
      <section className="my-52">
        <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl flex justify-center items-center mb-24">
          <p>
            &quot;can <span className="text-indigo-500">contact</span>{" "}
            me...&quot;
          </p>
        </div>
        <div className="h-fullflex justify-center">
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
      </section>
    </div>
  );
}
