"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@nanostores/react";
import { dictStore } from "@/stores/i18n";
import { Search, X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchModal({ isOpen, onClose }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const dict = useStore(dictStore);

  useEffect(() => {
    if (isOpen) {
      // Modal açıldığında input'a focus
      const timer = setTimeout(() => {
        const input = document.getElementById("search-input-modal");
        input?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim().length >= 2) {
      router.push(`/search-results?q=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
      setSearchQuery("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-20 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white p-4 shadow-xl dark:bg-zinc-900 sm:rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="flex flex-1 items-center gap-2">
            <Search className="h-5 w-5 text-zinc-400" />
            <input
              id="search-input-modal"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={dict.header_search_placeholder}
              className="flex-1 border-0 bg-transparent text-lg outline-none placeholder:text-zinc-400"
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="p-1 text-zinc-400 hover:text-zinc-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
            <button
              type="submit"
              disabled={searchQuery.trim().length < 2}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {dict.send || "Ara"}
            </button>
          </form>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-600"
            aria-label="Kapat"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        {searchQuery.length > 0 && searchQuery.length < 2 && (
          <p className="mt-2 text-sm text-zinc-500">En az 2 karakter girin</p>
        )}
      </div>
    </div>
  );
}

