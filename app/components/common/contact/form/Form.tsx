"use client";
import { useState } from "react";
import { useStore } from "@nanostores/react";
import { dictStore } from "@/stores/i18n";

export default function ContactForm() {
  const dict = useStore(dictStore);
  const [state, setState] = useState({ name: "", email: "", message: "" });

  return (
    <form className="grid gap-3">
      <input
        className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900"
        placeholder={dict.name}
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <input
        type="email"
        className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900"
        placeholder={dict.email}
        value={state.email}
        onChange={(e) => setState({ ...state, email: e.target.value })}
      />
      <textarea
        className="min-h-32 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900"
        placeholder={dict.message}
        value={state.message}
        onChange={(e) => setState({ ...state, message: e.target.value })}
      />
      <button className="mt-2 rounded-md bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200">
        {dict.send}
      </button>
    </form>
  );
}


