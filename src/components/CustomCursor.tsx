'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    // Добавляем обработчики для всех интерактивных элементов
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Основной курсор */}
      <motion.div
        className="fixed w-3 h-3 bg-accent rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35
        }}
      />

      {/* Внешний круг */}
      <motion.div
        className={`fixed w-6 h-6 border-2 border-accent rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ${
          isHovering ? 'scale-150 opacity-50' : 'scale-100 opacity-100'
        }`}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />

      {/* Эффект свечения */}
      <motion.div
        className={`fixed w-12 h-12 bg-accent/20 rounded-full pointer-events-none z-50 blur-xl transition-all duration-300 ${
          isHovering ? 'scale-150 opacity-30' : 'scale-100 opacity-20'
        }`}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
      />

      {/* Дополнительный эффект при наведении */}
      {isHovering && (
        <motion.div
          className="fixed w-16 h-16 border-2 border-accent/30 rounded-full pointer-events-none z-50"
          animate={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </>
  )
} 