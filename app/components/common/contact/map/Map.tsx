import { getTranslations } from "next-intl/server";
import { getWebsite } from "@/lib/constants";
import type { AppLocale } from "@/i18n/routing";

export default async function Map({ locale }: { locale: AppLocale }) {
  const t = await getTranslations({ locale });
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-sm dark:border-zinc-800">
      <iframe
        src={getWebsite(locale).mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={t("contact_map_title")}
        className="h-full w-full"
      />
    </div>
  );
}
