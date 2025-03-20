import React, {FC, PropsWithChildren, ReactNode} from 'react';


const Section: FC<PropsWithChildren<{
    title: string;
    isAccent?: boolean;
    children: ReactNode;
}>> = ({title, isAccent, children}) => {
    return (
        <section className={"py-20"}>
            <div className="container mx-auto px-4">
                <h2 className={`text-5xl text-center mb-12 ${isAccent ? "text-radial-pink" : ""}`}>{title}</h2>
                {children}
            </div>
        </section>
    )
}

export default Section;