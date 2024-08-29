"use client";
import { Image } from "@unpic/react";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: { src: string; title: string };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const [isPortrait, setIsPortrait] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
      const img = new window.Image();
      img.onload = () => {
        setIsPortrait(img.height > img.width);
      };
      img.src = card.src;
      console.log(img.height);
    }, [card.src]);

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "mb-10 relative bg-slate-800 overflow-hidden w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"  
        )}
      >
        <Image
          ref={imgRef}
          src={card.src}
          alt={card.title}
          className="object-cover inset-0"
          layout="fullWidth"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 pb-10">
            {card.title}
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="gap-10 w-full p-12 columns-1 md:columns-2 lg:columns-3">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
