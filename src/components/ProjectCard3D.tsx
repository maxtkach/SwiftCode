'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'

interface ProjectCard3DProps {
  title: string
  description: string
  image: string
  category: string
  isActive?: boolean
  delay?: number
}

export default function ProjectCard3D({ 
  title, 
  description, 
  image, 
  category,
  isActive = false,
  delay = 0 
}: ProjectCard3DProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  const springConfig = { damping: 20, stiffness: 300 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  return (
    <motion.div
      className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden ${
        isActive ? 'z-20 scale-100' : 'z-10 scale-90'
      }`}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        x.set(e.clientX - centerX)
        y.set(e.clientY - centerY)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <span className="px-3 py-1 bg-white/20 rounded-full text-sm mb-2 inline-block">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>

      {/* Эффект свечения */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
} 