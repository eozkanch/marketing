"use client";
import { createContext, useContext } from "react";
import type { AppLocale } from "@/i18n/routing";

export type Dict = Record<string, string>;

const Ctx = createContext<{ locale: AppLocale; dict: Dict } | null>(null);

/** Sunucudan yalnızca aktif dilin mesajları gelir; diğer diller istemci paketine girmez. */
export default function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: AppLocale;
  messages: Dict;
  children: React.ReactNode;
}) {
  return <Ctx.Provider value={{ locale, dict: messages }}>{children}</Ctx.Provider>;
}

function useCtx() {
  const v = useContext(Ctx);
  if (!v) throw new Error("LocaleProvider eksik");
  return v;
}

export const useDict = () => useCtx().dict;
export const useLocaleCode = () => useCtx().locale;
