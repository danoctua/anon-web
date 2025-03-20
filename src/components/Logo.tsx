import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/logos/logo.svg"
        alt="ANON"
        width={133}
        height={45}
        className="h-5 w-auto"
      />
    </Link>
  );
} 