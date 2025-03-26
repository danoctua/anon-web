import Image from 'next/image';
import {useLocale} from "next-intl";
import {setLocale} from "@/utils/setLocale";
import {useTransition} from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const [ isPending, startTransition ] = useTransition();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ru' : 'en';
    startTransition(() => setLocale(newLocale).then());
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      aria-label={`Switch to ${locale === 'en' ? 'Russian' : 'English'}`}
      disabled={isPending}
    >
      <Image
        src="/static/icons/globe.svg"
        alt="Language"
        width={20}
        height={20}
        className="brightness-0 invert"
      />
      <span className="text-white font-medium">
        {locale === 'en' ? 'РУ' : 'EN'}
      </span>
    </button>
  );
} 