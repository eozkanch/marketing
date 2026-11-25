import { Link } from "@/i18n/navigation";
import { toHref } from "@/lib/href";

type Category = { id: string; name: string; href: string };

type Props = { categories: Category[] };

// href: "/collection/<slug>" (dil-bağımsız iç yol)
export default function CategoriesPopulers({ categories }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {categories.map((c) => (
        <Link
          key={c.id}
          href={toHref(c.href)}
          className="rounded-lg border border-zinc-200 p-4 text-center transition hover:shadow dark:border-zinc-800"
        >
          <span className="text-sm font-medium">{c.name}</span>
        </Link>
      ))}
    </div>
  );
}
