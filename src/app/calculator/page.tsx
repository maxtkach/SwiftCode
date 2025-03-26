'use client'

import Navigation from '@/components/Navigation'
import AnimatedElement from '@/components/AnimatedElement'
import ProjectCalculator from '@/components/ProjectCalculator'

export default function Calculator() {
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
              Project Cost Calculator
            </h1>
            <p className="text-xl text-text/70">
              Get an instant estimate for your project based on your requirements
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <ProjectCalculator />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <AnimatedElement delay={0.2} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text/70">
              Find answers to common questions about our pricing and services
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedElement delay={0.3}>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4">
                  How accurate is the calculator?
                </h3>
                <p className="text-text/70">
                  The calculator provides an estimated cost based on common project requirements. The final price may vary depending on specific needs, complexity, and additional features.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4">
                  What's included in the price?
                </h3>
                <p className="text-text/70">
                  The price includes development, design, testing, and deployment. Additional services like maintenance, hosting, and support can be added to the final quote.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.5}>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4">
                  How long does development take?
                </h3>
                <p className="text-text/70">
                  Development time varies based on project complexity. A typical landing page takes 2-4 weeks, while complex applications may take 3-6 months or more.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.6}>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Do you offer payment plans?
                </h3>
                <p className="text-text/70">
                  Yes, we offer flexible payment plans for larger projects. We typically require a deposit upfront and split the remaining payments throughout the development process.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20" />
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-12 text-white/80">
                Contact us to discuss your project requirements in detail
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <a 
                href="/contact" 
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </main>
  )
} 