import { staticPageMetadata } from "@/lib/seo";

export const generateMetadata = staticPageMetadata("/contact");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
