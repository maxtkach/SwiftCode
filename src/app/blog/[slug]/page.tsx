'use client'

import Navigation from '@/components/Navigation'
import AnimatedElement from '@/components/AnimatedElement'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// В реальном приложении эти данные будут приходить из API
const article = {
  title: "The Future of Web Development: Trends to Watch in 2024",
  author: "John Smith",
  date: "March 15, 2024",
  readTime: "8 min read",
  category: "Development",
  image: "/blog/web-dev.jpg",
  content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    
    <h2>The Rise of AI in Web Development</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    <h2>WebAssembly and Performance</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    
    <h2>Progressive Web Apps</h2>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
  `,
  relatedArticles: [
    {
      title: "UI/UX Design Trends for 2024",
      image: "/blog/ui-design.jpg",
      category: "Design",
      date: "March 10, 2024",
      slug: "ui-ux-design-trends-2024"
    },
    {
      title: "Product Strategy in the Digital Age",
      image: "/blog/product-strategy.jpg",
      category: "Business",
      date: "March 5, 2024",
      slug: "product-strategy-digital-age"
    }
  ]
}

export default function BlogArticle() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container relative">
          <AnimatedElement delay={0.2} className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {article.category}
              </span>
              <span className="text-text/60">{article.date}</span>
              <span className="text-text/60">•</span>
              <span className="text-text/60">{article.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">
                  {article.author[0]}
                </span>
              </div>
              <div>
                <div className="font-semibold text-primary">{article.author}</div>
                <div className="text-sm text-text/60">Author</div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Article Image */}
      <section className="relative py-12">
        <div className="container">
          <AnimatedElement delay={0.4} className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedElement delay={0.6}>
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-background">
        <div className="container">
          <AnimatedElement delay={0.2} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Related Articles
            </h2>
            <p className="text-xl text-text/70">
              Explore more insights and trends in web development
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-8">
            {article.relatedArticles.map((related, index) => (
              <AnimatedElement key={related.slug} delay={0.3 + index * 0.1}>
                <Link href={`/blog/${related.slug}`}>
                  <motion.div 
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {related.category}
                        </span>
                        <span className="text-sm text-text/60">{related.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                        {related.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated with Our Latest Articles
              </h2>
              <p className="text-xl mb-12 text-white/80">
                Subscribe to our newsletter to receive weekly insights and updates
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
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