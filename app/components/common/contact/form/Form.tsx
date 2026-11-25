"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useDict } from "@/app/components/common/i18n/LocaleProvider";
import { sendContact, type ContactState } from "@/app/[locale]/contact/actions";
import { getWebsite } from "@/lib/constants";
import { useLocaleCode } from "@/app/components/common/i18n/LocaleProvider";

const field =
  "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-900";

function Submit({ label, pending }: { label: string; pending: string }) {
  const { pending: isPending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={isPending}
      className="mt-1 rounded-lg bg-emerald-700 px-5 py-2.5 font-medium text-white transition hover:bg-emerald-800 disabled:opacity-60"
    >
      {isPending ? pending : label}
    </button>
  );
}

export default function ContactForm() {
  const dict = useDict();
  const locale = useLocaleCode();
  const [state, action] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });
  const v = state.values;

  const mailto = v
    ? `mailto:${getWebsite(locale).email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(`${v.message}\n\n— ${v.name} (${v.email})`)}`
    : "#";

  if (state.status === "success") {
    return (
      <p role="status" className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200">
        {dict.contact_success}
      </p>
    );
  }

  return (
    <form action={action} className="grid gap-4" noValidate={false}>
      <div>
        <label htmlFor="c-name" className="mb-1 block text-sm font-medium">{dict.name}</label>
        <input id="c-name" name="name" required minLength={2} maxLength={100} autoComplete="name" defaultValue={v?.name} className={field} />
      </div>
      <div>
        <label htmlFor="c-email" className="mb-1 block text-sm font-medium">{dict.email}</label>
        <input id="c-email" name="email" type="email" required maxLength={200} autoComplete="email" defaultValue={v?.email} className={field} />
      </div>
      <div>
        <label htmlFor="c-subject" className="mb-1 block text-sm font-medium">{dict.contact_subject}</label>
        <input id="c-subject" name="subject" required minLength={2} maxLength={150} defaultValue={v?.subject} className={field} />
      </div>
      <div>
        <label htmlFor="c-message" className="mb-1 block text-sm font-medium">{dict.message}</label>
        <textarea id="c-message" name="message" required minLength={10} maxLength={3000} rows={6} defaultValue={v?.message} className={`${field} min-h-36`} />
      </div>
      {/* Honeypot: insanlara görünmez */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div aria-live="polite" className="text-sm">
        {state.status === "invalid" && <p className="text-red-600">{dict.contact_invalid}</p>}
        {state.status === "error" && <p className="text-red-600">{dict.contact_error}</p>}
        {state.status === "fallback" && (
          <p className="text-zinc-700 dark:text-zinc-300">
            {dict.contact_fallback}{" "}
            <a href={mailto} className="font-medium text-emerald-700 underline dark:text-emerald-400">
              {dict.contact_fallback_btn}
            </a>
          </p>
        )}
      </div>

      <Submit label={dict.send} pending={dict.contact_sending} />
    </form>
  );
}
