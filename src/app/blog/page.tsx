'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import AnimatedElement from '@/components/AnimatedElement'
import BlogCard from '@/components/BlogCard'
import BlogFilters from '@/components/BlogFilters'

const categories = ['All', 'Development', 'Design', 'Business', 'Technology']

const posts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks.",
    image: "/blog/web-dev.jpg",
    category: "Development",
    date: "March 15, 2024",
    author: "John Smith",
    slug: "future-of-web-development"
  },
  {
    title: "Creating Beautiful User Interfaces with Modern Design Tools",
    excerpt: "Learn how to create stunning user interfaces using the latest design tools and techniques.",
    image: "/blog/ui-design.jpg",
    category: "Design",
    date: "March 12, 2024",
    author: "Sarah Johnson",
    slug: "modern-ui-design"
  },
  {
    title: "How to Build a Successful Digital Product Strategy",
    excerpt: "Discover the key elements of a successful digital product strategy and how to implement them.",
    image: "/blog/product-strategy.jpg",
    category: "Business",
    date: "March 10, 2024",
    author: "Michael Chen",
    slug: "digital-product-strategy"
  },
  {
    title: "The Rise of AI in Mobile App Development",
    excerpt: "Explore how artificial intelligence is transforming the mobile app development landscape.",
    image: "/blog/ai-mobile.jpg",
    category: "Technology",
    date: "March 8, 2024",
    author: "Emily Davis",
    slug: "ai-mobile-development"
  },
  {
    title: "Best Practices for React Native Performance Optimization",
    excerpt: "Learn proven techniques to optimize the performance of your React Native applications.",
    image: "/blog/react-native.jpg",
    category: "Development",
    date: "March 5, 2024",
    author: "David Wilson",
    slug: "react-native-performance"
  },
  {
    title: "Designing for Accessibility: A Comprehensive Guide",
    excerpt: "A detailed guide on creating accessible digital products that everyone can use.",
    image: "/blog/accessibility.jpg",
    category: "Design",
    date: "March 3, 2024",
    author: "Lisa Anderson",
    slug: "designing-accessibility"
  }
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category === activeCategory)

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
              Our Blog
            </h1>
            <p className="text-xl text-text/70">
              Insights, tips, and industry updates from our team of experts
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <BlogFilters
            categories={categories}
            activeCategory={activeCategory}
            onFilterChange={setActiveCategory}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.slug}
                {...post}
                delay={0.3 + index * 0.1}
              />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <AnimatedElement delay={0.2} className="text-center py-12">
              <p className="text-xl text-text/70">
                No posts found in this category. Please try another category.
              </p>
            </AnimatedElement>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl text-text/70 mb-8">
                Get the latest insights and updates delivered straight to your inbox
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </main>
  )
} 