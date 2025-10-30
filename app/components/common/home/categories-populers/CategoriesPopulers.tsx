"use client";
import Link from "next/link";
import { useStore } from "@nanostores/react";

type Category = { id: string; name: string; href: string };

type Props = { categories: Category[] };

export default function CategoriesPopulers({ categories }: Props) {
  // Kategori URL'lerini collection sayfasına uyarlama
  const formatCategoryUrl = (href: string) => {
    const cleanUrl = href.replace(/^\//, "");
    return `/collection/${cleanUrl}`;
  };

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {categories.map((c) => (
        <Link
          key={c.id}
          href={formatCategoryUrl(c.href)}
          className="rounded-lg border border-zinc-200 p-4 text-center transition hover:shadow dark:border-zinc-800"
        >
          <div className="text-sm font-medium">{c.name}</div>
        </Link>
      ))}
    </div>
  );
}


