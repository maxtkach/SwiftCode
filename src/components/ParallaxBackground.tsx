'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Разные скорости параллакса для разных слоев
  const y1 = useTransform(scrollYProgress, [0, 1], ['-40%', '20%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['-30%', '30%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['-20%', '40%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden">
      {/* Основной фон с параллаксом */}
      <motion.div
        style={{ y: y1, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src={`${process.env.NODE_ENV === 'production' ? '/SwiftCode' : ''}/hero-bg.jpg`}
          alt="Background"
          fill
          className="object-cover object-top"
          priority
        />
      </motion.div>

      {/* Второй слой фона */}
      <motion.div
        style={{ y: y2, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/20 z-10" />
        <Image
          src={`${process.env.NODE_ENV === 'production' ? '/SwiftCode' : ''}/hero-bg.jpg`}
          alt="Background Layer 2"
          fill
          className="object-cover object-top opacity-50"
          priority
        />
      </motion.div>

      {/* Третий слой фона */}
      <motion.div
        style={{ y: y3, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/10 z-10" />
        <Image
          src={`${process.env.NODE_ENV === 'production' ? '/SwiftCode' : ''}/hero-bg.jpg`}
          alt="Background Layer 3"
          fill
          className="object-cover object-top opacity-30"
          priority
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-transparent z-10" />

      {/* Animated Grid Pattern */}
      <motion.div
        style={{ y: y1, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={`${process.env.NODE_ENV === 'production' ? '/SwiftCode' : ''}/grid.svg`}
          alt="Grid pattern"
          fill
          className="opacity-5"
          priority
        />
      </motion.div>

      {/* Светящиеся фигуры с параллаксом */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
        className="absolute top-1/4 left-1/4 w-32 h-32 z-50"
      >
        <div className="w-full h-full bg-accent/40 rounded-full blur-3xl animate-pulse shadow-[0_0_50px_rgba(0,122,255,0.7)]" />
        <div className="absolute inset-0 bg-accent/30 rounded-full animate-pulse" />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-25%']) }}
        className="absolute top-1/3 right-1/3 w-24 h-24 z-50"
      >
        <div className="w-full h-full bg-accent/40 rounded-full blur-3xl animate-pulse shadow-[0_0_50px_rgba(0,122,255,0.7)]" />
        <div className="absolute inset-0 bg-accent/30 rounded-full animate-pulse" />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '35%']) }}
        className="absolute bottom-1/4 left-1/3 w-16 h-16 z-50"
      >
        <div className="w-full h-full bg-accent/40 rounded-full blur-3xl animate-pulse shadow-[0_0_50px_rgba(0,122,255,0.7)]" />
        <div className="absolute inset-0 bg-accent/30 rounded-full animate-pulse" />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-30%']) }}
        className="absolute bottom-1/3 right-1/4 w-20 h-20 z-50"
      >
        <div className="w-full h-full bg-accent/40 rounded-full blur-3xl animate-pulse shadow-[0_0_50px_rgba(0,122,255,0.7)]" />
        <div className="absolute inset-0 bg-accent/30 rounded-full animate-pulse" />
      </motion.div>

      {/* Анимированные геометрические фигуры со свечением */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          x: [0, 15, 0],
          y: [0, -15, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-16 h-16 z-50"
      >
        <div className="w-full h-full border-2 border-accent/50 rounded-lg shadow-[0_0_50px_rgba(0,122,255,0.7)]" />
        <div className="absolute inset-0 bg-accent/30 rounded-lg animate-pulse" />
      </motion.div>

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-1/4 w-20 h-20 z-50"
      >
        <div className="w-full h-full border-2 border-accent/50 rounded-full shadow-[0_0_50px_rgba(0,122,255,0.7)]" />
        <div className="absolute inset-0 bg-accent/30 rounded-full animate-pulse" />
      </motion.div>

      {/* Плавающие элементы со свечением */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 8, 0],
          scale: [1, 1.1, 1],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-48 h-48 z-50"
      >
        <div className="w-full h-full bg-accent/40 rounded-full blur-3xl animate-pulse shadow-[0_0_60px_rgba(0,122,255,0.8)]" />
        <div className="absolute inset-0 bg-accent/30 rounded-full animate-pulse" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -8, 0],
          scale: [1, 1.1, 1],
          x: [0, -10, 0]
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 z-50"
      >
        <div className="w-full h-full bg-accent/40 rounded-full blur-3xl animate-pulse shadow-[0_0_60px_rgba(0,122,255,0.8)]" />
        <div className="absolute inset-0 bg-accent/30 rounded-full animate-pulse" />
      </motion.div>
    </div>
  )
} 