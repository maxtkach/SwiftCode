'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import Navigation from '@/components/Navigation'
import GradientText from '@/components/GradientText'
import AnimatedElement from '@/components/AnimatedElement'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const t = useTranslation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Здесь будет логика отправки формы
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement delay={0.2}>
              <GradientText 
                text={t('contact.title')}
                className="text-5xl md:text-6xl font-bold mb-6"
              />
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <p className="text-xl text-text/70 mb-8">
                {t('contact.subtitle')}
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.6}>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:contact@swiftcode.dev" 
                  className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@swiftcode.dev
                </a>
                <a 
                  href="https://t.me/swiftcode" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.4-.89.03-.24.37-.49 1.02-.75 4.02-1.75 6.69-2.9 8.03-3.46 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.14-.02.3-.03.42z"/>
                  </svg>
                  @swiftcode
                </a>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <AnimatedElement delay={0.2}>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4">{t('contact.letsTalk')}</h3>
                    <p className="text-text/70 mb-6">{t('contact.description')}</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-text/70">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span>{t('contact.weekdays')}: 9:00 - 18:00</span>
                      </div>
                      <div className="flex items-center gap-3 text-text/70">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span>{t('contact.weekends')}: {t('contact.byAppointment')}</span>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={0.4}>
                  <div className="relative p-6 rounded-2xl bg-accent/5 border border-accent/10 backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                    <div className="relative">
                      <h3 className="text-xl font-semibold mb-4">{t('contact.workingHours')}</h3>
                      <div className="space-y-2 text-text/70">
                        <p>{t('contact.weekdays')}: 9:00 - 18:00</p>
                        <p>{t('contact.weekends')}: {t('contact.byAppointment')}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              </div>

              {/* Contact Form */}
              <AnimatedElement delay={0.6}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-sm"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-sm"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none backdrop-blur-sm"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg text-white font-medium transition-all ${
                      isSubmitting 
                        ? 'bg-primary/50 cursor-not-allowed' 
                        : 'bg-primary hover:bg-accent'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? t('contact.sending') : t('contact.send')}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-green-50 text-green-600"
                    >
                      {t('contact.success')}
                    </motion.div>
                  )}
                </form>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 