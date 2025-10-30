"use client";
import { useStore } from "@nanostores/react";
import { dictStore } from "@/stores/i18n";

export default function Slider() {
  const dict = useStore(dictStore);

  return (
    <div className="relative h-[240px] w-full overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800 sm:h-[300px] md:h-[400px] lg:aspect-16/3 lg:h-auto">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      >
        <source src="/banner.mp4" type="video/mp4" />
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 text-center">
        <h2 className="mb-2 text-2xl font-bold text-white drop-shadow-lg sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
          {dict.slider_title}
        </h2>
        <p className="max-w-2xl text-sm text-white/90 drop-shadow-md sm:text-base md:text-lg lg:text-xl">
          {dict.slider_desc}
        </p>
      </div>
    </div>
  );
}


