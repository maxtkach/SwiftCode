'use client'

import { useEffect, useRef, useMemo } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)

  // Мемоизируем создание частиц
  const createParticles = useMemo(() => (width: number, height: number) => {
    const particleCount = Math.min(Math.floor((width * height) / 15000), 100)
    return Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 1 + Math.random() * 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: 0.1 + Math.random() * 0.2
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesRef.current = createParticles(canvas.width, canvas.height)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime
      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime

      // Очищаем canvas только если прошло достаточно времени
      if (deltaTime > 16) { // примерно 60 FPS
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        particlesRef.current.forEach(particle => {
          // Обновляем позицию с учетом deltaTime
          particle.x += particle.speedX * (deltaTime / 16)
          particle.y += particle.speedY * (deltaTime / 16)
          
          // Ограничиваем частицы в пределах экрана
          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

          // Рисуем частицу
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
          ctx.fill()
        })
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animate(0)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [createParticles])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  )
} 