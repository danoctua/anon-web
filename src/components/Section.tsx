import React, {FC, PropsWithChildren, ReactNode} from 'react';


const Section: FC<PropsWithChildren<{
    title: string;
    isAccent?: boolean;
    children: ReactNode;
}>> = ({title, isAccent, children}) => {
    return (
        <section className={"py-8"}>
            <div className="container max-w-[888px] mx-auto px-4">
                <h2 className={`text-4xl md:text-5xl font-bold pt-12 pb-8 ${isAccent ? "text-radial-pink" : ""}`}>{title}</h2>
                {children}
            </div>
        </section>
    )
}

export default Section;