'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface Layer {
  src: string
  speed: number
  scale: number
  opacity: number
  zIndex: number
}

const layers: Layer[] = [
  {
    src: '/grid.svg',
    speed: 0.2,
    scale: 1.1,
    opacity: 0.1,
    zIndex: 1
  },
  {
    src: '/grid.svg',
    speed: 0.4,
    scale: 1.2,
    opacity: 0.05,
    zIndex: 2
  },
  {
    src: '/grid.svg',
    speed: 0.6,
    scale: 1.3,
    opacity: 0.03,
    zIndex: 3
  }
]

export default function MultiLayerParallax() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {layers.map((layer, index) => {
        const y = useTransform(scrollYProgress, [0, 1], ['0%', `${layer.speed * 100}%`])
        const scale = useTransform(scrollYProgress, [0, 1], [1, layer.scale])
        const opacity = useTransform(scrollYProgress, [0, 1], [layer.opacity, layer.opacity * 0.5])

        return (
          <motion.div
            key={index}
            style={{ y, scale, opacity }}
            className="absolute inset-0"
          >
            <Image
              src={`${process.env.NODE_ENV === 'production' ? '/SwiftCode' : ''}${layer.src}`}
              alt={`Layer ${index + 1}`}
              fill
              className="object-cover"
              style={{ zIndex: layer.zIndex }}
            />
          </motion.div>
        )
      })}
    </div>
  )
} 