import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getWebsite } from "@/lib/constants";
import type { AppLocale } from "@/i18n/routing";

export default async function Info({ locale }: { locale: AppLocale }) {
  const t = await getTranslations({ locale });
  const site = getWebsite(locale);
  const items = [
    { Icon: MapPin, label: t("address"), value: site.address, href: site.mapUrl },
    { Icon: Phone, label: t("phone"), value: site.phone, href: `tel:${site.phone.replace(/\s+/g, "")}` },
    { Icon: Mail, label: t("email"), value: site.email, href: `mailto:${site.email}` },
  ];
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{t("contact_info_title")}</h2>
      <ul className="space-y-3">
        {items.map(({ Icon, label, value, href }) => (
          <li key={label}>
            <a
              href={href}
              className="flex items-start gap-3 rounded-xl border border-zinc-200 p-4 transition hover:border-emerald-300 hover:bg-emerald-50/50 dark:border-zinc-800 dark:hover:border-emerald-800 dark:hover:bg-emerald-950/20"
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-zinc-500">{label}</span>
                <span className="block text-sm font-medium">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{t("contact_hours_note")}</p>
    </div>
  );
}
