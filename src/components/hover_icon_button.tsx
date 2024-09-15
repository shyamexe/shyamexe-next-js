// components/HoverIconButton.tsx
import React from 'react';

type HoverIconButtonProps = {
  icon: JSX.Element;
  href: string;
  fromColor: string; // Gradient start color
  toColor: string;   // Gradient end color
};

const HoverIconButton: React.FC<HoverIconButtonProps> = ({ icon, href, fromColor, toColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-full bg-transparent hover:bg-gradient-to-r transition duration-300 ease-in-out 
                  hover:from-${fromColor} hover:to-${toColor}`}
    >
      <span className="text-gray-700 hover:text-white">{icon}</span>
    </a>
  );
};

export default HoverIconButton;
