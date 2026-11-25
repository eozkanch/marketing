"use client";
import { useDict } from "@/app/components/common/i18n/LocaleProvider";

export default function BottomFooter() {
  const dict = useDict();

  return (
    <div className="w-full overflow-hidden bg-zinc-100 py-3 text-center text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
      <div className="mx-auto max-w-7xl px-4">{dict.footer_payment_info}</div>
    </div>
  );
}


