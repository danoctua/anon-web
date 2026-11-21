import {useTranslations} from "next-intl";
import {Fragment} from "react";

const ITEMS = ["holders", "volume", "marketCap", "listings"] as const;

export default function Ticker() {
    const t = useTranslations("Ticker");

    // Rendered twice so the -50% loop is seamless; the copy is hidden from screen readers.
    const run = (hidden: boolean) => ITEMS.map((key) => (
        <Fragment key={`${key}-${hidden}`}>
            <span aria-hidden={hidden || undefined}>{t(key)}</span>
            <span aria-hidden="true">●</span>
        </Fragment>
    ));

    return (
        <section aria-label={t("label")} className="bg-paper text-ink overflow-hidden">
            <div className="anim-ticker flex w-max gap-7 md:gap-12 py-4 md:py-[22px] text-[17px] md:text-[clamp(18px,1.8vw,26px)] font-medium tracking-[-0.01em] whitespace-nowrap uppercase">
                {run(false)}
                {run(true)}
            </div>
        </section>
    );
}
