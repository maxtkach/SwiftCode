'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RotatingElementProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
}

export default function RotatingElement({ 
  children, 
  className = '', 
  duration = 20,
  delay = 0 
}: RotatingElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: 360
      }}
      transition={{
        duration,
        delay,
        rotate: {
          duration,
          repeat: Infinity,
          ease: "linear"
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 