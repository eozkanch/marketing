"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useStore } from "@nanostores/react";
import { dictStore } from "@/stores/i18n";
import { favoritesCountStore } from "@/stores/favorites";
import { cartCountStore } from "@/stores/cart";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "../brand/Logo";
import SearchModal from "./SearchModal";
import { Heart, ShoppingCart, Search } from "lucide-react";

export default function MiddleMenu() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const router = useRouter();
  const dict = useStore(dictStore);
  const favoritesCount = useStore(favoritesCountStore);
  const cartCount = useStore(cartCountStore);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim().length >= 2) {
      router.push(`/search-results?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 py-2">
        <Logo withSlogan={false} />
        
        {/* Desktop Search */}
        <form onSubmit={handleSearch} className="hidden flex-1 max-w-xl sm:block">
          <div className="relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={mounted ? dict.header_search_placeholder : "Search..."}
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 pl-10 text-sm outline-none ring-0 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900"
              suppressHydrationWarning
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          </div>
        </form>

        {/* Mobile Search Icon */}
        <button
          onClick={() => setIsSearchModalOpen(true)}
          className="sm:hidden rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          aria-label="Ara"
        >
          <Search className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-4 text-sm">
          <Link href="/favori" className="relative hover:underline">
            <Heart className="h-5 w-5" />
            {mounted && favoritesCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {favoritesCount}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative hover:underline">
            <ShoppingCart className="h-5 w-5" />
            {mounted && cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
      
      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
    </>
  );
}
