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
import Image from 'next/image'
import Link from 'next/link'
import RotatingElement from '@/components/RotatingElement'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxImage from '@/components/ParallaxImage'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import MultiLayerParallax from '@/components/MultiLayerParallax'

const services = [
  {
    title: "Web Development",
    description: "Modern and responsive websites",
    icon: "🌐",
    price: "from $1000",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Focus",
      "Modern Technologies"
    ]
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform apps",
    icon: "📱",
    price: "from $2000",
    features: [
      "iOS & Android",
      "Cross-platform",
      "App Store Ready",
      "Performance Focus"
    ]
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces",
    icon: "🎨",
    price: "from $800",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems"
    ]
  }
]

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern online store with advanced features",
    image: "/projects/ecommerce.jpg",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB"],
    client: "TechStore"
  },
  {
    title: "Mobile App Design",
    description: "User-friendly interface for a fitness tracking app",
    image: "/projects/mobile-app.jpg",
    category: "UI/UX Design",
    technologies: ["Figma", "Adobe XD"],
    client: "FitLife"
  },
  {
    title: "Corporate Website",
    description: "Modern and responsive website for a tech company",
    image: "/projects/corporate.jpg",
    category: "Web Development",
    technologies: ["Next.js", "TailwindCSS"],
    client: "TechCorp"
  },
  {
    title: "Brand Identity",
    description: "Complete brand identity design for a startup",
    image: "/projects/branding.jpg",
    category: "Branding",
    technologies: ["Adobe Illustrator", "Photoshop"],
    client: "StartupX"
  }
]

export default function Home() {
  const t = useTranslation()

  const processSteps = [
    {
      title: 'process.steps.discovery.title',
      description: 'process.steps.discovery.description'
    },
    {
      title: 'process.steps.design.title',
      description: 'process.steps.design.description'
    },
    {
      title: 'process.steps.development.title',
      description: 'process.steps.development.description'
    },
    {
      title: 'process.steps.delivery.title',
      description: 'process.steps.delivery.description'
    }
  ]

  return (
    <main className="overflow-hidden">
      <CustomCursor />
      <ParallaxBackground />
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <MultiLayerParallax />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <RotatingElement className="absolute top-1/4 left-1/4 w-96 h-96">
            <div className="w-full h-full bg-primary/10 rounded-full blur-3xl" />
          </RotatingElement>
          <RotatingElement className="absolute bottom-1/4 right-1/4 w-96 h-96" duration={30}>
            <div className="w-full h-full bg-accent/10 rounded-full blur-3xl" />
          </RotatingElement>
          
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-1/3 w-32 h-32"
          >
            <div className="w-full h-full bg-primary/5 rounded-full blur-xl" />
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/3 left-1/3 w-40 h-40"
          >
            <div className="w-full h-full bg-accent/5 rounded-full blur-xl" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`${process.env.NODE_ENV === 'production' ? '/SwiftCode' : ''}/contact`}
                    className="w-full sm:w-auto inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-white text-sm sm:text-base font-medium hover:bg-accent transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105"
                  >
                    {t('hero.cta')}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`${process.env.NODE_ENV === 'production' ? '/SwiftCode' : ''}/services`}
                    className="w-full sm:w-auto inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-primary text-sm sm:text-base font-medium hover:bg-accent hover:text-white transition-all shadow-lg shadow-white/20 hover:shadow-accent/30 hover:scale-105"
                  >
                    {t('nav.services')}
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-8"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">5+</div>
                  <div className="text-xs sm:text-sm text-text/70">{t('stats.experience')}</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50+</div>
                  <div className="text-xs sm:text-sm text-text/70">{t('stats.projects')}</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="text-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-text/70">{t('stats.clients')}</div>
                </motion.div>
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
      <section className="relative py-20 overflow-hidden">
        <ParallaxBackground />
        <div className="container mx-auto px-4 relative z-10">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <AnimatedElement key={step.title} delay={0.2 * (index + 1)}>
                <motion.div 
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="relative bg-white/80 backdrop-blur-lg border border-white/20 shadow-[0_0_30px_rgba(0,122,255,0.2)] rounded-2xl p-6 hover:shadow-[0_0_40px_rgba(0,122,255,0.3)] transition-all duration-300 group"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <span className="text-xl font-bold text-accent">{index + 1}</span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors">{t(step.title)}</h3>
                    <p className="text-base text-text/70">{t(step.description)}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-accent/0 group-hover:bg-accent/20 transition-colors rounded-b-2xl" />
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white/80 backdrop-blur-lg border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.1)] rounded-3xl">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="text-4xl font-bold text-center mb-12">
              {t('testimonials.title')}
            </h2>
          </AnimatedElement>
          
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
      <section className="relative py-20 bg-background/50 overflow-hidden">
        <MultiLayerParallax />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <GradientText text={t('portfolio.title')} />
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} direction="up" delay={0.2 * (index + 1)}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <GradientText text={t('contact.title')} />
              </h2>
              <p className="text-xl text-text/70 mb-8">
                {t('contact.description')}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`${process.env.NODE_ENV === 'production' ? '/SwiftCode' : ''}/contact`}
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-white text-sm sm:text-base font-medium hover:bg-accent transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105"
                >
                  {t('contact.cta')}
                </Link>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
} 