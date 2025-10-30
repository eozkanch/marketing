"use client";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { localeStore } from "@/stores/i18n";
import { getWebsite } from "@/lib/constants";

export default function Map() {
  const [mounted, setMounted] = useState(false);
  const locale = useStore(localeStore);
  const website = getWebsite(locale);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[400px] w-full rounded-lg bg-zinc-200 dark:bg-zinc-800" aria-label="Harita yükleniyor" />
    );
  }

  return (
    <div className="h-[400px] w-full overflow-hidden rounded-lg border border-zinc-200 shadow-sm dark:border-zinc-800">
      <iframe
        src={website.mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Gourmet Nuts Konum - Geneva Merkez"
        className="h-full w-full"
      />
    </div>
  );
}
