"use client";
export default function ScrollButton() {
  return (
    <button
      className="fixed bottom-4 right-4 rounded-full bg-emerald-600 p-3 text-white shadow hover:bg-emerald-700 dark:bg-emerald-100 dark:text-black dark:hover:bg-emerald-200"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Yukarı kaydır"
    >
      ↑
    </button>
  );
}


