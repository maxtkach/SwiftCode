'use client'

import { motion } from 'framer-motion'

interface StatsCardProps {
  number: string
  label: string
  delay?: number
}

export default function StatsCard({ number, label, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {number}
      </div>
      <div className="text-text/70">
        {label}
      </div>
    </motion.div>
  )
} 