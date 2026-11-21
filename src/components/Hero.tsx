import {useTranslations} from "next-intl";
import Wordmark from "@/components/Wordmark";
import {LINKS} from "@/lib/links";

export default function Hero() {
    const t = useTranslations("Hero");

    const secondary = [
        {href: LINKS.swap, label: t("buttons.swap")},
        {href: LINKS.getNumber, label: t("buttons.getNumber")},
        {href: LINKS.history, label: t("buttons.history")},
    ];

    return (
        <section id="top" className="px-4 md:px-[clamp(16px,3vw,40px)] pt-7 md:pt-[clamp(32px,5vw,64px)]">
            <h1 className="m-0">
                <span className="sr-only">{t("srTitle")}</span>
                <Wordmark className="anim-wipe block w-full h-auto text-fg"/>
            </h1>

            <div className="mt-6 md:mt-[clamp(32px,4vw,56px)] pt-5 md:pt-8 pb-9 md:pb-14 border-t border-line-soft flex flex-col md:flex-row md:flex-wrap md:justify-between gap-[22px] md:gap-x-12 md:gap-y-8">
                <p className="anim-fade delay-1 md:flex-[1_1_200px] font-mono text-[11px] md:text-xs uppercase tracking-[0.08em] text-muted m-0">
                    {t("kicker")}
                    <span className="md:hidden"> · </span>
                    <br className="hidden md:block"/>
                    {t("kickerSub")}
                </p>

                <p className="anim-fade delay-2 md:flex-[3_1_520px] m-0 text-[clamp(30px,9vw,36px)] md:text-[clamp(36px,4.6vw,68px)] leading-[1.03] tracking-[-0.035em] font-medium [overflow-wrap:anywhere] md:[overflow-wrap:normal]">
                    {t.rich("statement", {
                        accent: (chunks) => (
                            <span className="text-gradient italic font-normal pr-[0.06em]">{chunks}</span>
                        ),
                    })}
                </p>

                <div className="anim-fade delay-3 md:flex-[1_1_220px] flex flex-col md:gap-0.5 text-base md:text-lg font-medium">
                    <a href={LINKS.join} target="_blank" rel="noopener noreferrer"
                       className="btn-paper flex justify-between items-center h-14 px-[18px] bg-paper text-ink text-lg md:mb-2.5">
                        {t("buttons.join")} <span aria-hidden="true">→</span>
                    </a>
                    <div className="grid grid-cols-3 border border-t-0 border-line md:flex md:flex-col md:border-0">
                        {secondary.map(({href, label}, i) => (
                            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                               className={`h-13 md:h-auto flex items-center justify-center text-center text-[15px] md:text-lg md:self-start md:py-2.5 link-underline ${i < secondary.length - 1 ? "border-r border-line md:border-0" : ""}`}>
                                {label}&nbsp;↗
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
