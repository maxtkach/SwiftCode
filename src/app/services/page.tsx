'use client'

import Navigation from '@/components/Navigation'
import AnimatedElement from '@/components/AnimatedElement'
import { useTranslation } from '@/hooks/useTranslation'

export default function ServicesPage() {
  const t = useTranslation()

  const services = [
    {
      id: 'web',
      title: t('services.web.title'),
      description: t('services.web.description'),
      price: 'от $2000',
      features: [
        t('services.web.features.1'),
        t('services.web.features.2'),
        t('services.web.features.3')
      ],
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'mobile',
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      price: 'от $3000',
      features: [
        t('services.mobile.features.1'),
        t('services.mobile.features.2'),
        t('services.mobile.features.3')
      ],
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'design',
      title: t('services.design.title'),
      description: t('services.design.description'),
      price: 'от $1500',
      features: [
        t('services.design.features.1'),
        t('services.design.features.2'),
        t('services.design.features.3')
      ],
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    }
  ]

  return (
    <main className="overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-background pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container relative">
          <AnimatedElement delay={0.2} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-text/70">
              {t('services.subtitle')}
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedElement key={service.id} delay={0.3 + index * 0.1}>
                <div className="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="mb-6 text-accent">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-text/70 mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-text/80">
                          <svg className="w-5 h-5 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-accent">
                        {service.price}
                      </span>
                      <a
                        href="/contact"
                        className="px-6 py-2 rounded-full bg-accent text-white font-medium hover:bg-primary transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30"
                      >
                        {t('contact.cta')}
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-background to-white/50">
        <div className="container">
          <AnimatedElement delay={0.2} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('process.title')}
            </h2>
            <p className="text-text/70 max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['discovery', 'design', 'development', 'delivery'].map((step, index) => (
              <AnimatedElement key={step} delay={0.3 + index * 0.1}>
                <div className="relative p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 mt-4">
                    {t(`process.steps.${step}.title`)}
                  </h3>
                  <p className="text-text/70">
                    {t(`process.steps.${step}.description`)}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <AnimatedElement delay={0.2} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-text/70 mb-8">
              {t('contact.subtitle')}
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-primary transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30"
            >
              {t('contact.cta')}
            </a>
          </AnimatedElement>
        </div>
      </section>
    </main>
  )
} 