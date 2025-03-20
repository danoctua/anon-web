import {FC, PropsWithChildren, ReactNode} from "react";
import Section from "@/components/Section";

const Timeline: FC<PropsWithChildren<{
    title: string;
    children: ReactNode;
}>> = ({title, children}) => {
    return (
        <Section
            title={title}
            isAccent
        >
            <div className="max-w-4xl mx-auto space-y-10">
                {children}
            </div>

        </Section>
    )
}

export default Timeline;
