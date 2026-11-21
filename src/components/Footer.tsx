import {useLocale, useTranslations} from "next-intl";
import {LINKS} from "@/lib/links";

export default function Footer() {
    const t = useTranslations("Footer");
    const locale = useLocale();
    // "Присоединяйся" is ~1.6× longer than "Join us", so it needs a smaller phone size to fit 358px.
    const joinSize = locale === "ru" ? "text-[clamp(30px,9.5vw,64px)]" : "text-[clamp(36px,16vw,64px)]";
    const nav = useTranslations("Navigation");
    const hero = useTranslations("Hero.buttons");

    const links = [
        {href: LINKS.telegram, label: nav("telegram")},
        {href: LINKS.twitter, label: nav("twitter")},
        {href: LINKS.swap, label: hero("swap")},
        {href: LINKS.getNumber, label: hero("getNumber")},
    ];

    return (
        <footer className="border-t border-line-soft px-4 md:px-[clamp(16px,3vw,40px)] pt-10 md:pt-14 pb-7 md:pb-8">
            <a href={LINKS.join} target="_blank" rel="noopener noreferrer"
               className={`link-underline inline-block ${joinSize} md:text-[clamp(48px,9vw,140px)] leading-none tracking-[-0.05em] font-semibold`}>
                {t("join")}&nbsp;→
            </a>
            <div className="mt-9 md:mt-14 flex flex-col-reverse md:flex-row md:flex-wrap md:justify-between gap-5 md:gap-4 font-mono text-[11px] md:text-xs uppercase tracking-[0.08em] text-muted">
                <span>© {new Date().getFullYear()} {t("rights")}</span>
                <span className="grid grid-cols-2 border-t border-line-soft md:border-0 md:flex md:flex-wrap md:gap-5">
                    {links.map(({href, label}) => (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                           className="link-underline py-4 md:py-0 border-b border-line-soft md:border-0 text-fg md:text-muted justify-self-start">
                            {label}
                        </a>
                    ))}
                </span>
            </div>
        </footer>
    );
}
