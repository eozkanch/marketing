import Link from "next/link";
import Logo from "../components/common/brand/Logo";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-950">
      <div className="flex flex-col items-center gap-8 text-center">
        <Logo />
        <div className="relative">
          <img
            className="h-64 w-64 object-contain"
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="Error"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            That's an <span className="text-red-600 dark:text-red-400">ERROR.</span>
          </h1>
        </div>
        <Link
          href="/"
          className="rounded-lg bg-zinc-900 px-6 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
        >
          Return To <span className="font-semibold">Homepage</span>
        </Link>
      </div>
    </div>
  );
}

