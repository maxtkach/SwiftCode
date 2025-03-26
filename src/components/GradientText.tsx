'use client'

import { motion } from 'framer-motion'

interface GradientTextProps {
  text: string
  className?: string
}

export default function GradientText({ text, className = '' }: GradientTextProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="relative z-10">{text}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'blur(8px)',
          opacity: 0.5
        }}
      />
    </motion.div>
  )
} 