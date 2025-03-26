'use client'

import { motion } from 'framer-motion'

interface GradientTextProps {
  text: string
  className?: string
}

export default function GradientText({ text, className = '' }: GradientTextProps) {
  return (
    <motion.span
      className={`${className} bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-accent2 animate-gradient`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
            {word}
          </span>
          {index < text.split(' ').length - 1 && ' '}
        </motion.span>
      ))}
    </motion.span>
  )
} 