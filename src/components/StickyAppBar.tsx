"use client"; 
import AppBarButton from "@/components/app_bar_button";
import HoverIconButton from "@/components/hover_icon_button";
import { FaInstagram, FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const StickyAppBar = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".appbar",
        start: "top top",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(".appbar", { y: -100 }, { y: 0, duration: 0.5 });
  }, []);

  return (
    <div className="appbar sticky top-0 bg-black shadow-md z-50 p-4 flex space-x-4 justify-between">

     {/* <div className="appbar fixed top-0 left-0 right-0 bg-transparent border-b  border-gray-300 z-50 p-4 flex space-x-4 justify-between"> */}
      <AppBarButton />

      <div className="flex">
        {/* Instagram Button with custom gradient */}
        <HoverIconButton
          icon={<FaInstagram size={24} />}
          href="https://www.instagram.com/shyam.exe/"
          fromColor="pink-500"
          toColor="yellow-500"
        />

        {/* GitHub Button with different custom gradient */}
        <HoverIconButton
          icon={<FaGithub size={24} />}
          href="https://github.com/shyamexe"
          fromColor="gray-800"
          toColor="black"
        />
      </div>
    </div>
  );
};

export default StickyAppBar;
