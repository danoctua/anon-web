import {useLocale, useTranslations} from "next-intl";
import SectionHeading from "@/components/SectionHeading";
import {LINKS} from "@/lib/links";

export default function Price() {
    const t = useTranslations("Price");
    const locale = useLocale();

    return (
        <section id="price" className="px-4 md:px-[clamp(16px,3vw,40px)] py-10 md:py-16">
            <SectionHeading title={t("title")} kicker={t("kicker")}/>
            <div className="reveal flex flex-col-reverse md:flex-row border border-line">
                <div className="md:flex-[1_1_260px] p-0 md:p-7 md:border-r border-line flex flex-col gap-7">
                    <p className="hidden md:block m-0 text-lg leading-normal text-soft">{t("description")}</p>
                    <span className="hidden md:block font-mono text-xs uppercase tracking-[0.08em] text-muted">{t("source")}</span>
                    <div className="md:mt-auto flex flex-col gap-0.5">
                        <a href={LINKS.swap} target="_blank" rel="noopener noreferrer"
                           className="btn-paper flex justify-between items-center h-14 px-[18px] bg-paper text-ink text-[17px] font-medium">
                            {t("swap")} <span aria-hidden="true">↗</span>
                        </a>
                        <a href={LINKS.getNumber} target="_blank" rel="noopener noreferrer"
                           className="flex justify-between items-center h-14 px-[18px] border-t md:border border-line text-[17px] font-medium transition-colors hover:bg-white/5">
                            {t("getNumber")} <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>
                <div className="md:flex-[3_1_520px] min-w-0 min-h-[360px] md:min-h-[420px] p-3 md:p-6 border-b md:border-b-0 border-line bg-[linear-gradient(var(--color-grid)_1px,transparent_1px),linear-gradient(90deg,var(--color-grid)_1px,transparent_1px)] bg-[length:100%_44px,64px_100%] md:bg-[length:100%_64px,96px_100%]">
                    {/* @ts-expect-error custom CoinGecko web component */}
                    <gecko-coin-price-chart-widget locale={locale} dark-mode="true" transparent-background="true" coin-id="anon-ton" initial-currency="usd" suppressHydrationWarning></gecko-coin-price-chart-widget>
                </div>
            </div>
        </section>
    );
}
