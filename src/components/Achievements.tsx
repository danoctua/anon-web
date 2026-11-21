import {useTranslations} from "next-intl";
import SectionHeading from "@/components/SectionHeading";

const ACHIEVEMENTS = [
    {key: "holders", url: "https://t.me/anon_club/34"},
    {key: "listings", url: "https://t.me/anon_club/34"},
    {key: "volume", url: "https://t.me/anon_club/34"},
    {key: "community", url: "https://t.me/anon_club/263"},
    {key: "dao", url: "https://t.me/anon_club/226"},
] as const;

export default function Achievements() {
    const t = useTranslations("Achievements");

    return (
        <section id="achievements" className="px-4 md:px-[clamp(16px,3vw,40px)] pt-16 md:pt-28 pb-10 md:pb-16">
            <SectionHeading title={t("title")} kicker={t("kicker")}/>
            <ol className="list-none m-0 p-0 border-t border-line">
                {ACHIEVEMENTS.map(({key, url}, i) => (
                    <li key={key} className="reveal border-b border-line">
                        <a href={url} target="_blank" rel="noopener noreferrer"
                           className="row grid grid-cols-[30px_minmax(0,1fr)_auto] md:grid-cols-[56px_minmax(0,1fr)_minmax(0,2fr)_auto] items-baseline gap-x-3.5 md:gap-x-8 gap-y-2 py-5 md:py-7 px-1 md:px-0">
                            <span className="row-muted font-mono text-[11px] md:text-[13px] text-muted">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[28px] md:text-[clamp(28px,3vw,44px)] font-medium tracking-[-0.03em]">
                                {t(`${key}.title`)}
                            </span>
                            <span className="row-muted order-4 md:order-none col-start-2 col-span-2 md:col-start-auto md:col-span-1 text-base md:text-lg leading-normal text-soft">
                                {t(`${key}.description`)}
                            </span>
                            <span className="row-arrow text-xl md:text-2xl" aria-hidden="true">→</span>
                        </a>
                    </li>
                ))}
            </ol>
        </section>
    );
}
