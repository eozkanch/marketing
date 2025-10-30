"use client";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { dictStore } from "@/stores/i18n";

export default function BottomFooter() {
  const [mounted, setMounted] = useState(false);
  const dict = useStore(dictStore);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full overflow-hidden bg-zinc-100 py-3 text-center text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
        <div className="mx-auto max-w-7xl px-4">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-zinc-100 py-3 text-center text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
      <div className="mx-auto max-w-7xl px-4">{dict.footer_payment_info}</div>
    </div>
  );
}


