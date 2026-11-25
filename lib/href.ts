import type { useRouter } from "@/i18n/navigation";

export type AppHref = Parameters<ReturnType<typeof useRouter>["push"]>[0];

/** "/collection/x/products/y" gibi dil-bağımsız iç yolları tipli next-intl href'ine çevirir. */
export function toHref(path: string): AppHref {
  const [pathOnly, qs] = path.split("?");
  const query = qs ? Object.fromEntries(new URLSearchParams(qs)) : undefined;
  const dec = (s: string) => decodeURIComponent(s);
  let m = pathOnly.match(/^\/collection\/([^/]+)\/products\/([^/]+)$/);
  if (m) return { pathname: "/collection/[categoryId]/products/[productName]", params: { categoryId: dec(m[1]), productName: dec(m[2]) }, query } as AppHref;
  m = pathOnly.match(/^\/collection\/([^/]+)$/);
  if (m) return { pathname: "/collection/[categoryId]", params: { categoryId: dec(m[1]) }, query } as AppHref;
  return (query ? { pathname: pathOnly, query } : pathOnly) as AppHref;
}
