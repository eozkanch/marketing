"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@nanostores/react";
import { dictStore } from "@/stores/i18n";
import { getAllProducts } from "@/lib/data";
import { createProductSlug } from "@/lib/utils";
import { addToCart } from "@/stores/cart";
import { favoritesStore, toggleFavorite } from "@/stores/favorites";
import SectionHeader from "@/app/components/common/section-header/SectionHeader";
import SimilarProducts from "@/app/components/common/collection/similar-products/SimilarProducts";
import NoImageIcon from "@/app/components/common/product-card/NoImageIcon";
import { Heart, ShoppingCart, Truck, DollarSign, ShieldCheck, Share2 } from "lucide-react";

export default function CollectionDetailsPage() {
  const [mounted, setMounted] = useState(false);
  const params = useParams();
  const dict = useStore(dictStore);
  const { items: favorites } = useStore(favoritesStore);
  const productNameParam = decodeURIComponent((params?.productName as string) || "");
  const [counter, setCounter] = useState(1);
  const allProducts = getAllProducts();
  
  // Ürünü slug ile eşleştir
  const productDetails = allProducts.find((p) => {
    const productSlug = createProductSlug(p.legacy?.details_link, p.name);
    return productSlug === productNameParam || p.legacy?.details_link?.includes(productNameParam) || p.name.toLowerCase().includes(productNameParam.toLowerCase());
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!productDetails) {
    return <div className="py-20 text-center">{mounted ? dict.product_not_found : "Ürün bulunamadı."}</div>;
  }
  
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

  const similarProducts = allProducts
    .filter((p) => p.id !== productDetails.id)
    .slice(0, 4)
    .map((p) => {
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

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900">
            {imageUrl ? (
              <Image src={imageUrl} alt={productDetails.name} fill className="object-cover" />
            ) : (
              <NoImageIcon />
            )}
          </div>
        </div>

        <div className="lg:col-span-5">
          <h1 className="mb-4 text-2xl font-semibold">{productDetails.name}</h1>
          <div className="mb-4 space-y-2">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {mounted ? dict.product_status : "Durum"}: <span className="text-green-600">{mounted ? dict.product_in_stock : "Stokta Var"}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-semibold">{legacy?.price || productDetails.price.toFixed(2)}</span>
              {legacy?.old_price ? (
                <span className="text-sm text-zinc-400 line-through">{legacy.old_price}</span>
              ) : null}
              {legacy?.sale_title ? (
                <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">{legacy.sale_title}</span>
              ) : null}
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">{mounted ? dict.product_urgency : "Acele et stokta sadece 11 ürün kaldı!"}</div>
            <div className="text-sm">{mounted ? dict.product_shipping : "Sipariş verdiğiniz 2 gün içinde paketlenerek kargoya verilir."}</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">{mounted ? dict.product_size : "Boyut"}: <span>1 KG</span></div>
          </div>

          <div className="mb-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm">{mounted ? dict.product_quantity : "Adet"}:</span>
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
                {mounted ? dict.add_to_cart : "Sepete Ekle"}
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <div>{mounted ? dict.product_sku : "SKU"}: BNP-AF1000</div>
              <div className="flex items-center gap-2">
                <span>{mounted ? dict.product_share : "Paylaş"}:</span>
                <Share2 className="h-4 w-4 cursor-pointer text-zinc-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="space-y-6 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <div className="text-center">
              <Truck className="mx-auto mb-2 h-8 w-8 text-zinc-600" />
              <h5 className="mb-1 font-semibold">{mounted ? dict.delivery_info : "TESLİMAT BİLGİSİ"}</h5>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {mounted ? dict.delivery_desc : "Verdiğiniz siparişlerin ardından ürünlerimiz 2 iş günü içinde kargolanmaktadır."}
              </p>
            </div>
            <div className="text-center">
              <DollarSign className="mx-auto mb-2 h-8 w-8 text-zinc-600" />
              <h5 className="mb-1 font-semibold">{mounted ? dict.return_info : "İPTAL VE İADE"}</h5>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {mounted ? dict.return_desc : "Endişelenmeyin! 7 gün içinde siparişinizi iade edebilirsiniz."}
              </p>
            </div>
            <div className="text-center">
              <ShieldCheck className="mx-auto mb-2 h-8 w-8 text-zinc-600" />
              <h5 className="mb-1 font-semibold">{mounted ? dict.warranty_info : "GARANTİ"}</h5>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {mounted ? dict.warranty_desc : "Rahat olun! Markaların sağladığı garanti politikası çerçevesinde güvendesiniz."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeader title2={mounted ? dict.similar_products : "Benzer Ürünler"} />
        <SimilarProducts 
          items={similarProducts} 
          onAdd={(p) => addToCart({ ...p, qty: 1 })} 
        />
      </div>
    </div>
  );
}

