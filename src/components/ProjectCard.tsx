'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  technologies?: string[]
  client?: string
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  category,
  technologies,
  client 
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="group relative overflow-hidden rounded-2xl bg-white/5 border border-primary/10 backdrop-blur-sm hover:bg-white/10 transition-all"
      >
        <div className="relative h-64">
          <Image
            src={`${process.env.NODE_ENV === 'production' ? '/SwiftCode' : ''}${image}`}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <div className="p-6">
          <div className="text-sm text-primary mb-2">{category}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-text/70 mb-4">{description}</p>
          
          {technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          {client && (
            <div className="text-sm text-text/60">
              Client: {client}
            </div>
          )}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative h-[400px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-accent bg-accent/10 rounded-full mb-4">
                  {category}
                </span>
                <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
                <p className="text-text/70 mb-6">{description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Client</h4>
                    <p className="text-text/70">{client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-background rounded-full text-text/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 