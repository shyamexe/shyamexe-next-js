"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ProjectCardProps = {
    title: string,
    tags: string[],
    imageSrc: string,
    imageWidth: number,
    imageHeight: number,
    titleColor: string,
    tagBgColor: string,
    tagTextColor: string,
    gradient1: string,
    gradient2: string,
    path: string
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    tags,
    imageSrc,
    imageWidth,
    imageHeight,
    titleColor,
    tagBgColor,
    tagTextColor,
    gradient1,
    gradient2,
    path
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animation for the card scale and fade-in effect
        if (cardRef.current) {
            gsap.fromTo(cardRef.current,
                { scale: 0.9, opacity:1 }, // Starting state
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 80%", // Start when the card is 80% from the top of the viewport
                        end: "bottom 80%",
                        toggleActions: "play none none reverse",
                        scrub: 3, // Smooth animation tied to scroll
                    },
                }
            );
        }

        // Animation for zooming the image as the user scrolls
        if (imageRef.current) {
            gsap.fromTo(imageRef.current,
                { scale: 0.7 }, // Start with normal size
                {
                    scale: 1.1, // Zoom in
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardRef.current, // Use the card as the trigger
                        start: "top 80%", // Start zoom when the card is 80% from the top
                        end: "bottom 20%", // Finish zooming at this point
                        scrub: 1, // Smooth zoom based on scroll
                    },
                }
            );
        }
    }, []);

    return (
        <div className="flex justify-center items-center pt-10 px-2">
            <div
                ref={cardRef}
                className="relative max-w-[1020px] h-[400px] p-6 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full"
                style={{
                    background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})` // Gradient applied via inline styles
                }}
            >
                <Link href={path}>
                    {/* Title and Tags */}
                    <div className="absolute bottom-4 left-4 z-20">
                        <h2 className="text-4xl font-medium" style={{ color: titleColor }}>
                            {title}
                        </h2>
                        <div className="mt-2 flex space-x-2">
                            {tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 text-xs rounded"
                                    style={{ color: tagTextColor, background: tagBgColor }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div ref={imageRef} className="relative z-1 flex justify-center mt-10">
                        <Image
                            src={imageSrc}
                            alt="Mobile phone"
                            width={imageWidth}
                            height={imageHeight}
                            className="object-cover"
                        />
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-15"></div>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;