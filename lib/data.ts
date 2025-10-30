import type { Category, ProductLegacy } from "./types";

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
    name: p.name,
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


