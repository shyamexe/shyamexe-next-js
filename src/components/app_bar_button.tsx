"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navLinks = [
  { name: "About", href: "/about" },

];

// type HoverButtonProps = {
//   text: string;
//   onClick?: () => void;
// };

const AppBarButton = () => {
  const pathname = usePathname();
  const buttonName = pathname == '/' ? "About" : "Back To Main"
  const buttonPath = pathname == '/' ? "/about" : "/"
  return (
    <Link
      className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-10 px-4 sm:px-5 sm:min-w-0"
      // target="_blank"
      href={buttonPath}
      key={buttonName}


    >
      {buttonName}
      {/* {text} */}
    </Link>


  );
};

export default AppBarButton;
