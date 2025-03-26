'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import AnimatedElement from '@/components/AnimatedElement'
import ProjectCard from '@/components/ProjectCard'
import ProjectFilters from '@/components/ProjectFilters'

const categories = ['All', 'Web Apps', 'Mobile Apps', 'Landing Pages', 'CRM Systems']

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with advanced filtering, search, and payment integration.",
    image: "/projects/ecommerce.jpg",
    category: "Web Apps",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    client: "TechStore"
  },
  {
    title: "Fitness Tracking App",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and progress.",
    image: "/projects/fitness.jpg",
    category: "Mobile Apps",
    technologies: ["React Native", "Firebase", "Redux"],
    client: "FitLife"
  },
  {
    title: "Real Estate Landing",
    description: "High-converting landing page for a luxury real estate agency.",
    image: "/projects/realestate.jpg",
    category: "Landing Pages",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    client: "Luxury Homes"
  },
  {
    title: "Sales CRM System",
    description: "Comprehensive CRM system for managing sales pipeline and customer relationships.",
    image: "/projects/crm.jpg",
    category: "CRM Systems",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    client: "SalesPro"
  },
  {
    title: "Food Delivery App",
    description: "Mobile app for food delivery with real-time tracking and payment integration.",
    image: "/projects/food.jpg",
    category: "Mobile Apps",
    technologies: ["React Native", "Firebase", "Google Maps"],
    client: "FoodExpress"
  },
  {
    title: "SaaS Dashboard",
    description: "Modern dashboard for a SaaS platform with analytics and user management.",
    image: "/projects/dashboard.jpg",
    category: "Web Apps",
    technologies: ["React", "TypeScript", "Chart.js", "Material-UI"],
    client: "DataFlow"
  }
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

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
              Our Portfolio
            </h1>
            <p className="text-xl text-text/70">
              Explore our latest projects and see how we've helped businesses transform their digital presence
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <ProjectFilters
            categories={categories}
            activeCategory={activeCategory}
            onFilterChange={setActiveCategory}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={0.3 + index * 0.1}
              />
            ))}
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
                Let's create something amazing together
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <a 
                href="/contact" 
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </a>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </main>
  )
} 