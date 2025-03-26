import Tile, {TileLogo} from "@/components/Tile";
import Section from "@/components/Section";
import {useTranslations} from "next-intl";

const PARTNERS = {
    catizen: {
        icon: <TileLogo src={"/static/images/partner-catizen.jpg"}/>,
        url: "https://t.me/anon_club/64"
    },
    fish: {
        icon: <TileLogo src={"/static/images/partner-fish.jpg"}/>,
        url: "https://t.me/anon_club/59",
    },
    you: {
        icon: <TileLogo src={"/static/logos/logo_min.jpg"}/>,
        url: "tg://settings",
    }
}


const Partners = () => {
    const t = useTranslations("Partners")

    return (
        <Section title={t("title")} isAccent>
            <div className={"grid grid-cols-auto-fill gap-4"}>
                {
                    Object.entries(PARTNERS).map(([type, content], index) => (
                        <Tile
                            key={`partner-${index}`}
                            title={t(`${type}.title`)}
                            description={t(`${type}.description`)}
                            icon={content.icon}
                            url={content.url}
                        />
                    ))
                }
            </div>
        </Section>
    );
}

export default Partners;
