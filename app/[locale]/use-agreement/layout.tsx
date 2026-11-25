import { staticPageMetadata } from "@/lib/seo";

export const generateMetadata = staticPageMetadata("/use-agreement");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
