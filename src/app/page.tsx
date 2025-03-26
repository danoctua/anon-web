'use client';

import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import {Suspense} from "react";
import Achievements from "@/components/Achievements";
import {useTranslations} from "next-intl";
import Partners from "@/components/Partners";


const Home = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeContent/>
        </Suspense>
    )
}


const HomeContent = () => {
    const t = useTranslations()
    return (
        <main className="min-h-screen flex flex-col">
            <div className={"flex-1"}>
                <Header/>
                <HeroBanner/>

                <Achievements/>

                <section>
                    {/* @ts-expect-error custom coingecko block */}
                    <gecko-coin-price-chart-widget locale="en" dark-mode="true" transparent-background="true" coin-id="anon-ton" initial-currency="usd" suppressHydrationWarning></gecko-coin-price-chart-widget>
                </section>

                <Partners/>


                {/* Completed Items Section */}
                {/*<Timeline title={t.milestones.title}>*/}
                {/*    {t.milestones.items.map((item, index) => (*/}
                {/*        <TimelineItem key={index} title={item} status={"done"}/>*/}
                {/*    ))}*/}
                {/*</Timeline>*/}
            </div>

            <footer className="py-8 text-center text-white/60">
                <div className="container mx-auto px-4">
                    <p>&copy; {new Date().getFullYear()} {t('Footer.rights')}</p>
                </div>
            </footer>
        </main>
    );
}


export default Home;
