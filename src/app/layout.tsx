import type {Metadata} from "next";
import {Inter, Geist_Mono} from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";
import {Analytics} from "@vercel/analytics/react"

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
        {url: "/favicons/favicon-16.png", sizes: "16x16", type: "image/png"},
        {url: "/favicons/favicon-32.png", sizes: "32x32", type: "image/png"},
        {url: "/favicons/favicon-160.png", sizes: "160x160", type: "image/png"},
    ]
};

export default function RootLayout(
    {children,}: Readonly<{ children: ReactNode; }>
) {
    return (
        <html lang="en">
        <body
            className={`${inter.variable} ${geistMono.variable} antialiased min-h-screen`}
        >
        {children}
        <Analytics/>
        </body>
        </html>
    );
}
