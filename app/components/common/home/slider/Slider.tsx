"use client";
import Image from "next/image";
import { useDict } from "@/app/components/common/i18n/LocaleProvider";
import { useStore } from "@nanostores/react";

export default function Slider() {
  const dict = useDict();

  return (
    <div className="relative h-[240px] w-full overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800 sm:h-[300px] md:h-[400px] lg:aspect-16/3 lg:h-auto">
      <Image
        src="/images/hero.webp"
        alt={dict.slider_title}
        fill
        priority
        fetchPriority="high"
        quality={70}
        sizes="100vw"
        className="object-cover"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 text-center">
        <h1 className="mb-2 text-2xl font-bold text-white drop-shadow-lg sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
          {dict.slider_title}
        </h1>
        <p className="max-w-2xl text-sm text-white/90 drop-shadow-md sm:text-base md:text-lg lg:text-xl">
          {dict.slider_desc}
        </p>
      </div>
    </div>
  );
}


