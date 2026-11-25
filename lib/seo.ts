import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

export const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "https://gourmetnuts.com").replace(/\/$/, "");

export const hreflang: Record<AppLocale, string> = { tr: "tr-TR", fr: "fr-CH", en: "en-US" };
export const ogLocale: Record<AppLocale, string> = { tr: "tr_TR", fr: "fr_CH", en: "en_US" };

type Href = Parameters<typeof getPathname>[0]["href"];

export function localizedUrl(locale: AppLocale, href: Href): string {
  const p = getPathname({ locale, href: href as never });
  return `${baseUrl}${p === "/" ? "" : p}` || baseUrl;
}

/** canonical + tüm diller için hreflang (x-default = varsayılan dil) */
export function buildAlternates(locale: AppLocale, href: Href): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[hreflang[l]] = localizedUrl(l, href);
  languages["x-default"] = localizedUrl(routing.defaultLocale, href);
  return { canonical: localizedUrl(locale, href), languages };
}

/** JSON-LD için XSS korumalı serileştirme: "<" -> < */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

type StaticKey = "/about" | "/contact" | "/cart" | "/favori" | "/use-agreement" | "/confidentiality-agreement" | "/search-results";

const descKey: Partial<Record<StaticKey, string>> = { "/about": "about_subtitle", "/contact": "contact_desc" };

const titleKey: Record<StaticKey, string> = {
  "/about": "about_title",
  "/contact": "contact_us",
  "/cart": "cart",
  "/favori": "favorites",
  "/use-agreement": "use_agreement",
  "/confidentiality-agreement": "confidentiality_agreement",
  "/search-results": "header_search_placeholder",
};

/** Statik sayfa layout'ları için ortak generateMetadata üreticisi */
export function staticPageMetadata(path: StaticKey, opts: { noindex?: boolean } = {}) {
  return async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
    const { locale } = await params;
    if (!routing.locales.includes(locale as AppLocale)) return {};
    const { getTranslations } = await import("next-intl/server");
    const t = await getTranslations({ locale });
    return {
      title: t(titleKey[path]),
      ...(descKey[path] ? { description: t(descKey[path]!) } : {}),
      alternates: buildAlternates(locale as AppLocale, path),
      ...(opts.noindex ? { robots: { index: false, follow: false } } : {}),
    };
  };
}
