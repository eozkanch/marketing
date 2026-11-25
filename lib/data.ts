import type { Category, ProductLegacy } from "./types";
import { normalizeProductName } from "./product-normalize";
import { createProductSlug, createCategorySlug } from "./utils";

// JSON dosyaları build-time'da içe aktarılır (tree-shakable, tip güvenli)
import categoriesJson from "../data/categories.json" assert { type: "json" };
import dataJson from "../data/data.json" assert { type: "json" };
import allProductJson from "../data/allproduct.json" assert { type: "json" };

export function getCategories(): Category[] {
  return (categoriesJson as { categories: Category[] }).categories;
}

// CHF fiyat metnini sayıya çevirir ("CHF 12.90" -> 12.9)
export function parseChfPrice(priceText: string): number {
  const cleaned = priceText
    .replace(/CHF\s*/i, "")
    .replace(/\./g, ".")
    .replace(/,/g, ".")
    .trim();
  const value = Number.parseFloat(cleaned);
  return Number.isFinite(value) ? value : 0;
}

export type SimpleProduct = {
  id: string;
  name: string;
  image?: string;
  price: number;
  legacy?: ProductLegacy;
};

function legacyToSimple(p: ProductLegacy, index: number): SimpleProduct {
  let imageUrl: string | undefined = p.image_url || undefined;
  
  // null veya boş string ise undefined yap
  if (!imageUrl || imageUrl.trim() === "") {
    imageUrl = undefined;
  }
  // Eğer zaten /products/ ile başlıyorsa direkt kullan (public klasöründen)
  else if (imageUrl.startsWith("/products/")) {
    imageUrl = imageUrl;
  }
  // Eğer // ile başlıyorsa https: ekle (eski format)
  else if (imageUrl.startsWith("//")) {
    imageUrl = `https:${imageUrl}`;
  }
  // Diğer durumlarda olduğu gibi kullan
  
  return {
    id: p.details_link || String(index),
    name: normalizeProductName(p.name),
    image: imageUrl,
    price: parseChfPrice(p.price),
    legacy: p,
  };
}

// data.json -> products
export function getDataProducts(): SimpleProduct[] {
  const arr = (dataJson as { products: ProductLegacy[] }).products || [];
  return arr.map(legacyToSimple);
}

// allproduct.json -> products
export function getAllProducts(): SimpleProduct[] {
  // Beklenen yapı: { allcategories: [{ categories: string, data: ProductLegacy[] }, ...] }
  const root = allProductJson as unknown as {
    allcategories?: Array<{ categories?: string; data?: ProductLegacy[] }>;
  };
  const groups = Array.isArray(root?.allcategories) ? root.allcategories : [];
  const merged: ProductLegacy[] = [];
  for (const g of groups) {
    if (Array.isArray(g?.data)) merged.push(...g.data);
  }
  return merged.map(legacyToSimple);
}



// Ürün detay sayfası için dil-bağımsız iç yol ("/collection/[kategori]/products/[slug]").
// Dile göre yerelleştirme i18n/navigation Link'i ile yapılır.
export function getProductHref(p: SimpleProduct): string {
  const link = p.legacy?.details_link;
  const categoryMatch = link?.match(/\/collection\/([^/]+)/);
  const slug = createProductSlug(link, p.name);
  if (categoryMatch) {
    return `/collection/${encodeURIComponent(categoryMatch[1])}/products/${encodeURIComponent(slug)}`;
  }
  return `/collection/tum-urunler/products/${encodeURIComponent(slug)}`;
}

export function findProductBySlug(slug: string): SimpleProduct | undefined {
  return getAllProducts().find((p) => createProductSlug(p.legacy?.details_link, p.name) === slug);
}

export function findCategoryBySlug(slug: string): Category | undefined {
  const wanted = createCategorySlug(slug);
  return getCategories().find((c) => createCategorySlug(c.url) === wanted);
}

export function getProductsByCategory(category: Category): SimpleProduct[] {
  const key = category.url.replace("/", "");
  return getAllProducts().filter((p) => {
    const link = p.legacy?.details_link || p.id;
    return category.url === "/tum-urunler" || link.includes(key);
  });
}

export type SlimProduct = { id: string; name: string; price: number; image?: string; href: string };

// İstemciye giden minimal ürün listesi (tüm JSON yerine ~15 KB)
export function getSlimProducts(): SlimProduct[] {
  return getAllProducts().map((p) => ({ id: p.id, name: p.name, price: p.price, image: p.image, href: getProductHref(p) }));
}
