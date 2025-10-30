import { persistentMap } from "@nanostores/persistent";
import { computed } from "nanostores";

export type FavoriteItem = {
  id: string;
  name: string;
  image?: string;
};

type FavoritesState = {
  items: Record<string, FavoriteItem>;
};

export const favoritesStore = persistentMap<FavoritesState>(
  "favorites",
  { items: {} },
  {
    encode(value) {
      return JSON.stringify(value);
    },
    decode(value) {
      try {
        return JSON.parse(value || "{}") as FavoritesState;
      } catch {
        return { items: {} };
      }
    },
  }
);

export const favoritesCountStore = computed(favoritesStore, (s) =>
  Object.keys(s.items).length
);

export function addFavorite(item: FavoriteItem) {
  const state = favoritesStore.get();
  favoritesStore.setKey("items", { ...state.items, [item.id]: item });
}

export function removeFavorite(id: string) {
  const state = favoritesStore.get();
  const { [id]: _, ...rest } = state.items;
  favoritesStore.setKey("items", rest);
}

export function toggleFavorite(item: FavoriteItem) {
  const state = favoritesStore.get();
  if (state.items[item.id]) removeFavorite(item.id);
  else addFavorite(item);
}


