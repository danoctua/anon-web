import {FC, PropsWithChildren, ReactNode} from "react";
import Link from "next/link";


const ActionButtons: FC<PropsWithChildren<{
    children: ReactNode;
}>> = ({children}) => {
    return (
        <div className="flex flex-col flex-wrap flex-row gap-4 items-center justify-center">
            {children}
        </div>
    )
}

export const ActionButton: FC<PropsWithChildren<{
    text: string;
    href: string;
    isAccent?: boolean;
}>> = ({text, href, isAccent}) => {
    return (
        <Link className={`action-button${isAccent ? "-accent" : ""}`} href={href}>
            {text}
        </Link>
    )
}


export default ActionButtons;
