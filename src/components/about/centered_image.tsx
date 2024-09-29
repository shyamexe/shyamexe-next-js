"use client"
import Image from 'next/image';
import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CenteredImageWithBackgroundProps {
    children?: ReactNode;
}

const CenteredImageWithBackground = ({ children }: CenteredImageWithBackgroundProps) => {

    const imageRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLImageElement>(null);
    const childrenRef = useRef<HTMLDivElement>(null); // Ref for children

    useEffect(() => {
        const el = backgroundRef.current;
        const triggerEl = childrenRef.current;

        if (el && triggerEl) {
            gsap.fromTo(el, {
                rotation: 0,
            }, {
                rotation: 180,

                scrollTrigger: { 
                    trigger: triggerEl, // Trigger based on the children section
                    start: "top 80%", // Start rotation when children reach 60% of the viewport height
                    end:"top 10%",
                    scrub: 3, // Smoothly animates as you scroll 
                },
            });
        }
    }, []);

    return (
        <div className="max-w-[1366px] mx-auto items-center space-y-4 sm:space-y-0 sm:space-x-10 px-4">
            <div className="relative flex justify-center items-center">
                {/* Background Image with Specific Size */}


                <Image
                    ref={backgroundRef}
                    src="/rocker.png"
                    alt="shyamjith background"
                    width={949}  // Set the desired width
                    height={949} // Set the desired height
                // Optional: Uncomment if you want a transparent background
                />



                {/* Front Image */}
                <div ref={imageRef} className="absolute inset-0 flex justify-center items-center">
                    <Image
                        src="/new_user.png"
                        alt="shyamjith"
                        width={484}
                        height={484}
                        className="relative z-10" // Ensures it stays above the background
                    />
                </div>
            </div>
            {/* Children rendered below */}
            <div ref={childrenRef} className="mt-4">{children}</div>
        </div>
    );
};

export default CenteredImageWithBackground;