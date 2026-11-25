"use client";
import { useDict, useLocaleCode } from "@/app/components/common/i18n/LocaleProvider";
import { Link } from "@/i18n/navigation";
import { getWebsite } from "@/lib/constants";
import Logo from "../brand/Logo";

export default function Footer() {
  const locale = useLocaleCode();
  const dict = useDict();

  const website = getWebsite(locale);

  return (
    <footer className="mt-16 w-full overflow-hidden bg-zinc-50 py-10 text-sm dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6">
          <Logo withSlogan />
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-2">
              <div className="font-medium">{dict.footer_address}</div>
              <div className="text-zinc-600 dark:text-zinc-400">{website.phone}</div>
              <div className="text-zinc-600 dark:text-zinc-400">{website.email}</div>
              <div className="text-zinc-600 dark:text-zinc-400">{website.address}</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium">{dict.footer_institutional}</div>
              <Link href="/about" className="block text-zinc-600 hover:underline dark:text-zinc-400">
                {dict.footer_about}
              </Link>
              <Link href="/contact" className="block text-zinc-600 hover:underline dark:text-zinc-400">
                {dict.footer_contact}
              </Link>
            </div>
            <div className="space-y-2">
              <div className="font-medium">{dict.footer_important_info}</div>
              <Link href="/confidentiality-agreement" className="block text-zinc-600 hover:underline dark:text-zinc-400">
                {dict.confidentiality_agreement}
              </Link>
              <Link href="/use-agreement" className="block text-zinc-600 hover:underline dark:text-zinc-400">
                {dict.use_agreement}
              </Link>
            </div>
            <div className="space-y-2">
              <div className="font-medium">{dict.footer_my_account}</div>
              <Link href="/login" className="block text-zinc-600 hover:underline dark:text-zinc-400">
                {dict.footer_login}
              </Link>
              <Link href="/register" className="block text-zinc-600 hover:underline dark:text-zinc-400">
                {dict.footer_register}
              </Link>
              <Link href="/cart" className="block text-zinc-600 hover:underline dark:text-zinc-400">
                {dict.cart}
              </Link>
              <Link href="/favori" className="block text-zinc-600 hover:underline dark:text-zinc-400">
                {dict.footer_favorites}
              </Link>
            </div>
            <div className="space-y-2">
              <div className="font-medium">{dict.footer_newsletter_title}</div>
              <div className="text-zinc-600 dark:text-zinc-400">{dict.footer_newsletter_desc}</div>
            </div>
          </div>
          <div className="w-full border-t border-zinc-200 pt-6 text-center text-xs text-zinc-500 dark:border-zinc-800">
            © {new Date().getFullYear()} Gourmet Nuts {dict.footer_copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}


