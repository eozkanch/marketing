import Image from "next/image";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Award, Handshake, Leaf, Sprout, Truck } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export const revalidate = 3600;

const values = [
  { key: "about_value1", Icon: Leaf },
  { key: "about_value2", Icon: Handshake },
  { key: "about_value3", Icon: Sprout },
  { key: "about_value4", Icon: Truck },
] as const;

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <div>
      {/* Hero */}
      <section className="bg-emerald-50 dark:bg-emerald-950/30">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 lg:grid-cols-2 lg:py-16">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight lg:text-5xl">{t("about_title")}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{t("about_subtitle")}</p>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-zinc-100 shadow-lg dark:bg-zinc-900">
            <Image
              src="/kuruyemis.jpeg"
              alt={t("about_title")}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Hikâye */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight lg:text-3xl">{t("about_story_title")}</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{t("about_story_p1")}</p>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{t("about_story_p2")}</p>
        </div>
      </section>

      {/* Değerler */}
      <section className="bg-zinc-50 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight lg:text-3xl">{t("about_values_title")}</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ key, Icon }) => (
              <li key={key} className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mb-2 font-semibold">{t(`${key}_title`)}</h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{t(`${key}_desc`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ödül */}
      <section className="mx-auto max-w-4xl px-4 py-12 lg:py-16">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:flex-row sm:p-8 dark:border-emerald-900 dark:bg-emerald-950/30">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
            <Award className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <h2 className="mb-2 text-xl font-semibold">{t("about_award_title")}</h2>
            <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{t("about_award_desc")}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 text-center">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">{t("about_cta_title")}</h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={{ pathname: "/collection/[categoryId]", params: { categoryId: "tum-urunler" } }}
            className="rounded-lg bg-emerald-700 px-6 py-3 font-medium text-white transition hover:bg-emerald-800"
          >
            {t("about_cta_shop")}
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-zinc-300 px-6 py-3 font-medium transition hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            {t("about_cta_contact")}
          </Link>
        </div>
      </section>
    </div>
  );
}
