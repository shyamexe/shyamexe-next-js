"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';  

type ProjectCardProps={
    title: string,
    tags: string[],
    imageSrc:string,
    imageWidth: number,
    imageHeight: number,
    device: string,
    titleColor: string,
    tagBgColor: string,
    tagTextColor: string,
    gradient1:string,
    gradient2: string
    path: string

};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    tags,
    imageSrc,
    imageWidth,
    imageHeight,
    device,
    titleColor,
    tagBgColor,
    tagTextColor,
    gradient1,
    gradient2,
    path
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={path}>
        <div className="flex justify-center items-center  pt-10">
            
       
       
            <div
                className={`relative max-w-[1020px] h-[350px] p-6 rounded-3xl bg-gradient-to-r from-${gradient1} to-${gradient2} overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Static title and subtitle */}
                <div className="absolute bottom-4 left-4 z-20 align-bottom">
                    {/* <span className="inline-block px-3 py-1 mb-2 text-sm font-medium text-white bg-gray-700 rounded-full">
                      {title}
                    </span> */}
                    <h2 className={`text-4xl font-bold text-${titleColor}`}>{title}</h2>
                    <div className="mt-2 flex space-x-2">
                    {tags.map((tag) => {
               
                return (
                    <span className={`px-2 py-1 text-xs text-${tagTextColor} bg-${tagBgColor} rounded`}>{tag}</span>
                );
            })}

                        
                        {/* <span className="px-2 py-1 text-xs text-white bg-gray-800 rounded">iOS</span>
                        <span className="px-2 py-1 text-xs text-white bg-gray-800 rounded">Design direction</span>
                        <span className="px-2 py-1 text-xs text-white bg-gray-800 rounded">Team lead</span> */}
                    </div>
                </div>

                {/* Image of the mobile phone */}
                <div className={`relative z-10 flex justify-center ${isHovered ? 'scale-110' : 'scale-100'} transition-transform duration-500 ease-in-out` }>

                  
                        <Image
                            src={imageSrc} // Replace with the actual image path
                            alt="Mobile phone"
                            width={imageWidth}
                            height={imageHeight}
                            className="object-cover"
                        />
                   
                </div>

                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-0"></div>
            </div>
        </div>
            </Link>
    );
};

export default ProjectCard;