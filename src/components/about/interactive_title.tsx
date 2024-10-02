"use client"

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';

export default function InteractiveTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (titleRef.current && subtitleRef.current && containerRef.current) {
      const title = titleRef.current
      const subtitle = subtitleRef.current
      
      const splitTitle = title.innerText.split('').map((char, i) => 
        `<span class="inline-block" style="transform-origin: 50% 50% -10px;" key="${i}">${char}</span>`
      ).join('')
      
      const splitSubtitle = subtitle.innerText.split('').map((char, i) => 
        `<span class="inline-block" style="transform-origin: 50% 50% -10px;" key="${i}">${char}</span>`
      ).join('')

      title.innerHTML = splitTitle
      subtitle.innerHTML = splitSubtitle

      const titleChars = title.querySelectorAll('span')
      const subtitleChars = subtitle.querySelectorAll('span')

      containerRef.current.addEventListener('mouseenter', () => {
        gsap.to(titleChars, {
          duration: 0.4,
          rotationX: -360,
          y: 0,
          color: "#4fd1c5",
          stagger: 0.02,
          ease: "power2.out",
          scrub: 3,
          
        })
        gsap.to(subtitleChars, {
          duration: 0.4,
          rotationX: -360,
          y: 0,
          color: "#f687b3",
          stagger: 0.02,
          ease: "power2.out",
          delay: 0.1,scrub: 3,
        })
      })

      containerRef.current.addEventListener('mouseleave', () => {
        gsap.to([titleChars, subtitleChars], {
          duration: 0.4,
          rotationX: 0,
          y: 0,
          color: "white",
          stagger: 0.01,
          ease: "power2.in",scrub: 3,
        })
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="flex-1 mb-6 md:mb-0 cursor-pointer perspective-500">
      <h1 ref={titleRef} className="text-5xl font-bold text-white mb-2">
        ShyamjithVP
      </h1>
      <h2 ref={subtitleRef} className="text-3xl sm:text-5xl font-light text-white">
        SoftwareArchitect
      </h2>
    </div>
  )
}