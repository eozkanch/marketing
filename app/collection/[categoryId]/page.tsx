"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useStore } from "@nanostores/react";
import { dictStore } from "@/stores/i18n";
import { getCategories, getAllProducts } from "@/lib/data";
import { createCategorySlug } from "@/lib/utils";
import ProductCard from "@/app/components/common/product-card/ProductCard";
import ProductCardHorizontal from "@/app/components/common/product-card/ProductCardHorizontal";
import { addToCart } from "@/stores/cart";
import { Grid2x2, List, Filter } from "lucide-react";

export default function CollectionPage() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const dict = useStore(dictStore);
  const categoryId = decodeURIComponent((params?.categoryId as string) || "");
  const [sortOption, setSortOption] = useState("1");
  const [showFilter, setShowFilter] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = getCategories();
  const allProducts = getAllProducts();
  
  // URL'den gelen categoryId'yi decode et ve slug ile eşleştir
  const decodedCategoryId = decodeURIComponent(categoryId);
  const category = categories.find((c) => {
    const categorySlug = createCategorySlug(c.url);
    const urlSlug = createCategorySlug(decodedCategoryId);
    return categorySlug === urlSlug || c.url.includes(decodedCategoryId) || decodedCategoryId.includes(c.url.replace("/", ""));
  });
  const categoryUrl = category?.url || "";

  const filteredProducts = allProducts.filter((p) => {
    const detailsLink = p.legacy?.details_link || p.id;
    return detailsLink.includes(categoryUrl.replace("/", "")) || categoryUrl === "/tum-urunler";
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "2":
        return a.price - b.price;
      case "3":
        return b.price - a.price;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  if (!mounted) {
    return <div className="mx-auto max-w-7xl px-4 py-10">{dict.loading}</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <aside className={`lg:col-span-1 ${showFilter ? "block" : "hidden lg:block"}`}>
          <div className="sticky top-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <h4 className="mb-4 font-semibold">{dict.collection_categories}</h4>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label key={cat.url} className="flex cursor-pointer items-center gap-2 rounded p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900">
                  <input
                    type="radio"
                    name="category"
                    checked={categoryUrl === cat.url}
                    onChange={() => {
                      const slug = createCategorySlug(cat.url);
                      router.push(`/collection/${encodeURIComponent(slug)}`);
                    }}
                    className="h-4 w-4"
                    suppressHydrationWarning
                  />
                  <span className="text-sm">
                    {cat.name} ({cat.count})
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <main className="lg:col-span-3">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm lg:hidden"
            >
              <Filter className="h-4 w-4" />
              {dict.collection_filter}
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded transition ${
                  viewMode === "grid" 
                    ? "bg-emerald-400 text-white" 
                    : "text-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
                aria-label="Grid görünüm"
              >
                <Grid2x2 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded transition ${
                  viewMode === "list" 
                    ? "bg-emerald-400 text-white" 
                    : "text-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
                aria-label="Liste görünüm"
              >
                <List className="h-5 w-5" />
              </button>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
                suppressHydrationWarning
              >
                <option value="1">{dict.collection_sort_az}</option>
                <option value="2">{dict.collection_sort_price_low}</option>
                <option value="3">{dict.collection_sort_price_high}</option>
              </select>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAdd={(p) => addToCart({ ...p, qty: 1 })} />
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {sortedProducts.map((product) => (
                <ProductCardHorizontal key={product.id} product={product} onAdd={(p) => addToCart({ ...p, qty: 1 })} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

