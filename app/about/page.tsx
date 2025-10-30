"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useStore } from "@nanostores/react";
import { dictStore, localeStore } from "@/stores/i18n";
import { getWebsite } from "@/lib/constants";
import Spacer from "../components/common/spacer/Spacer";
import SectionHeader from "../components/common/section-header/SectionHeader";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const locale = useStore(localeStore);
  const dict = useStore(dictStore);
  const website = getWebsite(locale);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Spacer size="md" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold lg:text-4xl">
              {mounted ? dict.about_title : website.about.title}
            </h1>
            <Spacer size="md" />
            <h5 className="text-lg text-zinc-600 dark:text-zinc-400">
              {mounted ? dict.about_subtitle : website.about.desc[0]}
            </h5>
            <Spacer size="md" />
          </div>
        </div>

        <div className="my-8 grid grid-cols-1">
          <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900">
            <Image
              src="/kuruyemis.jpeg"
              alt={mounted ? dict.about_title : website.about.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
              priority
            />
            <div className="absolute left-0 top-0 h-full w-1 bg-emerald-600" />
            <div className="absolute left-0 top-0 h-1 w-full bg-emerald-600" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-4">
            <Spacer size="lg" />
            {website.about.desc.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-zinc-700 dark:text-zinc-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Spacer size="lg" />
    </>
  );
}
