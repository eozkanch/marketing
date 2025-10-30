# JSON Dosyaları Analizi

## 1. categories.json
**Yapı**: `{ categories: Category[] }`

Her kategori:
- `name`: Kategori adı (örn: "Antep Baklavası")
- `url`: Kategori URL'i (örn: "/baklava")
- `count`: Bu kategorideki ürün sayısı
- `checked`: Boolean işaretleyici

**Toplam**: 28 kategori

## 2. allproduct.json
**Yapı**: `{ allcategories: CategoryGroup[] }`

Her kategori grubu:
- `categories`: Kategori URL'i (örn: "/baklava")
- `data`: Bu kategoriye ait ürün dizisi

**Toplam**: 28 kategori grubu

## İlişki Analizi

### ✅ Birbirini Kapsıyor mu?
**EVET** - `allproduct.json` yapısı `categories.json`'daki kategorileri kapsıyor.

### Eşleşme Mantığı:
- `categories.json` → kategori listesi (metadata: name, url, count, checked)
- `allproduct.json` → her kategori için ürün detayları (`categories` anahtarı ile URL eşleşmesi)

### Örnek Eşleşme:

**categories.json:**
```json
{
  "name": "Antep Baklavası",
  "url": "/baklava",
  "count": 2,
  "checked": true
}
```

**allproduct.json:**
```json
{
  "categories": "/baklava",
  "data": [
    {
      "name": "Özel Kare Baklava 1kg - 2.2kg",
      "price": "CHF 55.00",
      ...
    },
    {
      "name": "Midye Baklava 1kg - 2.2kg",
      "price": "CHF 60.00",
      ...
    }
  ]
}
```

### Sonuç:
- Her iki dosya da **28 kategori** içeriyor
- `allproduct.json` içindeki `categories` değerleri, `categories.json` içindeki `url` değerleriyle **tam olarak eşleşiyor**
- `categories.json` → kategori metadata (liste görünümü için)
- `allproduct.json` → kategori başına ürün detayları (ürün listesi için)

**Öneri**: 
- Navigation/menu için: `categories.json` kullan (name, url, count)
- Ürün listeleme için: `allproduct.json` kullan (categories URL'i ile eşleştir)

