import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";
import { findProductBySlug, getAllProducts, getProductHref } from "@/lib/data";
import { createProductSlug } from "@/lib/utils";
import { CURRENCY } from "@/lib/format";
import { baseUrl, buildAlternates, jsonLdString, localizedUrl } from "@/lib/seo";
import { routing } from "@/i18n/routing";

export const revalidate = 3600;
type Params = { locale: string; categoryId: string; productName: string };

export function generateStaticParams() {
  const products = getAllProducts();
  return routing.locales.flatMap((locale) =>
    products.map((p) => {
      const [, , categoryId] = getProductHref(p).split("/");
      return { locale, categoryId, productName: createProductSlug(p.legacy?.details_link, p.name) };
    }),
  );
}

function hrefFor(categoryId: string, productName: string) {
  return { pathname: "/collection/[categoryId]/products/[productName]", params: { categoryId, productName } } as const;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, categoryId, productName } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const product = findProductBySlug(decodeURIComponent(productName));
  if (!product) return {};
  const t = await getTranslations({ locale });
  const description = `${product.name} – ${t("slogan")}`;
  const url = localizedUrl(locale, hrefFor(categoryId, productName));
  return {
    title: product.name,
    description,
    alternates: buildAlternates(locale, hrefFor(categoryId, productName)),
    openGraph: { type: "website", title: product.name, description, url, images: product.image ? [{ url: product.image }] : undefined },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { locale, categoryId, productName } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const slug = decodeURIComponent(productName);
  const product = findProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations({ locale });
  const similar = getAllProducts()
    .filter((p) => p.id !== product.id)
    .slice(0, 4)
    .map((p) => ({ id: p.id, name: p.name, price: p.price, image: p.image, href: getProductHref(p), legacy: p.legacy }));

  const imageAbs = product.image ? (product.image.startsWith("http") ? product.image : `${baseUrl}${product.image}`) : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: `${product.name} – ${t("slogan")}`,
    image: imageAbs ? [imageAbs] : undefined,
    sku: product.id,
    brand: { "@type": "Brand", name: product.legacy?.vendor_title || "Gourmet Nuts" },
    offers: {
      "@type": "Offer",
      url: localizedUrl(locale, hrefFor(categoryId, productName)),
      price: product.price.toFixed(2),
      priceCurrency: CURRENCY,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <ProductDetailClient productDetails={product} similarProducts={similar} />
    </>
  );
}
