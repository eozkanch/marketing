"use client";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { dictStore } from "@/stores/i18n";
import Slider from "../components/common/home/slider/Slider";
import PopulerProducts from "../components/common/home/populer-products/PopulerProducts";
import SoldesProducts from "../components/common/home/soldes-products/SoldesProducts";
import CategoriesPopulers from "../components/common/home/categories-populers/CategoriesPopulers";
import Spacer from "../components/common/spacer/Spacer";
import { getAllProducts, getCategories } from "@/lib/data";
import { createProductSlug, createCategorySlug } from "@/lib/utils";
import { addToCart } from "@/stores/cart";
import type { Product } from "../components/common/product-card/ProductCard";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const dict = useStore(dictStore);
  
  const allProducts = getAllProducts();
  const products = allProducts.slice(0, 12).map((p) => {
    const categoryMatch = p.legacy?.details_link?.match(/\/collection\/([^/]+)/);
    const productSlug = createProductSlug(p.legacy?.details_link, p.name);
    let href = `#`;
    if (categoryMatch) {
      href = `/collection/${encodeURIComponent(categoryMatch[1])}/products/${encodeURIComponent(productSlug)}`;
    } else if (p.legacy?.details_link) {
      href = `/collection/products/${encodeURIComponent(productSlug)}`;
    }
    return { ...p, href } as Product;
  });
  const soldes = allProducts.slice(12, 24).map((p) => {
    const categoryMatch = p.legacy?.details_link?.match(/\/collection\/([^/]+)/);
    const productSlug = createProductSlug(p.legacy?.details_link, p.name);
    let href = `#`;
    if (categoryMatch) {
      href = `/collection/${encodeURIComponent(categoryMatch[1])}/products/${encodeURIComponent(productSlug)}`;
    } else if (p.legacy?.details_link) {
      href = `/collection/products/${encodeURIComponent(productSlug)}`;
    }
    return { ...p, href } as Product;
  });
  const categories = getCategories().slice(0, 12).map((c, i) => {
    const slug = createCategorySlug(c.url);
    return { id: String(i), name: c.name, href: `/collection/${encodeURIComponent(slug)}` };
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Slider />
      <div className="mx-auto max-w-7xl px-4">
       
        <Spacer size="lg" />
        <div className="mb-2 text-xl font-semibold">{mounted ? dict.popular_products : "Popüler Ürünler"}</div>
        <PopulerProducts products={products} onAdd={(p) => addToCart({ ...p, qty: 1 })} />
        <Spacer size="md" />
        <div className="mb-2 text-xl font-semibold">{mounted ? dict.discounted_products : "İndirimli Ürünler"}</div>
        <SoldesProducts products={soldes} onAdd={(p) => addToCart({ ...p, qty: 1 })} />
        <Spacer size="lg" />
        <div className="mb-2 text-xl font-semibold">{mounted ? dict.categories : "Kategoriler"}</div>
        <CategoriesPopulers categories={categories} />
        <Spacer size="lg" />
      </div>
    </>
  );
}
