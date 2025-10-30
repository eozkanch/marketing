"use client";
import { useStore } from "@nanostores/react";
import { favoritesStore, removeFavorite } from "@/stores/favorites";
import { addToCart } from "@/stores/cart";
import ProductCard, { Product } from "../components/common/product-card/ProductCard";
import Spacer from "../components/common/spacer/Spacer";
import { dictStore } from "@/stores/i18n";
import { getAllProducts } from "@/lib/data";

export default function FavoriPage() {
  const { items } = useStore(favoritesStore);
  const dict = useStore(dictStore);
  const favoriteItems = Object.values(items);
  const allProducts = getAllProducts();

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, qty: 1 });
  };

  if (favoriteItems.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <Spacer size="lg" />
        <h1 className="text-2xl font-semibold">{dict.favorites}</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{dict.empty_favorites}</p>
        <Spacer size="lg" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Spacer size="lg" />
      <h1 className="mb-6 text-2xl font-semibold">{dict.favorites}</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {favoriteItems.map((item) => {
          // Favori item'dan ürün bilgisini bul
          const fullProduct = allProducts.find((p) => p.id === item.id);
          const product: Product = fullProduct || {
            id: item.id,
            name: item.name,
            image: item.image,
            price: 0,
          };
          return (
            <div key={item.id} className="relative">
              <ProductCard product={product} onAdd={() => handleAddToCart(product)} />
              <button
                onClick={() => removeFavorite(item.id)}
                className="absolute right-2 top-2 rounded-full bg-red-500 p-2 text-white hover:bg-red-600"
                aria-label="Favorilerden çıkar"
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
      <Spacer size="lg" />
    </div>
  );
}

