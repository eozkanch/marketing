import { defineRouting } from "next-intl/routing";

export const locales = ["tr", "fr", "en"] as const;
export type AppLocale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "tr",
  localePrefix: "always",
  // hreflang etiketlerini generateMetadata (lib/seo.ts) üretiyor; Link başlığı çakışmasın
  alternateLinks: false,
  pathnames: {
    "/": "/",
    "/collection/[categoryId]": {
      tr: "/koleksiyon/[categoryId]",
      fr: "/collection/[categoryId]",
      en: "/collection/[categoryId]",
    },
    "/collection/[categoryId]/products/[productName]": {
      tr: "/koleksiyon/[categoryId]/urunler/[productName]",
      fr: "/collection/[categoryId]/produits/[productName]",
      en: "/collection/[categoryId]/products/[productName]",
    },
    "/cart": { tr: "/sepet", fr: "/panier", en: "/cart" },
    "/favori": { tr: "/favoriler", fr: "/favoris", en: "/favorites" },
    "/about": { tr: "/hakkimizda", fr: "/a-propos", en: "/about" },
    "/contact": { tr: "/iletisim", fr: "/contact", en: "/contact" },
    "/use-agreement": { tr: "/kullanim-sozlesmesi", fr: "/conditions-utilisation", en: "/terms-of-use" },
    "/confidentiality-agreement": { tr: "/gizlilik-politikasi", fr: "/confidentialite", en: "/privacy-policy" },
    "/search-results": { tr: "/arama", fr: "/recherche", en: "/search" },
    // Henüz sayfası olmayan bağlantılar (önceki davranış: 404)
    "/login": "/login",
    "/register": "/register",
    "/payment": "/payment",
  },
});
