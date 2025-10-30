"use client";
type Props = { targetId: string; label?: string };

export default function ScrollSelected({ targetId, label = "Git" }: Props) {
  return (
    <button
      className="rounded-md border px-3 py-1 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900"
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })}
    >
      {label}
    </button>
  );
}


