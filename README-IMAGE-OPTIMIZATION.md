# Görsel Optimizasyon Rehberi

## Next.js Image Optimization

Bu proje Next.js'in built-in image optimization özelliğini kullanmaktadır. `next/image` component'i kullanıldığında görseller otomatik olarak optimize edilir.

## Yapılandırma

`next.config.ts` dosyasında şu optimizasyonlar yapılmıştır:

- **Formatlar**: AVIF ve WebP formatları destekleniyor
- **Cihaz Boyutları**: 640px'den 3840px'e kadar responsive boyutlar
- **Önbellek**: 60 saniye minimum cache TTL
- **SVG Güvenliği**: SVG dosyaları için güvenlik politikaları

## Görsel Optimizasyon Scripti

Public klasöründeki görselleri manuel olarak optimize etmek için:

```bash
npm run optimize-images
```

Bu script:
- `public/products` ve `public/categories` klasörlerindeki JPG/PNG dosyalarını optimize eder
- Her görsel için WebP versiyonu oluşturur
- Görselleri maksimum 1920px genişliğe/yüksekliğe resize eder
- Kaliteyi optimize eder (WebP: 85%, orijinal: 85%)

## Kullanım

### Otomatik Optimizasyon (Önerilen)

`next/image` component'ini kullanın - görseller otomatik olarak optimize edilir:

```tsx
import Image from 'next/image';

<Image
  src="/products/product-name.jpg"
  alt="Product Name"
  width={500}
  height={500}
  quality={85}
  loading="lazy"
/>
```

### Manuel Optimize Edilmiş Dosyalar

Script'i çalıştırdıktan sonra, optimize edilmiş dosyaları kullanmak için:

```tsx
// WebP versiyonu (daha küçük dosya boyutu)
<Image src="/products/product-name.webp" ... />

// Veya optimize edilmiş orijinal format
<Image src="/products/product-name_optimized.jpg" ... />
```

## Best Practices

1. **next/image kullanın**: Tüm görseller için `next/image` component'ini kullanın
2. **Lazy loading**: Görsellerde `loading="lazy"` kullanın
3. **Responsive boyutlar**: `sizes` prop'unu kullanarak responsive görseller sağlayın
4. **Placeholder**: Büyük görseller için `placeholder="blur"` kullanın
5. **Priority**: Above-the-fold görseller için `priority` kullanın

## Dosya Boyutları

Optimizasyon öncesi ve sonrası:
- Orijinal JPG: ~70-90KB
- Optimize edilmiş JPG: ~30-50KB (40-50% tasarruf)
- WebP: ~20-35KB (60-70% tasarruf)

