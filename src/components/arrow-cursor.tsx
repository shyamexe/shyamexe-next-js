'use client'

import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';

export default function ArrowCursor() {
  const cursorRef = useRef<SVGSVGElement>(null)
  const [isInverted, setIsInverted] = useState(false)
  const [isClickable, setIsClickable] = useState(false)

  useGSAP(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out"
      })
    }

    const rotateCursor = (e: MouseEvent) => {
      const dx = e.movementX
      const dy = e.movementY
      if (dx !== 0 || dy !== 0) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI)
        gsap.to(cursor, {
          rotation: angle,
          duration: .5,
          ease: "power2.out",
          

        })
      }
    }

    const checkInvertAndClickable = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const bgColor = window.getComputedStyle(target).backgroundColor
      const isLight = bgColor === 'rgb(255, 255, 255)' || bgColor === 'rgba(255, 255, 255, 1)'
      setIsInverted(isLight)

      const isClickableElement = target.tagName.toLowerCase() === 'a' || 
                                 target.tagName.toLowerCase() === 'button' ||
                                 target.onclick !== null ||
                                 target.getAttribute('role') === 'button'
      setIsClickable(isClickableElement)

      if (isClickableElement) {
        gsap.to(cursor, { scale: 1.5, duration: 0.2 })
      } else {
        gsap.to(cursor, { scale: 1, duration: 0.2 })
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousemove", rotateCursor)
    window.addEventListener("mousemove", checkInvertAndClickable)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousemove", rotateCursor)
      window.removeEventListener("mousemove", checkInvertAndClickable)
    }
  }, [])

  useGSAP(() => {
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <svg
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9999] ${isInverted ?  '':'mix-blend-difference' }`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <path 
        d="M2 2L22 12L2 22L6 12L2 2Z" 
        fill={isClickable ? "#black" : "white"} 
      />
    </svg>
  )
}