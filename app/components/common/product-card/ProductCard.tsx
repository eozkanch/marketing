"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NoImageIcon from "./NoImageIcon";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useStore } from "@nanostores/react";
import { favoritesStore, toggleFavorite } from "@/stores/favorites";
import { createProductSlug } from "@/lib/utils";

export type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
  href?: string;
  legacy?: {
    details_link?: string;
  };
};

type Props = {
  product: Product;
  onAdd?: (product: Product) => void;
};

export default function ProductCard({ product, onAdd }: Props) {
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
      className="group relative cursor-pointer rounded-lg border border-zinc-200 bg-white p-3 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-900">
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
        
        {/* Hover overlay with icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            onClick={handleView}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg transition hover:bg-zinc-100"
            aria-label="Ürünü Görüntüle"
          >
            <Eye className="h-5 w-5" />
          </button>
          <button
            onClick={handleFavorite}
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-zinc-100 ${
              isFavorite ? "text-red-500" : "text-zinc-900"
            }`}
            aria-label={isFavorite ? "Favorilerden Kaldır" : "Favorilere Ekle"}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
          </button>
          {onAdd && (
            <button
              onClick={handleAddToCart}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg transition hover:bg-zinc-100"
              aria-label="Sepete Ekle"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <div className="line-clamp-1 text-sm font-medium">{product.name}</div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">{product.price.toFixed(2)} ₺</div>
      </div>
    </div>
  );
}
