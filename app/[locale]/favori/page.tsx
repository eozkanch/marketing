import { setRequestLocale } from "next-intl/server";
import FavoriClient from "./FavoriClient";
import { getSlimProducts } from "@/lib/data";

export const revalidate = 3600;

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  setRequestLocale((await params).locale);
  return <FavoriClient products={getSlimProducts()} />;
}
