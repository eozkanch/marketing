import { MetadataRoute } from "next";
import { getCategories, getAllProducts } from "@/lib/data";
import { createCategorySlug, createProductSlug } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://gourmetnuts.com";
  
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cart`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/favori`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/use-agreement`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/confidentiality-agreement`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Kategoriler
  const categories = getCategories();
  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/collection/${encodeURIComponent(createCategorySlug(cat.url))}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Ürünler
  const products = getAllProducts();
  const productRoutes = products.slice(0, 1000).map((product) => {
    const categoryMatch = product.legacy?.details_link?.match(/\/collection\/([^/]+)/);
    const productSlug = createProductSlug(product.legacy?.details_link, product.name);
    const url = categoryMatch
      ? `${baseUrl}/collection/${encodeURIComponent(categoryMatch[1])}/products/${encodeURIComponent(productSlug)}`
      : `${baseUrl}/collection/products/${encodeURIComponent(productSlug)}`;
    
    return {
      url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    };
  });

  return [...routes, ...categoryRoutes, ...productRoutes];
}

