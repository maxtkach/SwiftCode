'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  author: string
  slug: string
  delay?: number
}

export default function BlogCard({
  title,
  excerpt,
  image,
  category,
  date,
  author,
  slug,
  delay = 0
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="inline-block px-3 py-1 text-sm text-white bg-primary rounded-full">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-text/60 mb-3">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
          
          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-200">
            {title}
          </h3>
          
          <p className="text-text/70 line-clamp-3">
            {excerpt}
          </p>
          
          <div className="mt-4 flex items-center text-accent font-medium">
            Read More
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  )
} 