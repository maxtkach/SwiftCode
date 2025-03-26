'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  price: string
  features: string[]
  delay?: number
}

export default function ServiceCard({ title, description, price, features, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="p-8">
        <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
        <p className="text-text/70 mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-3xl font-bold text-accent">{price}</span>
          <span className="text-text/60 ml-2">/ project</span>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-text/70">
              <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <Link 
          href="/contact" 
          className="btn-primary relative group overflow-hidden w-full text-center block"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>
    </motion.div>
  )
} 