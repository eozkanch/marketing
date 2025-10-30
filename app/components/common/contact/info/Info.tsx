"use client";
import { useStore } from "@nanostores/react";
import { dictStore, localeStore } from "@/stores/i18n";
import { getWebsite } from "@/lib/constants";

export default function Info() {
  const dict = useStore(dictStore);
  const locale = useStore(localeStore);
  const website = getWebsite(locale);

  return (
    <div className="space-y-2 text-sm">
      <div className="font-medium">{dict.address}</div>
      <div className="text-zinc-600 dark:text-zinc-400">{website.phone}</div>
      <div className="text-zinc-600 dark:text-zinc-400">{website.email}</div>
      <div className="text-zinc-600 dark:text-zinc-400">{website.address}</div>
    </div>
  );
}


