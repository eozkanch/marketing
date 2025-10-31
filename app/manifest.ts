import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://gourmetnuts.com";
  
  return {
    name: "Gourmet Nuts",
    short_name: "Gourmet Nuts",
    description: "Doğanın En İyisi, Sofranın En Zarif Hali",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#10b981",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/vite.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
    categories: ["food", "shopping", "ecommerce"],
    lang: "tr",
    dir: "ltr",
  };
}

