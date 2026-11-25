import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import CollectionClient from "./CollectionClient";
import { findCategoryBySlug, getCategories, getProductsByCategory } from "@/lib/data";
import { createCategorySlug } from "@/lib/utils";
import { buildAlternates } from "@/lib/seo";
import { routing } from "@/i18n/routing";

export const revalidate = 3600;
type Params = { locale: string; categoryId: string };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getCategories().map((c) => ({ locale, categoryId: createCategorySlug(c.url) })),
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, categoryId } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const category = findCategoryBySlug(decodeURIComponent(categoryId));
  if (!category) return {};
  return {
    title: category.name,
    description: `${category.name} – Gourmet Nuts`,
    alternates: buildAlternates(locale, { pathname: "/collection/[categoryId]", params: { categoryId } }),
  };
}

export default async function CollectionPage({ params }: { params: Promise<Params> }) {
  const { locale, categoryId } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const category = findCategoryBySlug(decodeURIComponent(categoryId));
  if (!category) notFound();

  return (
    <CollectionClient
      categories={getCategories()}
      categoryUrl={category.url}
      products={getProductsByCategory(category)}
    />
  );
}
