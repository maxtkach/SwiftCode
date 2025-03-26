'use client'

import { motion } from 'framer-motion'

interface BlogFiltersProps {
  categories: string[]
  activeCategory: string
  onFilterChange: (category: string) => void
}

export default function BlogFilters({
  categories,
  activeCategory,
  onFilterChange
}: BlogFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          onClick={() => onFilterChange(category)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
            activeCategory === category
              ? 'bg-primary text-white'
              : 'bg-background text-text hover:bg-primary/10'
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