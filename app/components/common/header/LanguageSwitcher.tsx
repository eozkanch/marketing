"use client";
import { Globe, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { type AppLocale } from "@/i18n/routing";
import { useLocaleCode } from "@/app/components/common/i18n/LocaleProvider";

const options: { code: AppLocale; label: string }[] = [
  { code: "tr", label: "TR" },
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const current = useLocaleCode();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const switchTo = (locale: AppLocale) => {
    const { locale: _ignored, ...rest } = params as Record<string, string | string[]>;
    void _ignored;
    const query = Object.fromEntries(new URLSearchParams(window.location.search));
    router.replace({ pathname, params: rest, query } as never, { locale });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const currentOption = options.find((o) => o.code === current) || options[0];

  return (
    <div ref={dropdownRef} className="relative inline-flex">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1 rounded-md border border-zinc-300 bg-white px-2 py-1 text-xs transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-3.5 w-3.5 text-zinc-500" aria-hidden />
        <span>{currentOption.label}</span>
        <ChevronDown className={`h-3 w-3 text-zinc-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div
            className="fixed inset-0 z-40 sm:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown Menu */}
          <div className="absolute right-0 top-full z-50 mt-1 w-32 rounded-md border border-zinc-300 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-900 sm:right-0">
            {options.map((o) => (
              <button
                key={o.code}
                onClick={() => {
                  switchTo(o.code);
                  setIsOpen(false);
                }}
                className={`w-full rounded px-3 py-2 text-left text-xs transition ${
                  current === o.code
                    ? "bg-emerald-400 text-white"
                    : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
                aria-pressed={current === o.code}
              >
                {o.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
