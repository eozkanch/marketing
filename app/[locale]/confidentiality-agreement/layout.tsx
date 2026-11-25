import { staticPageMetadata } from "@/lib/seo";

export const generateMetadata = staticPageMetadata("/confidentiality-agreement");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
