import Link from "next/link";
import Logo from "./components/common/brand/Logo";

export default function NotFound() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        <Logo />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">
            That's an <span className="text-red-400">ERROR.</span>
          </h1>
          <p className="text-lg text-white/90 drop-shadow-md">
            The page you are looking for could not be found.
          </p>
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

