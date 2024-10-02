"use client"
// import { useState, useEffect } from 'react';

// const AnimatedBackground: React.FC = () => {
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       setMouseX(event.clientX);
//       setMouseY(event.clientY);
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       className="relative w-screen h-screen bg-cover bg-center"
//       style={{
//         backgroundImage: `url('/your-image-path.jpg')`,
//         transform: `translate(${mouseX / 50}px, ${mouseY / 50}px)`,
//         transition: 'transform 0.1s ease-out',
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//         <h1 className="text-white text-4xl font-bold">Animated Background</h1>
//       </div>
//     </div>
//   );
// };

// export default AnimatedBackground;


import { useState, useEffect } from "react";
import { useGSAP } from '@gsap/react';

interface BackgroundAnimationProps {
  imageUrl: string;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ imageUrl }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useGSAP(() => {
    // Track mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX / window.innerWidth);
      setMouseY(event.clientY / window.innerHeight);
    };

    // Track scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-0"
      style={{
        marginTop:-200,
        marginLeft:-40,
        marginRight:-40,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover", // Ensure image covers entire width and height
        backgroundPosition: "center", // Keep the background centered
        backgroundRepeat: "no-repeat",
        transform: `translate(${mouseX * 15}px, ${Math.max(0, mouseY * 30 + scrollY * 0.05)}px)`, // Adjust transform values for smoother animation
        transition: "transform 0.1s ease-out", // Smooth transition for movement
        opacity: 0.40, // 20% opacity for transparency
        zIndex: -1, // Behind content
      }}
    ></div>
  );
};

export default BackgroundAnimation;
