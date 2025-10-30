"use client";
import Link from "next/link";
import { useStore } from "@nanostores/react";
import { cartStore, cartTotalStore, cartCountStore, removeFromCart, setQty } from "../../../../stores/cart";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MiniCart({ open, onClose }: Props) {
  const { items } = useStore(cartStore);
  const total = useStore(cartTotalStore);
  const count = useStore(cartCountStore);

  return (
    <div className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white p-4 shadow-xl transition-transform dark:bg-zinc-950 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-labelledby="mini-cart-title"
      >
        <div className="flex items-center justify-between">
          <h2 id="mini-cart-title" className="text-lg font-semibold">Sepetinizde {count} ürün var</h2>
          <button aria-label="Kapat" onClick={onClose} className="rounded p-1 hover:bg-zinc-100 dark:hover:bg-zinc-900">✕</button>
        </div>
        <div className="mt-4 space-y-3 overflow-y-auto pr-2" style={{ maxHeight: "calc(100vh - 220px)" }}>
          {Object.values(items).map((item) => (
            <div key={item.id} className="grid grid-cols-[80px_1fr_auto] items-center gap-3 rounded border border-zinc-200 p-2 dark:border-zinc-800">
              <div className="h-16 w-16 overflow-hidden rounded bg-zinc-100 dark:bg-zinc-900" />
              <div>
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">{item.price.toFixed(2)} ₺</div>
                <div className="mt-2 inline-flex items-center gap-2">
                  <button className="h-6 w-6 rounded border" onClick={() => setQty(item.id, item.qty - 1)}>-</button>
                  <span className="text-sm">{item.qty}</span>
                  <button className="h-6 w-6 rounded border" onClick={() => setQty(item.id, item.qty + 1)}>+</button>
                </div>
              </div>
              <button className="text-red-600" onClick={() => removeFromCart(item.id)}>Sil</button>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Toplam</div>
            <div className="text-base font-semibold">{total.toFixed(2)} ₺</div>
          </div>
          <div className="mt-3 flex gap-3">
            <Link href="/cart" className="flex-1 rounded-md bg-zinc-900 px-4 py-2 text-center text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200">
              Sepeti Görüntüle
            </Link>
            <Link href="/payment" className="flex-1 rounded-md bg-zinc-900 px-4 py-2 text-center text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200">
              Ödeme Yap
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}


