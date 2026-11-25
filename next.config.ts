import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        hostname: "bizimkiler.ch",
        pathname: "/cdn/**",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    inlineCss: true, // render-blocking CSS isteğini kaldırır
    optimizePackageImports: ["lucide-react", "@nanostores/react"],
  },
  // Eski (dil önekisiz) adresler -> /tr altındaki yerelleştirilmiş adreslere kalıcı yönlendirme
  redirects: async () => [
    { source: "/home", destination: "/tr", permanent: true },
    { source: "/collection/:cat/products/:slug", destination: "/tr/koleksiyon/:cat/urunler/:slug", permanent: true },
    { source: "/collection/:cat", destination: "/tr/koleksiyon/:cat", permanent: true },
    { source: "/about", destination: "/tr/hakkimizda", permanent: true },
    { source: "/contact", destination: "/tr/iletisim", permanent: true },
    { source: "/cart", destination: "/tr/sepet", permanent: true },
    { source: "/favori", destination: "/tr/favoriler", permanent: true },
    { source: "/use-agreement", destination: "/tr/kullanim-sozlesmesi", permanent: true },
    { source: "/confidentiality-agreement", destination: "/tr/gizlilik-politikasi", permanent: true },
    { source: "/search-results", destination: "/tr/arama", permanent: true },
  ],
  // Güvenlik başlıkları proxy.ts içinde (lib/security-headers.ts)
};

export default withNextIntl(nextConfig);
