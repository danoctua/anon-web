'use client';

import Image from 'next/image';

interface NavIconLinkProps {
  href: string;
  icon: string;
  alt: string;
}

export default function NavIconLink({ href, icon, alt }: NavIconLinkProps) {
  return (
    <a
      href={href}
      className="text-white hover:text-[#f9e3b0] transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={icon}
        alt={alt}
        width={24}
        height={24}
        className="brightness-0 invert"
      />
    </a>
  );
} 