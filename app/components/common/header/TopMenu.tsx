"use client";
import { useDict } from "@/app/components/common/i18n/LocaleProvider";
import { Link } from "@/i18n/navigation";

export default function TopMenu() {
  const dict = useDict();

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
