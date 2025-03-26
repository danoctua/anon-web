import type {Metadata} from "next";
import {Inter, Geist_Mono} from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";
import {Analytics} from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import {NextIntlClientProvider} from "next-intl";
import {getLocale} from "next-intl/server";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
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

export default async function RootLayout(
    {children}: Readonly<{ children: ReactNode }>,
) {
    const locale = await getLocale();
    return (
        <html lang={locale}>
        <body className={`${inter.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <Script src="https://widgets.coingecko.com/gecko-coin-price-chart-widget.js"></Script>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
