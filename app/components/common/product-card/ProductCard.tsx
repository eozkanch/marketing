"use client";
import { useRouter } from "@/i18n/navigation";
import { toHref } from "@/lib/href";
import { formatPrice } from "@/lib/format";
import { useLocaleCode } from "@/app/components/common/i18n/LocaleProvider";
import { addToCart } from "@/stores/cart";
import ImageWithFallback from "./ImageWithFallback";
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
  const locale = useLocaleCode();
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
      productHref = `/collection/tum-urunler/products/${encodeURIComponent(productSlug)}`;
    }
  }
  productHref = productHref || "#";
  
  // Resmin gösterilip gösterilmeyeceğini kontrol et
  const shouldShowImage = !!product.image && product.image.trim() !== "";
  
  const handleCardClick = () => {
    if (productHref !== "#") {
      router.push(toHref(productHref));
    }
  };

  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (productHref !== "#") {
      router.push(toHref(productHref));
    }
  };
  
  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite({ id: product.id, name: product.name, image: product.image });
  };

  const defaultAdd = (p: Product) => addToCart({ id: p.id, name: p.name, price: p.price, image: p.image, qty: 1 });
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    (onAdd ?? defaultAdd)(product);
  };

  return (
    <article
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
      className="group relative cursor-pointer rounded-lg border border-zinc-200 bg-white p-3 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      tabIndex={0}
      role="article"
      aria-label={`${product.name}, ${formatPrice(product.price, locale)}`}
    >
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-900">
        {shouldShowImage ? (
          <ImageWithFallback
            src={product.image!}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
          />
        ) : (
          <ImageWithFallback src="" alt={product.name} fill className="object-cover" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
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
          {(
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
        <span className="line-clamp-1 block text-sm font-medium">{product.name}</span>
        <div className="text-sm text-zinc-600 dark:text-zinc-400" >
          {formatPrice(product.price, locale)}
        </div>
      </div>
    </article>
  );
}
