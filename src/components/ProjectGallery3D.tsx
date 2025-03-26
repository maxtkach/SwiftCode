'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCard3D from './ProjectCard3D'

interface Project {
  title: string
  description: string
  image: string
  category: string
}

interface ProjectGallery3DProps {
  projects: Project[]
}

export default function ProjectGallery3D({ projects }: ProjectGallery3DProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const projectsPerPage = 3

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % (projects.length - projectsPerPage + 1))
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, projects.length])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const visibleProjects = projects.slice(activeIndex, activeIndex + projectsPerPage)

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1
            }}
          >
            <ProjectCard3D
              {...project}
              isActive={true}
              delay={index * 0.1}
            />
          </motion.div>
        ))}
      </div>

      {/* Навигационные кнопки */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          className="w-14 h-14 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-accent/30"
          onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
          disabled={activeIndex === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === Math.floor(activeIndex / projectsPerPage) ? 'bg-accent scale-125' : 'bg-white/50'
              }`}
              onClick={() => setActiveIndex(index * projectsPerPage)}
            />
          ))}
        </div>
        <button
          className="w-14 h-14 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-accent/30"
          onClick={() => setActiveIndex((prev) => Math.min(projects.length - projectsPerPage, prev + 1))}
          disabled={activeIndex >= projects.length - projectsPerPage}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
} 