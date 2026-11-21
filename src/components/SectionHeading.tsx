export default function SectionHeading({title, kicker}: { title: string; kicker: string }) {
    return (
        <div className="reveal flex flex-col-reverse md:flex-row md:flex-wrap md:justify-between md:items-end gap-2.5 md:gap-4 mb-6 md:mb-10">
            <h2 className="m-0 text-5xl md:text-[clamp(44px,6.4vw,96px)] leading-[0.95] tracking-[-0.045em] font-semibold">
                {title}
            </h2>
            <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.08em] text-muted">{kicker}</span>
        </div>
    );
}
