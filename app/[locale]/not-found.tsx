"use client";
// Client bileşen: sunucuda getLocale()/headers kullanmak statik sayfaları dinamiğe çevirip 500 üretir.
// Dil, LocaleProvider bağlamından gelir.
import { Search } from "lucide-react";
import { Link, getPathname } from "@/i18n/navigation";
import { useDict, useLocaleCode } from "@/app/components/common/i18n/LocaleProvider";
import categoriesJson from "@/data/categories.json";
import { createCategorySlug } from "@/lib/utils";

export default function NotFound() {
  const locale = useLocaleCode();
  const dict = useDict();
  const t = (k: string) => dict[k];
  const popular = categoriesJson.categories.filter((c) => c.url !== "/tum-urunler").slice(0, 6);

  return (

    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center px-4 py-16 text-center">
      <p aria-hidden className="text-7xl font-bold tracking-tight text-emerald-700 sm:text-8xl dark:text-emerald-400">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{t("not_found_title")}</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">{t("not_found_desc")}</p>

      <form action={getPathname({ locale, href: "/search-results" })} method="get" role="search" className="mt-8 flex w-full max-w-md gap-2">
        <label htmlFor="nf-q" className="sr-only">
          {t("not_found_search_label")}
        </label>
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" aria-hidden />
          <input
            id="nf-q"
            name="q"
            type="search"
            minLength={2}
            required
            placeholder={t("not_found_search_label")}
            className="w-full rounded-lg border border-zinc-300 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <button type="submit" className="rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800">
          {t("not_found_search_btn")}
        </button>
      </form>

      <div className="mt-10 w-full">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">{t("not_found_popular")}</h2>
        <ul className="flex flex-wrap justify-center gap-2">
          {popular.map((c) => (
            <li key={c.url}>
              <Link
                href={{ pathname: "/collection/[categoryId]", params: { categoryId: createCategorySlug(c.url) } }}
                className="inline-block rounded-full border border-zinc-300 px-4 py-1.5 text-sm transition hover:border-emerald-500 hover:bg-emerald-50 dark:border-zinc-700 dark:hover:bg-emerald-950/30"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/" className="mt-10 rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">
        {t("not_found_home")}
      </Link>
    </section>
  );
}
