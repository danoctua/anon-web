import Logo from '@/components/Logo';
import NavIconLink from '@/components/NavIconLink';
import LanguageSwitcher from './LanguageSwitcher';
import {useTranslations} from "next-intl";


export default function Header() {

    const t = useTranslations("Navigation")

    return (
        <>
            <div className="h-[72px]" aria-hidden="true"/>
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        <Logo/>

                        <div className="flex items-center space-x-4">
                            <NavIconLink
                                href="https://t.me/anon_club"
                                icon="/static/icons/telegram.svg"
                                alt={t('telegram')}
                            />
                            <NavIconLink
                                href="https://twitter.com/anonclub8"
                                icon="/static/icons/x.svg"
                                alt={t('twitter')}
                            />
                            <LanguageSwitcher/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
} 