'use client';

import {useLocale, useTranslations} from "next-intl";
import {setLocale} from "@/utils/setLocale";
import {useTransition} from "react";

export default function LanguageSwitcher({className = ""}: { className?: string }) {
    const locale = useLocale();
    const t = useTranslations("Navigation");
    const [isPending, startTransition] = useTransition();

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'ru' : 'en';
        startTransition(() => setLocale(newLocale).then());
    };

    return (
        <button
            type="button"
            onClick={toggleLanguage}
            disabled={isPending}
            aria-label={t("switchLanguage")}
            className={`h-11 px-3.5 border border-line bg-transparent font-mono text-[11px] md:text-xs uppercase tracking-[0.08em] cursor-pointer transition-colors hover:border-fg disabled:opacity-60 ${className}`}
        >
            <span className={locale === 'en' ? 'text-fg' : 'text-muted'}>EN</span>
            <span className="text-muted"> / </span>
            <span className={locale === 'ru' ? 'text-fg' : 'text-muted'}>РУ</span>
        </button>
    );
}
