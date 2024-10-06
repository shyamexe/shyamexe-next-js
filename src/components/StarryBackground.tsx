'use client'

import React, { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  color: string
  speedX: number
  speedY: number
  twinkleSpeed: number
  twinklePhase: number
}

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const stars: Star[] = []
    const starCount = 600 // Increased from 200 to 1000

    const createStar = (): Star => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.4, // Adjusted size range for better visibility
      color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`, // Increased minimum opacity
      speedX: (Math.random() - 0.5) * 0.2, // Reduced speed for smoother movement
      speedY: (Math.random() - 0.5) * 0.2,
      twinkleSpeed: Math.random() * 0.03 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2
    })

    for (let i = 0; i < starCount; i++) {
      stars.push(createStar())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.x += star.speedX
        star.y += star.speedY
        star.twinklePhase += star.twinkleSpeed

        if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
          Object.assign(star, createStar())
        }

        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7 // Adjusted for subtler twinkling
        const alpha = parseFloat(star.color.split(',')[3]) * twinkle

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}