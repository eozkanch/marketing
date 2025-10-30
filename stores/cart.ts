import { map, computed } from "nanostores";
import { persistentMap } from "@nanostores/persistent";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
};

type CartState = {
  items: Record<string, CartItem>;
};

export const cartStore = persistentMap<CartState>(
  "cart",
  { items: {} },
  {
    encode(value) {
      return JSON.stringify(value);
    },
    decode(value) {
      try {
        return JSON.parse(value || "{}") as CartState;
      } catch {
        return { items: {} };
      }
    },
  }
);

export const cartCountStore = computed(cartStore, (state) =>
  Object.values(state.items).reduce((acc, it) => acc + it.qty, 0)
);

export const cartTotalStore = computed(cartStore, (state) =>
  Object.values(state.items).reduce((acc, it) => acc + it.qty * it.price, 0)
);

export function addToCart(item: CartItem) {
  const state = cartStore.get();
  const existing = state.items[item.id];
  const qty = (existing?.qty ?? 0) + item.qty;
  cartStore.setKey("items", { ...state.items, [item.id]: { ...item, qty } });
}

export function removeFromCart(itemId: string) {
  const state = cartStore.get();
  const { [itemId]: _, ...rest } = state.items;
  cartStore.setKey("items", rest);
}

export function setQty(itemId: string, qty: number) {
  const state = cartStore.get();
  const item = state.items[itemId];
  if (!item) return;
  if (qty <= 0) return removeFromCart(itemId);
  cartStore.setKey("items", { ...state.items, [itemId]: { ...item, qty } });
}

export function clearCart() {
  cartStore.set({ items: {} });
}


