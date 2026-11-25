import { staticPageMetadata } from "@/lib/seo";

export const generateMetadata = staticPageMetadata("/favori", { noindex: true });

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
