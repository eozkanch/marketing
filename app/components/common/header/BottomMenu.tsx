"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "@/lib/data";
import { createCategorySlug } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useStore } from "@nanostores/react";
import { dictStore } from "@/stores/i18n";

export default function BottomMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dict = useStore(dictStore);
  const categories = getCategories().slice(0, 8);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Kategori URL'lerini collection sayfasına uyarlama
  const formatCategoryUrl = (url: string) => {
    // URL'den slug oluştur ve encode et
    const slug = createCategorySlug(url);
    return `/collection/${encodeURIComponent(slug)}`;
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
        aria-label="Menü"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span>{mounted ? dict.collection_categories : "Kategoriler"}</span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Sidebar */}
      <nav
        className={`fixed top-0 left-0 z-50 h-full w-64 transform bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-zinc-950 lg:relative lg:z-auto lg:h-auto lg:w-auto lg:transform-none lg:bg-transparent lg:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex h-full flex-col lg:h-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800 lg:hidden">
            <h3 className="text-lg font-semibold">
              {mounted ? dict.collection_categories : "Kategoriler"}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Menüyü Kapat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="no-scrollbar flex-1 overflow-y-auto p-4 lg:flex lg:flex-row lg:items-center lg:gap-4 lg:overflow-x-auto lg:p-0">
            {categories.map((c) => (
              <li key={c.url}>
                <Link
                  href={formatCategoryUrl(c.url)}
                  onClick={() => setIsOpen(false)}
                  className="block whitespace-nowrap rounded-md px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 lg:px-0 lg:py-2 lg:hover:bg-transparent"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
