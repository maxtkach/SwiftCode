'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  price?: string
  features?: string[]
}

export default function ServiceCard({ 
  title, 
  description, 
  icon,
  price,
  features 
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-2xl bg-white/5 border border-primary/10 backdrop-blur-sm hover:bg-white/10 transition-all"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-text/70 mb-4">{description}</p>
      {price && (
        <div className="text-lg font-bold text-accent mb-4">{price}</div>
      )}
      {features && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-text/70">
              <span className="text-primary">•</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
} 