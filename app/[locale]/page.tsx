import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Slider from "@/app/components/common/home/slider/Slider";
import PopulerProducts from "@/app/components/common/home/populer-products/PopulerProducts";
import SoldesProducts from "@/app/components/common/home/soldes-products/SoldesProducts";
import CategoriesPopulers from "@/app/components/common/home/categories-populers/CategoriesPopulers";
import Spacer from "@/app/components/common/spacer/Spacer";
import { getAllProducts, getCategories, getProductHref } from "@/lib/data";
import { createCategorySlug } from "@/lib/utils";
import { getWebsite } from "@/lib/constants";
import { buildAlternates } from "@/lib/seo";
import { routing } from "@/i18n/routing";

export const revalidate = 3600;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const site = getWebsite(locale);
  return {
    title: { absolute: site.title },
    description: site.desc,
    alternates: buildAlternates(locale, "/"),
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const all = getAllProducts().map((p) => ({ id: p.id, name: p.name, price: p.price, image: p.image, href: getProductHref(p) }));
  const popular = all.slice(0, 12);
  const discounted = all.slice(12, 24);
  const categories = getCategories()
    .slice(0, 12)
    .map((c, i) => ({ id: String(i), name: c.name, href: `/collection/${encodeURIComponent(createCategorySlug(c.url))}` }));

  return (
    <>
      <Slider />
      <div className="mx-auto max-w-7xl px-4">
        <Spacer size="lg" />
        <h2 className="mb-2 text-xl font-semibold">{t("popular_products")}</h2>
        <PopulerProducts products={popular} />
        <Spacer size="md" />
        <h2 className="mb-2 text-xl font-semibold">{t("discounted_products")}</h2>
        <SoldesProducts products={discounted} />
        <Spacer size="lg" />
        <h2 className="mb-2 text-xl font-semibold">{t("categories")}</h2>
        <CategoriesPopulers categories={categories} />
        <Spacer size="lg" />
      </div>
    </>
  );
}
