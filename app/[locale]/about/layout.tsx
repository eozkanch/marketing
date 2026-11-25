import { staticPageMetadata } from "@/lib/seo";

export const generateMetadata = staticPageMetadata("/about");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
