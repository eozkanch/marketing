import type { AppLocale } from "@/i18n/routing";

// Veri CHF cinsinden; dil yalnızca gösterim biçimini belirler.
const intlLocale: Record<AppLocale, string> = { tr: "tr-CH", fr: "fr-CH", en: "en-CH" };
export const CURRENCY = "CHF";

export function formatPrice(amount: number, locale: AppLocale): string {
  return new Intl.NumberFormat(intlLocale[locale], { style: "currency", currency: CURRENCY }).format(amount);
}
