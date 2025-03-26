import Tile from "@/components/Tile";
import Section from "@/components/Section";
import {useTranslations} from "next-intl";

const ACHIEVEMENTS = {
    holders: {
        icon: <></>,
        url: "https://t.me/anon_club/34"
    },
    listings: {
        icon: <></>,
        url: "https://t.me/anon_club/34",
    },
    volume: {
        icon: <></>,
        url: "https://t.me/anon_club/34",
    },
    community: {
        icon: <></>,
        url: "https://t.me/anon_club/263",
    },
    dao: {
        icon: <></>,
        url: "https://t.me/anon_club/226",
    }
}


const Achievements = () => {
    const t = useTranslations("Achievements")

    return (
        <Section title={t("title")} isAccent>
            <div className={"grid grid-cols-auto-fill gap-4"}>
                {
                    Object.entries(ACHIEVEMENTS).map(([type, content], index) => (
                        <Tile
                            key={`achievement-${index}`}
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

export default Achievements;
