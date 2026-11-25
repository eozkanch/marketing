import { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { baseUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Sepet, favoriler ve arama sayfalarını tüm dillerde engelle
  const blocked = routing.locales.flatMap((locale) =>
    (["/cart", "/favori", "/search-results"] as const).map((href) => getPathname({ locale, href })),
  );
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/", "/admin/", ...blocked] },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
