"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@nanostores/react";
import { cartStore, cartTotalStore, setQty, removeFromCart } from "../../../../stores/cart";
import { dictStore } from "@/stores/i18n";
import NoImageIcon from "../product-card/NoImageIcon";

export default function Cart() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const { items } = useStore(cartStore);
  const total = useStore(cartTotalStore);
  const dict = useStore(dictStore);

  const values = Object.values(items);

  const handleImageError = (itemId: string) => {
    setImageErrors((prev) => ({ ...prev, [itemId]: true }));
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold">{dict.cart}</h1>
      {values.length === 0 ? (
        <p className="mt-6 text-zinc-600 dark:text-zinc-400">{dict.empty_cart}</p>
      ) : (
        <div className="mt-6 grid gap-4">
          {values.map((it) => {
            const shouldShowImage = it.image && !imageErrors[it.id] && it.image.trim() !== "";
            const productHref = it.id.startsWith("/collection") ? it.id : `#`;
            
            return (
              <div key={it.id} className="grid grid-cols-[80px_1fr_auto] items-center gap-4 rounded border border-zinc-200 p-3 dark:border-zinc-800">
                <Link href={productHref} className="block">
                  <div className="relative h-16 w-16 overflow-hidden rounded bg-zinc-100 dark:bg-zinc-900">
                    {shouldShowImage ? (
                      <Image
                        src={it.image!}
                        alt={it.name}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(it.id)}
                      />
                    ) : (
                      <NoImageIcon />
                    )}
                  </div>
                </Link>
                <div>
                  <div className="text-sm font-medium">{it.name}</div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">{it.price.toFixed(2)} ₺</div>
                  <div className="mt-2 inline-flex items-center gap-2">
                    <button className="h-6 w-6 rounded border" onClick={() => setQty(it.id, it.qty - 1)}>-</button>
                    <span className="text-sm">{it.qty}</span>
                    <button className="h-6 w-6 rounded border" onClick={() => setQty(it.id, it.qty + 1)}>+</button>
                  </div>
                </div>
                <button className="text-red-600" onClick={() => removeFromCart(it.id)}>{dict.remove}</button>
              </div>
            );
          })}
          <div className="flex items-center justify-end gap-6 border-t border-zinc-200 pt-4 text-base dark:border-zinc-800">
            <div className="text-zinc-600 dark:text-zinc-400">{dict.total}</div>
            <div className="font-semibold">{total.toFixed(2)} ₺</div>
          </div>
        </div>
      )}
    </div>
  );
}
