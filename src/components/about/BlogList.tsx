// import React from 'react';
// import TitleComponent from './TittleWidget';

// interface BlogPost {
//   id: number;
//   date: string;
//   title: string;
//   imageUrl: string;
// }

// const BlogTileList: React.FC = () => {
//   const blogPosts: BlogPost[] = [
//     { id: 1, date: 'September 29, 2024', title: 'Understanding Next.js and Tailwind CSS', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 2, date: 'September 28, 2024', title: 'Getting Started with Flutter', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 3, date: 'September 27, 2024', title: 'Deploying Your Web App', imageUrl: 'https://via.placeholder.com/421x350' },
//     // Add more blog posts here if needed
//   ];

//   return (
//     <div className="max-w-screen-xl ">
//       <TitleComponent title='BLOGS'/>
//       <div className="flex flex-wrap justify-between">
//         {blogPosts.map((post) => (
//           <div key={post.id} className="w-full sm:w-1/2 lg:w-1/3  ">
//             <div className="relative rounded-lg overflow-hidden bg-transparent">
//               <img 
//                 src={post.imageUrl} 
//                 alt={post.title} 
//                 className="w-[421px] h-[350px] object-cover rounded-lg" 
//               />
//               <div className="pt-2 pb-4">
//                 <span className="block text-sm text-gray-500">{post.date}</span>
//                 <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default BlogTileList;

"use client"
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleComponent from './TittleWidget';
import Link from 'next/link';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  imageUrl: string;
  url: string;
}

gsap.registerPlugin(ScrollTrigger);

const BlogTileList: React.FC = () => {
  const blogPosts: BlogPost[] = [
    { id: 1, date: 'October 2, 2024', title: 'A Practical Guide to the BLoC Pattern in Flutter with Testing', imageUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*qxJheSwo06d1l7Yxb985_A.png', url:'https://medium.com/@1shyam2shyam/a-practical-guide-to-the-bloc-pattern-in-flutter-with-testing-c88c0cd8973f'},
    { id: 2, date: 'September 28, 2024', title: 'A Comprehensive Guide to App Routing in Next.js', imageUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*y9wZf7p9uSknsZ1rpJiRiQ.png', url:'https://medium.com/@1shyam2shyam/a-comprehensive-guide-to-app-routing-in-next-js-b769a3e500c4'},
    { id: 3, date: 'October 3, 2024', title: 'Next.js Route Handlers in TypeScript: Comprehensive Guide', imageUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*8tLkaL5EG0Jc9xIz1NY9zA.png', url:'https://medium.com/@1shyam2shyam/next-js-route-handlers-in-typescript-comprehensive-guide-ee3c9ea773b8'},
    { id: 4, date: 'October 3, 2024', title: 'Next.js Rendering: A Deep Dive', imageUrl: 'https://cdn-images-1.medium.com/max/800/1*htU06RotX9OO1ai6I0RIbw.png', url:'https://medium.com/@1shyam2shyam/next-js-rendering-a-deep-dive-e2a2d6701672'},
    { id: 5, date: 'October 3, 2024', title: 'Next.js Data Fetching: Complete Guide', imageUrl: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*CLfxHCCH3RQrYp1l-kd7OQ.gif', url:'https://medium.com/@1shyam2shyam/next-js-data-fetching-complete-guide-273bb668567b'},
    { id: 6, date: 'October 3, 2024', title: 'Using GSAP with Next.js: A Guide to Animations', imageUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*mwBTI6QKucGdsjaqHIXX7g.jpeg', url:'https://medium.com/@1shyam2shyam/using-gsap-with-next-js-a-guide-to-animations-bc5b832a70f0'},
    { id: 7, date: 'October 3, 2024', title: 'Introducing MaterialPagination: A Customizable Flutter Pagination Widget', imageUrl: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*rAEkZJB8IQLSw5TWscuReQ.png', url:'https://medium.com/@1shyam2shyam/introducing-materialpagination-a-customizable-flutter-pagination-widget-9cf3d2003c6c'},
  ];

  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = horizontalScrollRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (container && scrollContainer && window.innerWidth >= 1024) { // Only apply GSAP on large screens
      const totalScrollWidth = container.scrollWidth - scrollContainer.clientWidth;

      gsap.to(container, {
        x: () => -totalScrollWidth, // Horizontal scrolling logic
        ease: 'none',
        scrollTrigger: {
          trigger: scrollContainer,
          start: 'top top',
          end: () => `+=${scrollContainer.clientHeight}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          
        },
      });
    }
  }, []);

  return (
    <div ref={scrollContainerRef} className="max-w-screen-xl mx-auto">
      <TitleComponent title="BLOGS" />
      {/* Desktop: Horizontal scroll */}
      <div
        ref={horizontalScrollRef}
        className="hidden lg:flex space-x-4 hide-scrollbar"
        style={{ width: `${blogPosts.length * 421}px` }} // Dynamic width based on content
      >
        {blogPosts.map((post) => (
         <Link href={post.url} target='_blank' key={post.url}>
           <div key={post.id} className="flex-none w-[421px]">
            <div className="relative rounded-lg overflow-hidden bg-transparent">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-[421px] h-[350px] object-cover bg-white rounded-lg" 
              />
              <div className="pt-2 pb-4">
                <span className="block text-sm text-gray-500">{post.date}</span>
                <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
              </div>
            </div>
          </div>
         </Link>
        ))}
      </div>

      {/* Mobile: Vertical scroll */}
      <div className="lg:hidden grid grid-cols-1 gap-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="w-full">
            <div className="relative rounded-lg overflow-hidden bg-transparent">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-[350px] object-cover  bg-white  rounded-lg" 
              />
              <div className="pt-2 pb-4">
                <span className="block text-sm text-gray-500">{post.date}</span>
                <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTileList;





// import React, { useRef, useLayoutEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
// import TitleComponent from './TittleWidget';

// interface BlogPost {
//   id: number;
//   date: string;
//   title: string;
//   imageUrl: string;
// }

// gsap.registerPlugin(ScrollTrigger);

// const BlogTileList: React.FC = () => {
//   const blogPosts: BlogPost[] = [
//     { id: 1, date: 'September 29, 2024', title: 'Understanding Next.js and Tailwind CSS', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 2, date: 'September 28, 2024', title: 'Getting Started with Flutter', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 3, date: 'September 27, 2024', title: 'Deploying Your Web App', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 1, date: 'September 29, 2024', title: 'Understanding Next.js and Tailwind CSS', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 2, date: 'September 28, 2024', title: 'Getting Started with Flutter', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 3, date: 'September 27, 2024', title: 'Deploying Your Web App', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 1, date: 'September 29, 2024', title: 'Understanding Next.js and Tailwind CSS', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 2, date: 'September 28, 2024', title: 'Getting Started with Flutter', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 3, date: 'September 27, 2024', title: 'Deploying Your Web App', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 1, date: 'September 29, 2024', title: 'Understanding Next.js and Tailwind CSS', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 2, date: 'September 28, 2024', title: 'Getting Started with Flutter', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 3, date: 'September 27, 2024', title: 'Deploying Your Web App', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 1, date: 'September 29, 2024', title: 'Understanding Next.js and Tailwind CSS', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 2, date: 'September 28, 2024', title: 'Getting Started with Flutter', imageUrl: 'https://via.placeholder.com/421x350' },
//     { id: 3, date: 'September 27, 2024', title: 'Deploying Your Web App', imageUrl: 'https://via.placeholder.com/421x350' },
//  ];

//   const horizontalScrollRef = useRef<HTMLDivElement>(null);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const blogTileRefs = useRef<(HTMLDivElement | null)[]>([]); // References for individual blog tiles

//   useGSAP(() => {
//     const container = horizontalScrollRef.current;
//     const scrollContainer = scrollContainerRef.current;

//     if (container && scrollContainer && window.innerWidth >= 1024) { // Only apply GSAP on large screens
//       const totalScrollWidth = container.scrollWidth - scrollContainer.clientWidth;

//       // Horizontal scroll
//       gsap.to(container, {
//         x: () => -totalScrollWidth,
//         ease: 'none',
//         scrollTrigger: {
//           trigger: scrollContainer,
//           start: 'top top',
//           end: () => `+=${scrollContainer.clientHeight}`,
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//       });

//       // Animate blog tiles as they scroll into view
//       blogTileRefs.current.forEach((tile, i) => {
//         if (tile) {
//           gsap.fromTo(tile, 
//             { autoAlpha: 0, scale: 0.8 }, // Start state: hidden and scaled down
//             {
//               autoAlpha: 1,
//               scale: 1,
//               duration: 1,
//               ease: 'power3.out',
//               scrollTrigger: {
//                 trigger: tile,
//                 containerAnimation: gsap.getById(scrollContainerRef.current?.id??""),
//                 start: 'left center',
//                 toggleActions: 'play none none none',
//               },
//             }
//           );
//         }
//       });
//     }
//   }, []);

//   return (
//     <div ref={scrollContainerRef} className="max-w-screen-xl mx-auto">
//       <TitleComponent title="BLOGS" />
      
//       {/* Desktop: Horizontal scroll */}
//       <div
//         ref={horizontalScrollRef}
//         className="hidden lg:flex space-x-4 hide-scrollbar"
//         style={{ width: `${blogPosts.length * 421}px` }} // Dynamic width based on content
//       >
//         {blogPosts.map((post, i) => (
//           <div
//             key={post.id}
//             ref={el => {
//                 if (el) blogTileRefs.current[i] = el
//               }} 
//             className="flex-none w-[421px] opacity-0 transform scale-75"
//           >
//             <div className="relative rounded-lg overflow-hidden bg-transparent">
//               <img 
//                 src={post.imageUrl} 
//                 alt={post.title} 
//                 className="w-[421px] h-[350px] object-cover rounded-lg" 
//               />
//               <div className="pt-2 pb-4">
//                 <span className="block text-sm text-gray-500">{post.date}</span>
//                 <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Mobile: Vertical scroll */}
//       <div className="lg:hidden grid grid-cols-1 gap-4">
//         {blogPosts.map((post) => (
//           <div key={post.id} className="w-full">
//             <div className="relative rounded-lg overflow-hidden bg-transparent">
//               <img 
//                 src={post.imageUrl} 
//                 alt={post.title} 
//                 className="w-full h-[350px] object-cover rounded-lg" 
//               />
//               <div className="pt-2 pb-4">
//                 <span className="block text-sm text-gray-500">{post.date}</span>
//                 <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogTileList;
