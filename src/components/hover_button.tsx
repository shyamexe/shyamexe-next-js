import React from 'react';

type HoverButtonProps = {
  text: string;
  onClick?: () => void;
};

const HoverButton: React.FC<HoverButtonProps> = ({ text, onClick }) => {
  return (
    <a
    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-0"
    // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
  >
    {text}
  </a>



    // <button
    //   className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-700"
    //   onClick={onClick}
    // >
    //   {text}
    // </button>
  );
};

export default HoverButton;
