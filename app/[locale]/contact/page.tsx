import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import ContactMap from "@/app/components/common/contact/map/Map";
import ContactForm from "@/app/components/common/contact/form/Form";
import Info from "@/app/components/common/contact/info/Info";
import { routing } from "@/i18n/routing";

export const revalidate = 3600;

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <div>
      <section className="bg-emerald-50 dark:bg-emerald-950/30">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
          <h1 className="text-3xl font-bold tracking-tight lg:text-5xl">{t("contact_us")}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{t("contact_desc")}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Info locale={locale} />
          </div>
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800">
              <h2 className="text-xl font-semibold">{t("contact_form_title")}</h2>
              <p className="mb-5 mt-1 text-sm text-zinc-600 dark:text-zinc-400">{t("contact_form_desc")}</p>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <ContactMap locale={locale} />
        </div>
      </div>
    </div>
  );
}
