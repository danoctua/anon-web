import {useTranslations} from "next-intl";
import SectionHeading from "@/components/SectionHeading";
import {LINKS} from "@/lib/links";

const PARTNERS = [
    {key: "catizen", url: "https://t.me/anon_club/64"},
    {key: "fish", url: "https://t.me/anon_club/59"},
] as const;

export default function Partners() {
    const t = useTranslations("Partners");

    return (
        <section id="partners" className="px-4 md:px-[clamp(16px,3vw,40px)] pt-10 md:pt-16 pb-16 md:pb-30">
            <SectionHeading title={t("title")} kicker={t("kicker")}/>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line">
                {PARTNERS.map(({key, url}, i) => (
                    <a key={key} href={url} target="_blank" rel="noopener noreferrer"
                       className="partner reveal flex flex-col gap-5 md:gap-6 py-7 md:py-9 md:px-8 md:first:pl-0 border-b md:border-b-0 md:border-r border-line md:min-h-[400px]">
                        <span className="flex justify-between items-baseline font-mono text-[11px] md:text-xs uppercase tracking-[0.08em] text-muted">
                            <span>P/{String(i + 1).padStart(2, "0")}</span>
                            <span aria-hidden="true">↗</span>
                        </span>
                        <h3 className="m-0 text-[44px] md:text-[clamp(44px,4.6vw,72px)] leading-[0.95] font-medium tracking-[-0.04em]">
                            {t(`${key}.title`)}
                        </h3>
                        <p className="m-0 text-base leading-relaxed text-soft whitespace-pre-line">
                            {t(`${key}.description`)}
                        </p>
                        <span className="mt-auto pt-2 flex items-center gap-2 font-mono text-[11px] md:text-xs uppercase tracking-[0.08em]">
                            {t("readMore")} <span className="partner-arrow" aria-hidden="true">→</span>
                        </span>
                    </a>
                ))}

                {/* "You" — the open seat, styled as the invitation */}
                <a href={LINKS.join} target="_blank" rel="noopener noreferrer"
                   className="partner partner-accent reveal flex flex-col gap-5 md:gap-6 mt-7 md:mt-0 p-5 md:p-8 bg-paper text-ink md:min-h-[400px]">
                    <span className="flex justify-between items-baseline font-mono text-[11px] md:text-xs uppercase tracking-[0.08em] text-[#5A554C]">
                        <span>P/03</span>
                        <span aria-hidden="true">●</span>
                    </span>
                    <h3 className="m-0 text-[44px] md:text-[clamp(44px,4.6vw,72px)] leading-[0.95] font-medium tracking-[-0.04em]">
                        {t("you.title")}
                    </h3>
                    <p className="m-0 text-base leading-relaxed text-[#3A3732]">
                        {t("you.description")}
                    </p>
                    <span className="mt-auto pt-2 flex items-center gap-2 font-mono text-[11px] md:text-xs uppercase tracking-[0.08em]">
                        {t("you.cta")} <span className="partner-arrow" aria-hidden="true">→</span>
                    </span>
                </a>
            </div>
        </section>
    );
}
