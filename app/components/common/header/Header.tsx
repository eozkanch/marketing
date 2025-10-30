"use client";
import { useEffect, useState } from "react";
import TopMenu from "./TopMenu";
import MiddleMenu from "./MiddleMenu";
import BottomMenu from "./BottomMenu";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`w-full bg-white dark:bg-black ${isSticky ? "sticky top-0 z-50 shadow-sm" : ""}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-2 py-2">
          <TopMenu />
          <MiddleMenu />
          <BottomMenu />
        </div>
      </div>
    </div>
  );
}


