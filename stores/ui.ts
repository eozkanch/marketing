import { atom } from "nanostores";

export const mobileMenuOpenStore = atom(false);

export function openMobileMenu() {
  mobileMenuOpenStore.set(true);
}

export function closeMobileMenu() {
  mobileMenuOpenStore.set(false);
}

export function toggleMobileMenu() {
  mobileMenuOpenStore.set(!mobileMenuOpenStore.get());
}


