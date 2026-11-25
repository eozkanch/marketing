import { notFound } from "next/navigation";

// Tanımsız yolları [locale]/not-found.tsx'e düşürür.
export default function CatchAll() {
  notFound();
}
