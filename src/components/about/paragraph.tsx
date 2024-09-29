"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function SlowRevealParagraph() {
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (paragraphRef.current && containerRef.current) {
      const words = paragraphRef.current.innerText.split(' ')
      paragraphRef.current.innerHTML = words.map(word => `<span class="inline-block">${word}</span>`).join(' ')
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100px",
          end: "bottom top+=100px",
          toggleActions: "play none play none"
        }
      })

      // Reveal effect
      tl.from(paragraphRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out"
      })

      // Slow color wave effect
      tl.to(paragraphRef.current.children, {
        color: gsap.utils.wrap(["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3"]),
        duration: 4,
        stagger: {
          each: 0.2,
          from: "start",
          grid: "auto",
          ease: "power2.inOut",
        }
      })

      // Return to original color
      tl.to(paragraphRef.current.children, {
        color: "white",
        duration: 4,
        stagger: {
          each: 0.2,
          from: "start",
          grid: "auto",
          ease: "power2.inOut",
        }
      })
    }
  }, [])

  return (
    <div className=" rounded-lg"ref={containerRef}>
      <p ref={paragraphRef} className="text-xl text-white mb-4 leading-relaxed">
        A passionate Flutter developer hailing from the picturesque landscapes
        of Kerala, India. With a background in computer science engineering, I
        thrive on turning innovative ideas into delightful digital experiences.
      </p>
    </div>
  )
}