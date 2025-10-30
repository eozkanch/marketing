"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NoImageIcon from "./NoImageIcon";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useStore } from "@nanostores/react";
import { favoritesStore, toggleFavorite } from "@/stores/favorites";
import { createProductSlug } from "@/lib/utils";
import type { Product } from "./ProductCard";

type Props = {
  product: Product;
  onAdd?: (product: Product) => void;
};

export default function ProductCardHorizontal({ product, onAdd }: Props) {
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const { items } = useStore(favoritesStore);
  const isFavorite = !!items[product.id];
  
  // URL-safe slug oluştur
  let productHref = product.href;
  if (!productHref && product.legacy?.details_link) {
    const categoryMatch = product.legacy.details_link.match(/\/collection\/([^/]+)/);
    const productSlug = createProductSlug(product.legacy.details_link, product.name);
    if (categoryMatch) {
      productHref = `/collection/${encodeURIComponent(categoryMatch[1])}/products/${encodeURIComponent(productSlug)}`;
    } else {
      productHref = `/collection/products/${encodeURIComponent(productSlug)}`;
    }
  }
  productHref = productHref || "#";
  
  // Resmin gösterilip gösterilmeyeceğini kontrol et
  const shouldShowImage = product.image && !imageError && product.image.trim() !== "";
  
  const handleCardClick = () => {
    if (productHref !== "#") {
      router.push(productHref);
    }
  };

  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (productHref !== "#") {
      router.push(productHref);
    }
  };
  
  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite({ id: product.id, name: product.name, image: product.image });
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAdd) {
      onAdd(product);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group relative cursor-pointer flex gap-4 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
    >
      {/* Image - Sol */}
      <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-900">
        {shouldShowImage ? (
          <Image 
            src={product.image!} 
            alt={product.name} 
            fill 
            className="object-cover transition-transform group-hover:scale-105" 
            onError={handleImageError}
            onLoadingComplete={() => setImageError(false)}
          />
        ) : (
          <NoImageIcon />
        )}
      </div>

      {/* Content - Sağ */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="mb-1 text-base font-medium line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
            {product.name}
          </h3>
          <div className="mb-2 text-lg font-semibold text-emerald-600 dark:text-emerald-400">
            {product.price.toFixed(2)} ₺
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleView}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition hover:bg-emerald-100 hover:text-emerald-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-emerald-900 dark:hover:text-emerald-400"
            aria-label="Ürünü Görüntüle"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={handleFavorite}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
              isFavorite 
                ? "bg-red-100 text-red-500 hover:bg-red-200 dark:bg-red-900 dark:text-red-400" 
                : "bg-zinc-100 text-zinc-600 hover:bg-emerald-100 hover:text-emerald-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-emerald-900 dark:hover:text-emerald-400"
            }`}
            aria-label={isFavorite ? "Favorilerden Kaldır" : "Favorilere Ekle"}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
          </button>
          {onAdd && (
            <button
              onClick={handleAddToCart}
              className="ml-auto flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm text-white transition hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
              aria-label="Sepete Ekle"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Sepete Ekle</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
