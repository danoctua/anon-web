'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'ru' : 'en';
    router.push(`/?locale=${newLocale}`);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      aria-label={`Switch to ${currentLocale === 'en' ? 'Russian' : 'English'}`}
    >
      <Image
        src="/globe.svg"
        alt="Language"
        width={20}
        height={20}
        className="brightness-0 invert"
      />
      <span className="text-white font-medium">
        {currentLocale === 'en' ? 'RU' : 'EN'}
      </span>
    </button>
  );
} 