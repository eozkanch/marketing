"use client";
import { useEffect, useState } from "react";
import Logo from "../components/common/brand/Logo";

export default function LoadingPage() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-950">
      <div className="flex flex-col items-center gap-6 text-center">
        <Logo />
        <div className="flex items-center gap-1 text-lg font-medium text-zinc-700 dark:text-zinc-300">
          <span>Yükleniyor</span>
          <span className="inline-block w-6 text-left">{dots || "\u00A0"}</span>
        </div>
      </div>
    </div>
  );
}

