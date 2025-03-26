'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  scale?: [number, number]
  opacity?: [number, number]
}

export default function ParallaxImage({ 
  src, 
  alt, 
  className = '',
  scale = [1, 0.8],
  opacity = [1, 0.5]
}: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const scaleValue = useTransform(scrollYProgress, [0, 1], scale)
  const opacityValue = useTransform(scrollYProgress, [0, 1], opacity)

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, scale: scaleValue, opacity: opacityValue }}
        className="relative w-full h-full"
      >
        <Image
          src={`${process.env.NODE_ENV === 'production' ? '/SwiftCode' : ''}${src}`}
          alt={alt}
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  )
} 