import {FC, PropsWithChildren, ReactNode} from "react";
import Link from "next/link";


export const TileLogo: FC<PropsWithChildren<{
    src: string;
}>> = ({src}) => {
    return (
        <div className={"min-h-[200px] min-w-full bg-cover bg-center"} style={{backgroundImage: `url(${src})`}}></div>
    )
}


const Tile: FC<PropsWithChildren<{
    title: string;
    description: string;
    icon: ReactNode;
    url: string;
}>> = ({title, description, icon, url}) => {

    return (
        <Link
            className={"flex flex-col justify-start items-start bg-[#FFFFFF10] rounded-2xl overflow-hidden"}
            href={url}
        >
            <div className={"w-full"}>
                {icon}
            </div>
            <div className={"flex flex-col gap-4 px-6 py-4"}>
                <div className={"text-3xl font-bold"}>
                    {title}
                </div>
                <div className={"flex-1"}>
                    {description}
                </div>
            </div>
        </Link>
    )
}

export default Tile;