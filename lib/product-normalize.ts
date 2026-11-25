// Saf yardımcılar (zod içermez; istemci paketine zod sızmasın diye ayrı dosya)
const TYPO_FIXES: [RegExp, string][] = [
  [/Fasülye/g, "Fasulye"],
  [/fasülye/g, "fasulye"],
  [/FASÜLYE/g, "FASULYE"],
];

/** "250g •TOZ" / "100g• TOZ" -> "250g • Toz" */
export function normalizeProductName(raw: string): string {
  let name = raw.trim().replace(/\s+/g, " ");
  for (const [re, fix] of TYPO_FIXES) name = name.replace(re, fix);
  name = name.replace(/\s*•\s*/g, " • ");
  // "• TOZ" -> "• Toz" (tamamı büyük harf olan kelimeleri Title Case yap)
  name = name.replace(/ • (.+)$/, (_, rest: string) => {
    const fixed = rest
      .split(" ")
      .map((w) =>
        w.length > 1 && w === w.toLocaleUpperCase("tr-TR")
          ? w.charAt(0) + w.slice(1).toLocaleLowerCase("tr-TR")
          : w,
      )
      .join(" ");
    return ` • ${fixed}`;
  });
  return name.replace(/\s+,/g, ",");
}

function extractGrams(text: string): number | null {
  const m = text.match(/(\d+(?:[.,]\d+)?)\s*(kg|gr|g)\b/i);
  if (!m) return null;
  const n = parseFloat(m[1].replace(",", "."));
  return m[2].toLowerCase() === "kg" ? n * 1000 : n;
}

/** Başlıktaki gramaj ile görsel dosya adındaki gramaj uyuşmazsa uyarır. */
export function checkWeightMismatch(name: string, imageUrl?: string | null): string | null {
  if (!imageUrl) return null;
  const file = imageUrl.split("/").pop() ?? "";
  const fromName = extractGrams(name);
  const fromFile = extractGrams(file.replace(/-/g, " ").replace(/\.\w+$/, ""));
  if (fromName && fromFile && fromName !== fromFile) {
    return `Gramaj uyuşmazlığı: "${name}" (${fromName}g) ↔ ${file} (${fromFile}g)`;
  }
  return null;
}

