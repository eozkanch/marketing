import { Suspense } from "react";
import { staticPageMetadata } from "@/lib/seo";

export const generateMetadata = staticPageMetadata("/search-results", { noindex: true });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
