import type {Metadata, Viewport} from "next";
import {Inter_Tight, JetBrains_Mono} from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import Script from "next/script";
import {NextIntlClientProvider} from "next-intl";
import {getLocale} from "next-intl/server";

const interTight = Inter_Tight({
    variable: "--font-inter-tight",
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    title: "ANON",
    description: "From 8 Club with love",
    icons: [
        {url: "/static/favicons/favicon-16.png", sizes: "16x16", type: "image/png"},
        {url: "/static/favicons/favicon-32.png", sizes: "32x32", type: "image/png"},
        {url: "/static/favicons/favicon-160.png", sizes: "160x160", type: "image/png"},
    ],
    openGraph: {
        title: "ANON",
        description: "DAO community. From 8 Club with love",
        images: [
            {url: "/anon.png", width: 1200, height: 630, alt: "ANON"},
        ],
        url: "https://anon.tg",
        type: "website",
    }
};

export const viewport: Viewport = {
    themeColor: "#0A0A0A",
};

export default async function RootLayout(
    {children}: Readonly<{ children: ReactNode }>,
) {
    const locale = await getLocale();
    return (
        <html lang={locale} className={`${interTight.variable} ${jetbrainsMono.variable}`}>
        <body className="antialiased">
        <Script src="https://widgets.coingecko.com/gecko-coin-price-chart-widget.js"></Script>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
