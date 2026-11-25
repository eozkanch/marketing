"use client";
import { useEffect, useState } from "react";
import { useDict, useLocaleCode } from "@/app/components/common/i18n/LocaleProvider";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { formatPrice } from "@/lib/format";
import { useStore } from "@nanostores/react";
import type { SimpleProduct } from "@/lib/data";
import { addToCart } from "@/stores/cart";
import { favoritesStore, toggleFavorite } from "@/stores/favorites";
import SectionHeader from "@/app/components/common/section-header/SectionHeader";
import SimilarProducts from "@/app/components/common/collection/similar-products/SimilarProducts";
import NoImageIcon from "@/app/components/common/product-card/NoImageIcon";
import { Heart, ShoppingCart, Truck, DollarSign, ShieldCheck, Share2 } from "lucide-react";

type Props = {
  productDetails: SimpleProduct;
  similarProducts: { id: string; name: string; price: number; image?: string; href: string; legacy?: SimpleProduct["legacy"] }[];
};

export default function ProductDetailClient({ productDetails, similarProducts }: Props) {
  const [mounted, setMounted] = useState(false);
  const dict = useDict();
  const locale = useLocaleCode();
  const { items: favorites } = useStore(favoritesStore);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isFavorite = mounted && !!favorites[productDetails.id];

  const legacy = productDetails.legacy;
  const imageUrl = legacy?.image_url?.startsWith("//") ? `https:${legacy.image_url}` : legacy?.image_url || "";

  const handleAddToCart = () => {
    addToCart({ 
      id: productDetails.id, 
      name: productDetails.name, 
      price: productDetails.price, 
      image: productDetails.image || imageUrl || undefined,
      qty: counter 
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite({ id: productDetails.id, name: productDetails.name, image: productDetails.image });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900">
            {imageUrl ? (
              <Image src={imageUrl} alt={productDetails.name} fill priority fetchPriority="high" sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
            ) : (
              <NoImageIcon />
            )}
          </div>
        </div>

        <div className="lg:col-span-5">
          <h1 className="mb-4 text-2xl font-semibold">{productDetails.name}</h1>
          <div className="mb-4 space-y-2">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {dict.product_status}: <span className="text-green-700">{dict.product_in_stock}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-semibold">{formatPrice(productDetails.price, locale)}</span>
              {legacy?.old_price ? (
                <span className="text-sm text-zinc-400 line-through">{legacy.old_price}</span>
              ) : null}
              {legacy?.sale_title ? (
                <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">{legacy.sale_title}</span>
              ) : null}
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">{dict.product_urgency}</div>
            <div className="text-sm">{dict.product_shipping}</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">{dict.product_size}: <span>1 KG</span></div>
          </div>

          <div className="mb-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm">{dict.product_quantity}:</span>
              <div className="flex items-center gap-2 rounded-lg border" role="group" aria-label="Ürün miktarı">
                <button
                  onClick={() => setCounter(Math.max(1, counter - 1))}
                  className="px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  aria-label="Miktarı azalt"
                >
                  -
                </button>
                <span className="px-4" aria-live="polite">{counter}</span>
                <button
                  onClick={() => setCounter(counter + 1)}
                  className="px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  aria-label="Miktarı artır"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mb-4 flex gap-3">
              <button
                onClick={handleToggleFavorite}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 ${
                  isFavorite ? "text-red-500" : ""
                }`}
                aria-label={isFavorite ? "Favorilerden kaldır" : "Favorilere ekle"}
                aria-pressed={isFavorite}
              >
                <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
              </button>
              <button
                onClick={handleAddToCart}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
              >
                <ShoppingCart className="h-4 w-4" />
                {dict.add_to_cart}
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <div>{dict.product_sku}: BNP-AF1000</div>
              <div className="flex items-center gap-2">
                <span>{dict.product_share}:</span>
                <Share2 className="h-4 w-4 cursor-pointer text-zinc-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="space-y-6 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <div className="text-center">
              <Truck className="mx-auto mb-2 h-8 w-8 text-zinc-600" />
              <h2 className="mb-1 font-semibold">{dict.delivery_info}</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {dict.delivery_desc}
              </p>
            </div>
            <div className="text-center">
              <DollarSign className="mx-auto mb-2 h-8 w-8 text-zinc-600" />
              <h2 className="mb-1 font-semibold">{dict.return_info}</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {dict.return_desc}
              </p>
            </div>
            <div className="text-center">
              <ShieldCheck className="mx-auto mb-2 h-8 w-8 text-zinc-600" />
              <h2 className="mb-1 font-semibold">{dict.warranty_info}</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {dict.warranty_desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeader title2={dict.similar_products} />
        <SimilarProducts 
          items={similarProducts} 
          
        />
      </div>
    </div>
  );
}

