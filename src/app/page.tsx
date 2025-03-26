'use client'

import Navigation from '@/components/Navigation'
import AnimatedElement from '@/components/AnimatedElement'
import CustomCursor from '@/components/CustomCursor'
import ParallaxBackground from '@/components/ParallaxBackground'
import ParticleBackground from '@/components/ParticleBackground'
import GradientText from '@/components/GradientText'
import AnimatedCard from '@/components/AnimatedCard'
import { motion } from 'framer-motion'
import ProjectGallery3D from '@/components/ProjectGallery3D'
import Services from '@/components/Services'
import { useTranslation } from '@/hooks/useTranslation'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern online store with advanced features",
    image: "projects/ecommerce.jpg",
    category: "Web Development"
  },
  {
    title: "Mobile App Design",
    description: "User-friendly interface for a fitness tracking app",
    image: "projects/mobile-app.jpg",
    category: "UI/UX Design"
  },
  {
    title: "Corporate Website",
    description: "Modern and responsive website for a tech company",
    image: "projects/corporate.jpg",
    category: "Web Development"
  },
  {
    title: "Brand Identity",
    description: "Complete brand identity design for a startup",
    image: "projects/branding.jpg",
    category: "Branding"
  }
]

export default function Home() {
  const t = useTranslation()

  return (
    <main className="overflow-hidden">
      <CustomCursor />
      <ParallaxBackground />
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 bg-[url('hero-bg.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-[url('grid.svg')] opacity-5" />
        
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedElement delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-4 sm:mb-8"
              >
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-2 sm:mb-4">
                  {t('hero.subtitle')}
                </span>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <GradientText 
                text={t('hero.title')}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 leading-tight drop-shadow-lg"
              />
            </AnimatedElement>
            
            <AnimatedElement delay={0.6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              >
                <motion.a
                  href="/contact"
                  className="w-full sm:w-auto inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-white text-sm sm:text-base font-medium hover:bg-accent transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.cta')}
                </motion.a>
                <motion.a
                  href="/#services"
                  className="w-full sm:w-auto inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-primary text-sm sm:text-base font-medium hover:bg-accent hover:text-white transition-all shadow-lg shadow-white/20 hover:shadow-accent/30 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('nav.services')}
                </motion.a>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-8"
              >
                <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">5+</div>
                  <div className="text-xs sm:text-sm text-text/70">{t('stats.experience')}</div>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50+</div>
                  <div className="text-xs sm:text-sm text-text/70">{t('stats.projects')}</div>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-text/70">{t('stats.clients')}</div>
                </div>
              </motion.div>
            </AnimatedElement>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white/50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-white/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <AnimatedElement delay={0.2}>
              <GradientText 
                text={t('process.title')}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              />
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <p className="text-base sm:text-lg md:text-xl text-text/70">
                {t('process.subtitle')}
              </p>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <AnimatedElement delay={0.2}>
              <div className="relative p-6 rounded-2xl bg-white/5 border border-primary/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4 text-primary group-hover:text-accent transition-colors">{t('process.steps.discovery.title')}</h3>
                <p className="text-text/70">{t('process.steps.discovery.description')}</p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <div className="relative p-6 rounded-2xl bg-white/5 border border-accent/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4 text-accent group-hover:text-primary transition-colors">{t('process.steps.design.title')}</h3>
                <p className="text-text/70">{t('process.steps.design.description')}</p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.6}>
              <div className="relative p-6 rounded-2xl bg-white/5 border border-primary/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4 text-primary group-hover:text-accent transition-colors">{t('process.steps.development.title')}</h3>
                <p className="text-text/70">{t('process.steps.development.description')}</p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.8}>
              <div className="relative p-6 rounded-2xl bg-white/5 border border-accent/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4 text-accent group-hover:text-primary transition-colors">{t('process.steps.delivery.title')}</h3>
                <p className="text-text/70">{t('process.steps.delivery.description')}</p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('grid.svg')] opacity-5" />
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <AnimatedElement delay={0.2}>
              <GradientText 
                text={t('testimonials.title')}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              />
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <p className="text-base sm:text-lg md:text-xl text-text/70">
                {t('testimonials.subtitle')}
              </p>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <AnimatedElement delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative p-8 rounded-2xl bg-white/5 border border-primary/10 backdrop-blur-sm hover:bg-white/10 transition-all group perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                  "
                </div>
                <div className="mt-8">
                  <p className="text-lg text-text/80 mb-6 italic">
                    {t('testimonials.items.1.text')}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">JD</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{t('testimonials.items.1.author')}</h4>
                      <p className="text-sm text-text/60">{t('testimonials.items.1.position')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative p-8 rounded-2xl bg-white/5 border border-accent/10 backdrop-blur-sm hover:bg-white/10 transition-all group perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                  "
                </div>
                <div className="mt-8">
                  <p className="text-lg text-text/80 mb-6 italic">
                    {t('testimonials.items.2.text')}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-accent">AS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent">{t('testimonials.items.2.author')}</h4>
                      <p className="text-sm text-text/60">{t('testimonials.items.2.position')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={0.6}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative p-8 rounded-2xl bg-white/5 border border-primary/10 backdrop-blur-sm hover:bg-white/10 transition-all group perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                  "
                </div>
                <div className="mt-8">
                  <p className="text-lg text-text/80 mb-6 italic">
                    {t('testimonials.items.3.text')}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">MK</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{t('testimonials.items.3.author')}</h4>
                      <p className="text-sm text-text/60">{t('testimonials.items.3.position')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedElement>
          </div>

          <div className="mt-12 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-2 text-primary"
            >
              <span className="text-2xl">★</span>
              <span className="text-2xl">★</span>
              <span className="text-2xl">★</span>
              <span className="text-2xl">★</span>
              <span className="text-2xl">★</span>
              <span className="ml-2 text-sm text-text/60">4.9/5</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectGallery3D projects={projects} />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white/50 to-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement delay={0.2}>
              <GradientText 
                text={t('contact.title')}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              />
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <p className="text-base sm:text-lg md:text-xl text-text/70 mb-6 sm:mb-8">
                {t('contact.description')}
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.6}>
              <motion.a
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-white text-sm sm:text-base font-medium hover:bg-accent transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('contact.cta')}
              </motion.a>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </main>
  )
} 