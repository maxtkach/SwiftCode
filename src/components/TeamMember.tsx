'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
  delay?: number
}

export default function TeamMember({ 
  name, 
  role, 
  image, 
  bio,
  delay = 0 
}: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-1">{name}</h3>
        <div className="text-accent font-medium mb-3">{role}</div>
        <p className="text-text/70">{bio}</p>
      </div>
    </motion.div>
  )
} 