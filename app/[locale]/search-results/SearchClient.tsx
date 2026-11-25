"use client";
import { useState } from "react";
import { useDict } from "@/app/components/common/i18n/LocaleProvider";
import { useSearchParams } from "next/navigation";
import { useStore } from "@nanostores/react";
import type { SlimProduct } from "@/lib/data";
import ProductCard from "@/app/components/common/product-card/ProductCard";
import ProductCardHorizontal from "@/app/components/common/product-card/ProductCardHorizontal";
import { Grid2x2, List } from "lucide-react";
import type { Product } from "@/app/components/common/product-card/ProductCard";

export default function SearchClient({ products }: { products: SlimProduct[] }) {
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const dict = useDict();
  
  const query = searchParams.get("q") || "";
  const searchResults: Product[] =
    query.trim().length >= 2
      ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
      : [];

  return (
    <div className="mx-auto min-h-[100vh] max-w-7xl px-4 py-10">
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
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {searchResults.map((product) => (
                <ProductCardHorizontal key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

