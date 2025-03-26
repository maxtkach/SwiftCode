import BlogArticleContent from '@/components/BlogArticleContent'

// Массив статических путей
const articles = [
  {
    slug: "future-of-web-development-2024",
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
    `
  },
  {
    slug: "ui-ux-design-trends-2024",
    title: "UI/UX Design Trends for 2024",
    image: "/blog/ui-design.jpg",
    category: "Design",
    date: "March 10, 2024",
    author: "Alice Johnson",
    readTime: "6 min read",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    `
  },
  {
    slug: "product-strategy-digital-age",
    title: "Product Strategy in the Digital Age",
    image: "/blog/product-strategy.jpg",
    category: "Business",
    date: "March 5, 2024",
    author: "Mike Wilson",
    readTime: "7 min read",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    `
  }
]

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

function getArticleBySlug(slug: string) {
  return articles.find(article => article.slug === slug)
}

function getRelatedArticles(currentSlug: string) {
  return articles
    .filter(article => article.slug !== currentSlug)
    .slice(0, 2)
}

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  const relatedArticles = getRelatedArticles(params.slug)

  if (!article) {
    return <div>Article not found</div>
  }

  return <BlogArticleContent article={article} relatedArticles={relatedArticles} />
} 