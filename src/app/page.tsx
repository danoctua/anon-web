import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Achievements from "@/components/Achievements";
import Price from "@/components/Price";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Ticker/>
                <Achievements/>
                <Price/>
                <Partners/>
            </main>
            <Footer/>
        </>
    );
}
