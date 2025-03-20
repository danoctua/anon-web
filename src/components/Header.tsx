'use client';

import Image from 'next/image';
import Logo from '@/components/Logo';
import NavIconLink from '@/components/NavIconLink';
import LanguageSwitcher from './LanguageSwitcher';
import { en } from '@/translations/en';
import { ru } from '@/translations/ru';

interface HeaderProps {
    locale: string;
}

export default function Header({ locale }: HeaderProps) {
    const t = locale === 'en' ? en : ru;

    return (
        <>
            <div className="h-[72px]" aria-hidden="true" />
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        <Logo />

                        <div className="flex items-center space-x-4">
                            <NavIconLink
                                href="https://t.me/anon_club"
                                icon="/icons/telegram.svg"
                                alt={t.nav.telegram}
                            />
                            <NavIconLink
                                href="https://twitter.com/anonclub8"
                                icon="/icons/x.svg"
                                alt={t.nav.twitter}
                            />
                            <LanguageSwitcher currentLocale={locale} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
} 