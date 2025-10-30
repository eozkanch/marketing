import { atom, computed } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

export type User = {
  id: string;
  name: string;
  email: string;
  role?: "user" | "admin";
};

export const tokenStore = persistentAtom<string | null>(
  "token",
  null,
  {
    encode(value) {
      return value ?? "";
    },
    decode(value) {
      return value || null;
    },
  }
);

export const userStore = atom<User | null>(null);

export const isAuthenticatedStore = computed(tokenStore, (token) => !!token);

export function login(token: string, user: User) {
  tokenStore.set(token);
  userStore.set(user);
}

export function logout() {
  tokenStore.set(null);
  userStore.set(null);
}


