"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { dictStore } from "@/stores/i18n";

type Props = { withSlogan?: boolean };

export default function Logo({ withSlogan = false }: Props) {
  const dict = useStore(dictStore);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <Link href="/" className="group block select-none leading-none">
      <div className="font-serif text-2xl font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-200">
        Gourmet <span className="text-emerald-600 dark:text-emerald-400">Nuts</span>
      </div>
      {withSlogan ? (
        <div className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400" suppressHydrationWarning>
          {mounted ? dict.slogan : ""}
        </div>
      ) : null}
    </Link>
  );
}


