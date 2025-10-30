"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NoImageIcon from "../../product-card/NoImageIcon";
import { Heart, ShoppingCart } from "lucide-react";
import { useStore } from "@nanostores/react";
import { favoritesStore, toggleFavorite } from "@/stores/favorites";
import { createProductSlug } from "@/lib/utils";

export type SimilarProduct = {
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
  items: SimilarProduct[];
  onAdd?: (item: SimilarProduct) => void;
  onClick?: (id: string) => void;
};

export default function SimilarProducts({ items, onAdd, onClick }: Props) {
  const [mounted, setMounted] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const router = useRouter();
  const { items: favorites } = useStore(favoritesStore);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageError = (itemId: string) => {
    setImageErrors((prev) => ({ ...prev, [itemId]: true }));
  };

  const handleCardClick = (p: SimilarProduct) => {
    if (onClick) {
      onClick(p.id);
    } else {
      let productHref = p.href;
      if (!productHref && p.legacy?.details_link) {
        const categoryMatch = p.legacy.details_link.match(/\/collection\/([^/]+)/);
        const productSlug = createProductSlug(p.legacy.details_link, p.name);
        if (categoryMatch) {
          productHref = `/collection/${encodeURIComponent(categoryMatch[1])}/products/${encodeURIComponent(productSlug)}`;
        } else {
          productHref = `/collection/products/${encodeURIComponent(productSlug)}`;
        }
      }
      if (productHref && productHref !== "#") {
        router.push(productHref);
      }
    }
  };

  const handleFavorite = (e: React.MouseEvent, p: SimilarProduct) => {
    e.stopPropagation();
    toggleFavorite({ id: p.id, name: p.name, image: p.image });
  };

  const handleAddToCart = (e: React.MouseEvent, p: SimilarProduct) => {
    e.stopPropagation();
    if (onAdd) {
      onAdd(p);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((p) => {
        const isFavorite = mounted && !!favorites[p.id];
        
        return (
          <div key={p.id} onClick={() => handleCardClick(p)} className="block cursor-pointer">
            <div className="group relative rounded-lg border border-zinc-200 bg-white p-3 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
              <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded bg-zinc-100 dark:bg-zinc-900">
                {p.image && !imageErrors[p.id] && p.image.trim() !== "" ? (
                  <Image 
                    src={p.image} 
                    alt={p.name} 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105" 
                    onError={() => handleImageError(p.id)}
                  />
                ) : (
                  <NoImageIcon />
                )}
                
                {/* Hover overlay with icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    onClick={(e) => handleFavorite(e, p)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-zinc-100 ${
                      isFavorite ? "text-red-500" : "text-zinc-900"
                    }`}
                    aria-label={isFavorite ? "Favorilerden Kaldır" : "Favorilere Ekle"}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
                  </button>
                  {onAdd && (
                    <button
                      onClick={(e) => handleAddToCart(e, p)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg transition hover:bg-zinc-100"
                      aria-label="Sepete Ekle"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
              <div className="mt-2 line-clamp-1 text-sm font-medium">{p.name}</div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400">{p.price.toFixed(2)} ₺</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
