"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useStore } from "@nanostores/react";
import { dictStore } from "@/stores/i18n";

export default function TopMenu() {
  const [mounted, setMounted] = useState(false);
  const dict = useStore(dictStore);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-300">
        <div className="flex items-center gap-4">
          <span className="h-4 w-20 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <div className="flex items-center gap-4">
          <span className="h-4 w-16 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-300">
      <div className="flex items-center gap-4">
        <span>{dict.header_welcome}</span>
        <span className="hidden sm:inline">|</span>
        <Link href="/about" className="hover:underline">{dict.footer_about}</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login" className="hover:underline">{dict.footer_login}</Link>
        <Link href="/register" className="hover:underline">{dict.footer_register}</Link>
      </div>
    </div>
  );
}
