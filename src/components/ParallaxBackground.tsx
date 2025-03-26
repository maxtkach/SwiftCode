'use client'

import { useEffect, useRef } from 'react'

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const layersRef = useRef<HTMLDivElement[]>([])
  const mousePositionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mousePositionRef.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5
      }

      // Анимируем слои параллакса
      layersRef.current.forEach((layer, index) => {
        const speed = (index + 1) * 0.5
        const x = mousePositionRef.current.x * speed * 20
        const y = mousePositionRef.current.y * speed * 20
        layer.style.transform = `translate(${x}px, ${y}px)`
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Сетка */}
      <div 
        ref={el => { if (el) layersRef.current[0] = el }}
        className="absolute inset-0 bg-[url('./grid.svg')] opacity-10"
        style={{ transition: 'transform 0.1s ease-out' }}
      />

      {/* Градиентный фон */}
      <div 
        ref={el => { if (el) layersRef.current[1] = el }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
        style={{ transition: 'transform 0.1s ease-out' }}
      />

      {/* Светящиеся элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Центральное свечение */}
      <div 
        ref={el => { if (el) layersRef.current[2] = el }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"
        style={{ transition: 'transform 0.1s ease-out' }}
      />
    </div>
  )
} 