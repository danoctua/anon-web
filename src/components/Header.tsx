'use client';

import {useState} from "react";
import {useTranslations} from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {LINKS} from "@/lib/links";

const SECTIONS = [
    {id: "achievements", index: "01"},
    {id: "price", index: "02"},
    {id: "partners", index: "03"},
] as const;

export default function Header() {
    const t = useTranslations("Navigation");
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <header className="border-b border-line-soft px-4 md:px-[clamp(16px,3vw,40px)]">
            <nav aria-label="Main"
                 className="flex items-center justify-between gap-3 min-h-15 md:min-h-16 font-mono text-[11px] md:text-xs uppercase tracking-[0.08em]">
                <span className="text-muted">{t("tagline")}</span>

                {/* Desktop */}
                <span className="hidden md:flex flex-wrap gap-2">
                    {SECTIONS.map(({id, index}) => (
                        <a key={id} href={`#${id}`} className="link-underline py-3.5 px-1.5">
                            ({index}) {t(id)}
                        </a>
                    ))}
                </span>
                <span className="hidden md:flex items-center gap-1">
                    <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer"
                       className="link-underline py-3.5 px-2">{t("telegram")}</a>
                    <a href={LINKS.twitter} target="_blank" rel="noopener noreferrer"
                       className="link-underline py-3.5 px-2">{t("twitter")}</a>
                    <LanguageSwitcher className="ml-2"/>
                </span>

                {/* Mobile */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? t("closeMenu") : t("openMenu")}
                    className="md:hidden h-11 px-3.5 border border-line bg-transparent text-fg uppercase tracking-[0.08em] cursor-pointer"
                >
                    {open ? t("close") : t("menu")}
                </button>
            </nav>

            {open && (
                <div id="mobile-menu" className="md:hidden anim-fade pb-5 pt-2">
                    {SECTIONS.map(({id, index}) => (
                        <a key={id} href={`#${id}`} onClick={close}
                           className="row flex items-baseline gap-3.5 py-4 border-b border-line-soft text-[30px] font-medium tracking-[-0.03em]">
                            <span className="row-muted font-mono text-[11px] text-muted">{index}</span>
                            {t(id)}
                        </a>
                    ))}
                    <div className="flex gap-2 mt-4 font-mono text-[11px] uppercase tracking-[0.08em]">
                        <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer"
                           className="flex-1 h-11 border border-line flex items-center justify-center">{t("telegram")}</a>
                        <a href={LINKS.twitter} target="_blank" rel="noopener noreferrer"
                           className="flex-1 h-11 border border-line flex items-center justify-center">{t("twitter")}</a>
                        <LanguageSwitcher className="flex-1"/>
                    </div>
                </div>
            )}
        </header>
    );
}
