import { cn } from "../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";


export function CrewMembers({image1,image2,image3,image4}) {
  const items = [
    {
      className: "lg:col-span-2",
      image: image1,
    },
    {
      className: "lg:col-span-1",
      image: image2,
    },
    {
      className: "lg:col-span-1",
      image: image3,
    },
    {
      className: "lg:col-span-2",
      image: image4,
    },
  ];
  return (
    <BentoGrid className="max-w-4xl mx-auto lg:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          className={item.className}
          image={item.image}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
