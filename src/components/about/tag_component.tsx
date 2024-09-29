"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CoolTags() {
  const tagsRef = useRef<(HTMLSpanElement | null)[]>([])

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !tagsRef.current.includes(el)) {
      tagsRef.current.push(el)
    }
  }

  useEffect(() => {
    tagsRef.current.forEach((tag) => {
      if (tag) {
        gsap.set(tag, { scale: 1, backgroundColor: 'transparent', color: 'white' })
      }
    })
  }, [])

  const handleMouseEnter = (index: number) => {
    if (tagsRef.current[index]) {
      gsap.to(tagsRef.current[index], {
        scale: 1.1,
        backgroundColor: 'white',
        color: 'black',
        duration: 0.3,
        ease: "elastic.out(1, 0.3)",
        onComplete: () => {
          gsap.to(tagsRef.current[index], {
            y: -10,
            yoyo: true,
            repeat: 1,
            duration: 0.2,
            ease: "power1.inOut"
          })
        }
      })
    }
  }

  const handleMouseLeave = (index: number) => {
    if (tagsRef.current[index]) {
      gsap.to(tagsRef.current[index], {
        scale: 1,
        backgroundColor: 'transparent',
        color: 'white',
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }

  return (
    <div className="flex gap-4   rounded-lg">
      {['Flutter', 'NextJS', 'NestJS'].map((tag, index) => (
        <span
          key={tag}
          ref={addToRefs}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          className="px-6 py-1 border border-white rounded-full cursor-pointer transition-colors duration-300"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}