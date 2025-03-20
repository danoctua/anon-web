'use client';

import {useSearchParams} from 'next/navigation';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import {en} from '@/translations/en';
import {ru} from '@/translations/ru';
import {Suspense} from "react";
// import Timeline from "@/components/Timeline";
// import TimelineItem from "@/components/TimelineItem";


const Home = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeContent/>
        </Suspense>
    )
}


const HomeContent = () => {
    const searchParams = useSearchParams();
    const locale = searchParams.get('locale') || 'en';
    const t = locale === 'en' ? en : ru;

    return (
        <main className="min-h-screen flex flex-col">
            <div className={"flex-1"}>
                <Header locale={locale}/>
                <HeroBanner translations={t.hero}/>

                {/* Numbers Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">*/}
                        {/*    <div className="styled-pill-rare">{t.numbers.users}</div>*/}
                        {/*    <div className="text-center">*/}
                        {/*        <div*/}
                        {/*            className="text-3xl md:text-4xl font-bold text-[#ffbaab] mb-4">{t.numbers.transactions}</div>*/}
                        {/*    </div>*/}
                        {/*    <div className="text-center">*/}
                        {/*        <div className="text-3xl md:text-4xl font-bold text-[#b4baec] mb-4">{t.numbers.volume}</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://t.me/community_bot/club"
                               className="px-6 py-2 bg-[#f9e3b0] text-black rounded-full hover:bg-[#f9e3b0]/90 transition-colors">
                                {t.buttons.join}
                            </a>
                            <a href="https://t.me/anon_club/2"
                               className="px-6 py-2 border border-[#f9e3b0] text-[#f9e3b0] rounded-full hover:bg-[#f9e3b0]/10 transition-colors">
                                {t.buttons.history}
                            </a>
                            <a href="https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=ANON"
                               className="px-6 py-2 border border-[#f9e3b0] text-[#f9e3b0] rounded-full hover:bg-[#f9e3b0]/10 transition-colors">
                                {t.buttons.swap}
                            </a>
                            <a href="https://fragment.com/numbers"
                               className="px-6 py-2 border border-[#f9e3b0] text-[#f9e3b0] rounded-full hover:bg-[#f9e3b0]/10 transition-colors">
                                {t.buttons.getNumber}
                            </a>
                        </div>
                    </div>
                </section>


                {/* Completed Items Section */}
                {/*<Timeline title={t.milestones.title}>*/}
                {/*    {t.milestones.items.map((item, index) => (*/}
                {/*        <TimelineItem key={index} title={item} status={"done"}/>*/}
                {/*    ))}*/}
                {/*</Timeline>*/}
            </div>

            <footer className="py-8 text-center text-white/60">
                <div className="container mx-auto px-4">
                    <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
                </div>
            </footer>
        </main>
    );
}


export default Home;
