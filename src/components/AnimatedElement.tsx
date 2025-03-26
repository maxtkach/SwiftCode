'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedElementProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function AnimatedElement({ children, delay = 0, className = '' }: AnimatedElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
        filter: {
          duration: 1.5,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 