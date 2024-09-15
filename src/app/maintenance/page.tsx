"use client";
import React from "react";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import DrawOutlineButton from "@/components/ui/draw-outline-button";

export default function FlipWordsDemo() {
  const words = ["unavailable", "updating", "upgrading"];

  return (
    <main className="font-sf tracking-wider bg-zinc-900 bg-[radial-gradient(#27272a_1px,transparent_2px)] [background-size:16px_16px] overflow-hidden">
      <div className="h-screen flex justify-center items-center px-4">
        <div className="mx-auto text-neutral-600 text-neutral-400 w-full flex flex-col justify-center items-center">
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl">
            Coming Soon.
          </div>
          <div className="pt-4 lg:pt-8 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            This page is curently
            <FlipWords words={words} />
          </div>
        </div>
      </div>
      <div>
        <div className="h-full w-full flex items-center justify-center py-10 tracking-widest">
          <Link href={"/"}>
            <DrawOutlineButton>return back.</DrawOutlineButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
