"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useStore } from "@nanostores/react";
import { dictStore } from "@/stores/i18n";
import { getAllProducts } from "@/lib/data";
import { createProductSlug } from "@/lib/utils";
import ProductCard from "@/app/components/common/product-card/ProductCard";
import ProductCardHorizontal from "@/app/components/common/product-card/ProductCardHorizontal";
import { addToCart } from "@/stores/cart";
import { Grid2x2, List } from "lucide-react";
import type { Product } from "@/app/components/common/product-card/ProductCard";

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const dict = useStore(dictStore);
  
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const allProducts = getAllProducts();
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      
            const results: Product[] = filtered.map((p) => {
              const categoryMatch = p.legacy?.details_link?.match(/\/collection\/([^/]+)/);
              const productSlug = createProductSlug(p.legacy?.details_link, p.name);
              let href = `#`;
              if (categoryMatch) {
                href = `/collection/${encodeURIComponent(categoryMatch[1])}/products/${encodeURIComponent(productSlug)}`;
              } else if (p.legacy?.details_link) {
                href = `/collection/products/${encodeURIComponent(productSlug)}`;
              }
              return {
                id: p.id,
                name: p.name,
                price: p.price,
                image: p.image,
                href,
                legacy: p.legacy,
              };
            });
      
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  if (!mounted) {
    return <div className="mx-auto max-w-7xl px-4 py-10">{dict.loading}</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-semibold">
          {query ? `"${query}" için arama sonuçları` : "Arama"}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          {searchResults.length} {searchResults.length === 1 ? "ürün bulundu" : "ürün bulundu"}
        </p>
      </div>

      {query.trim().length < 2 ? (
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-zinc-600 dark:text-zinc-400">
            Arama yapmak için en az 2 karakter girin.
          </p>
        </div>
      ) : searchResults.length === 0 ? (
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-zinc-600 dark:text-zinc-400">
            "{query}" için sonuç bulunamadı.
          </p>
        </div>
      ) : (
        <>
          {/* View Mode Toggle */}
          <div className="mb-6 flex items-center justify-end gap-3">
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
          </div>

          {/* Results */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {searchResults.map((product) => (
                <ProductCard key={product.id} product={product} onAdd={(p) => addToCart({ ...p, qty: 1 })} />
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {searchResults.map((product) => (
                <ProductCardHorizontal key={product.id} product={product} onAdd={(p) => addToCart({ ...p, qty: 1 })} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

