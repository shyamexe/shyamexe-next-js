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
    const childrenRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = backgroundRef.current;
        const triggerEl = childrenRef.current;

        if (el && triggerEl) {
            gsap.fromTo(el, {
                rotation: 0,
            }, {
                rotation: 180,
                scrollTrigger: {
                    trigger: triggerEl,
                    start: "top 60%",
                    end:"top 10%",
                    scrub: 3,
                },
            });
        }
    }, []);

    return (
        <div className="max-w-[1366px] mx-auto items-center space-y-0 sm:space-y-0 sm:space-x-10 px-4">
            <div className="relative flex justify-center items-center">
                <Image
                    ref={backgroundRef}
                    src="/rocker-2.png"
                    alt="shyamjith background"
                    width={550}
                    height={550}
                />
                <div ref={imageRef} className="absolute inset-0 flex justify-center items-center">
                    <Image
                        src="/new_user.png"
                        alt="shyamjith"
                        width={300}
                        height={300}
                        className="relative z-10"
                    />
                </div>
            </div>
            <div ref={childrenRef} className="mt-4">{children}</div>
        </div>
    );
};

export default CenteredImageWithBackground;