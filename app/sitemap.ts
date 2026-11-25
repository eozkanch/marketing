import { MetadataRoute } from "next";
import { getAllProducts, getCategories, getProductHref } from "@/lib/data";
import { createCategorySlug, createProductSlug } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import { hreflang, localizedUrl } from "@/lib/seo";

type Href = Parameters<typeof localizedUrl>[1];

function entry(href: Href, changeFrequency: "daily" | "weekly" | "monthly" | "yearly", priority: number): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[hreflang[l]] = localizedUrl(l, href);
  languages["x-default"] = localizedUrl(routing.defaultLocale, href);
  const now = new Date();
  return routing.locales.map((l) => ({
    url: localizedUrl(l, href),
    lastModified: now,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: [Href, "daily" | "monthly" | "yearly", number][] = [
    ["/", "daily", 1],
    ["/about", "monthly", 0.8],
    ["/contact", "monthly", 0.8],
    ["/use-agreement", "yearly", 0.3],
    ["/confidentiality-agreement", "yearly", 0.3],
  ];
  const categories = getCategories().map((c) =>
    entry({ pathname: "/collection/[categoryId]", params: { categoryId: createCategorySlug(c.url) } }, "weekly", 0.7),
  );
  const products = getAllProducts().map((p) =>
    entry(
      {
        pathname: "/collection/[categoryId]/products/[productName]",
        params: { categoryId: getProductHref(p).split("/")[2], productName: createProductSlug(p.legacy?.details_link, p.name) },
      },
      "weekly",
      0.6,
    ),
  );
  return [...staticRoutes.flatMap(([h, f, pr]) => entry(h, f, pr)), ...categories.flat(), ...products.flat()];
}
