/**
 * Türkçe ve özel karakterleri URL-safe slug'a çevirir
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD") // Unicode normalize
    .replace(/[\u0300-\u036f]/g, "") // Diyakritik işaretleri kaldır (é -> e, ü -> u)
    .replace(/ğ/g, "g")
    .replace(/Ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/Ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/Ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/ö/g, "o")
    .replace(/Ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/Ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-") // Alfanumerik olmayan karakterleri - ile değiştir
    .replace(/^-+|-+$/g, "") // Baş ve sondaki - karakterlerini kaldır
    .replace(/-+/g, "-"); // Birden fazla - karakterini tek - ile değiştir
}

/**
 * URL-safe slug'ı tekrar decode eder (sadece görüntüleme için)
 */
export function unslugify(slug: string): string {
  return decodeURIComponent(slug.replace(/-/g, " "));
}

/**
 * Product details_link'ten URL-safe slug oluşturur
 */
export function createProductSlug(detailsLink: string | undefined, productName: string): string {
  if (!detailsLink) {
    return slugify(productName);
  }
  
  // Eğer details_link zaten bir slug formatındaysa, sadece temizle
  const parts = detailsLink.split("/");
  const lastPart = parts[parts.length - 1];
  
  if (lastPart && lastPart.length > 0) {
    // URL encode/decode işlemlerinden sonra slugify uygula
    const decoded = decodeURIComponent(lastPart);
    return slugify(decoded);
  }
  
  return slugify(productName);
}

/**
 * Category URL'inden slug oluşturur
 */
export function createCategorySlug(categoryUrl: string): string {
  // URL'den / karakterlerini kaldır ve slugify uygula
  const cleanUrl = categoryUrl.replace(/^\/+|\/+$/g, "");
  const decoded = decodeURIComponent(cleanUrl);
  return slugify(decoded);
}

