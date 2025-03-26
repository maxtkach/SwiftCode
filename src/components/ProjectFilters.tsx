'use client'

import { motion } from 'framer-motion'

interface ProjectFiltersProps {
  categories: string[]
  activeCategory: string
  onFilterChange: (category: string) => void
}

export default function ProjectFilters({ 
  categories, 
  activeCategory, 
  onFilterChange 
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category
              ? 'bg-accent text-white'
              : 'bg-background text-text hover:bg-accent/10'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
} 