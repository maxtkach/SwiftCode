'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'

interface Service {
  id: string
  titleKey: string
  descriptionKey: string
  icon: string
  color: string
  features: string[]
}

const services: Service[] = [
  {
    id: 'web-development',
    titleKey: 'services.web.title',
    descriptionKey: 'services.web.description',
    icon: '💻',
    color: 'from-blue-500/20 to-cyan-500/20',
    features: ['services.web.features.1', 'services.web.features.2', 'services.web.features.3']
  },
  {
    id: 'mobile-development',
    titleKey: 'services.mobile.title',
    descriptionKey: 'services.mobile.description',
    icon: '📱',
    color: 'from-purple-500/20 to-pink-500/20',
    features: ['services.mobile.features.1', 'services.mobile.features.2', 'services.mobile.features.3']
  },
  {
    id: 'ui-design',
    titleKey: 'services.design.title',
    descriptionKey: 'services.design.description',
    icon: '🎨',
    color: 'from-orange-500/20 to-red-500/20',
    features: ['services.design.features.1', 'services.design.features.2', 'services.design.features.3']
  },
  {
    id: 'consulting',
    titleKey: 'services.consulting.title',
    descriptionKey: 'services.consulting.description',
    icon: '💡',
    color: 'from-green-500/20 to-emerald-500/20',
    features: ['services.consulting.features.1', 'services.consulting.features.2', 'services.consulting.features.3']
  }
]

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const t = useTranslation()

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-text/70 max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className="relative group"
            >
              <div className={`relative p-8 transition-all duration-500 ${
                hoveredService === service.id ? 'bg-gradient-to-br' : ''
              } ${service.color}`}>
                {/* Анимированный фон */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Содержимое */}
                <div className="relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-text/70 mb-6 group-hover:text-text transition-colors duration-300">
                        {t(service.descriptionKey)}
                      </p>
                      
                      <AnimatePresence>
                        {hoveredService === service.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="space-y-3"
                          >
                            {service.features.map((feature, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 text-text/80 group-hover:text-text transition-colors duration-300"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                {t(feature)}
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Анимированная линия */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 