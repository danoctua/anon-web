import React, {FC, PropsWithChildren} from "react";
import Image from "next/image";

const TimelineItem: FC<PropsWithChildren<{
    title: string;
    status: "tbd" | "done" | "in-progress";
}>> = ({title, status}) => {
    let statusImgSrc
    let fontStyleClasses: string[] = []

    switch (status) {
        case "done":
            statusImgSrc = "/bullets/bullet-done.webp"
            fontStyleClasses = ["text-radial-green", "text-radial-green-done"]
            break
        case "in-progress":
            statusImgSrc = "/bullets/bullet-in-progress.webp"
            fontStyleClasses = ["text-radial-green"]
            break
        default:
            statusImgSrc = "/bullets/bullet.webp"
            break
    }

    return (
        <div className={"flex md:items-center items-start gap-6"}>
            <Image
                src={statusImgSrc}
                width={40}
                height={40}
                alt={status}
                className={"md:w-10 md:h-10 w-8 h-8"}
            />
            <span
                className={`md:text-3xl text-lg font-semibold ${fontStyleClasses.join(" ")}`}
            >
                {title}
            </span>
        </div>
    )
}

export default TimelineItem;
