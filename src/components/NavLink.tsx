import Link from 'next/link';
import {ReactNode} from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  isAccent?: boolean;
}

export default function NavLink({ href, children, isAccent = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-white hover:text-[#f9e3b0] transition-colors ${
        isAccent ? 'text-[#f9e3b0]' : ''
      }`}
    >
      {children}
    </Link>
  );
} 