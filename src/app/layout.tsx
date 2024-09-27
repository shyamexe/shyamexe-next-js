import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppBarButton from "@/components/app_bar_button";
import HoverIconButton from "@/components/hover_icon_button";
import { FaInstagram, FaGithub } from 'react-icons/fa';
import Starfield from 'react-starfield';
import Link from "next/link";
import BackgroundAnimation from "@/components/animated_backgroun";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shyamjith",
  description: "I'm a Software Engineer specializing in Flutter development from India 🇮🇳. I love building beautiful, responsive, and performant mobile and web applications",
};

export default function RootLayout({
  children,
}: Readonly<{

  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
        {/* <BackgroundAnimation imageUrl="/bg.jpg" /> */}
          <Starfield
            starCount={1000}
            starColor={[255, 255, 255]}
            speedFactor={0.02}
            backgroundColor="black"

          />
          
          <div className="flex space-x-4 justify-between p-4">
            <AppBarButton

            />


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
          {children}
          <div className="flex justify-end px-5 py-3 items-center">
            <span className="text-sm px-5">Say Hi!</span>
            
            <Link
              href="mailto:shyamjith38@hotmail.com"
              // href="/path-to-your-file.pdf" 
              // download 
              className="bg-gray-800 text-white hover:text-[#393E46] px-4 py-2 rounded-full hover:bg-[#EEEEEE]  transition-colors duration-300 ease-in-out">
              Reach out
            </Link>
          </div>
          
        </>
      </body>
    </html>
  );
}
