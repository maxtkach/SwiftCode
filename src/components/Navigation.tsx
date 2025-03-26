'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from '@/hooks/useTranslation'

const servicesItems = [
  { href: '/agency/services#web', key: 'nav.webDev' },
  { href: '/agency/services#mobile', key: 'nav.mobileDev' },
  { href: '/agency/services#design', key: 'nav.design' }
]

const portfolioItems = [
  { href: '/agency/portfolio', key: 'nav.allProjects' },
  { href: '/agency/portfolio#web', key: 'nav.webProjects' },
  { href: '/agency/portfolio#mobile', key: 'nav.mobileProjects' }
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const t = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link href="/agency" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SwiftCode
            </span>
          </Link>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/agency" className="text-text/70 hover:text-accent transition-colors">
              {t('nav.home')}
            </Link>

            {/* Услуги */}
            <div className="relative group">
              <button 
                className="text-text/70 hover:text-accent transition-colors flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {t('nav.services')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-background rounded-lg shadow-lg py-2"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {servicesItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-text/70 hover:text-accent hover:bg-accent/5"
                      >
                        {t(item.key)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Портфолио */}
            <div className="relative group">
              <button 
                className="text-text/70 hover:text-accent transition-colors flex items-center"
                onMouseEnter={() => setIsPortfolioOpen(true)}
                onMouseLeave={() => setIsPortfolioOpen(false)}
              >
                {t('nav.portfolio')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {isPortfolioOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-background rounded-lg shadow-lg py-2"
                    onMouseEnter={() => setIsPortfolioOpen(true)}
                    onMouseLeave={() => setIsPortfolioOpen(false)}
                  >
                    {portfolioItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-text/70 hover:text-accent hover:bg-accent/5"
                      >
                        {t(item.key)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className="text-text/70 hover:text-accent transition-colors">
              {t('nav.contact')}
            </Link>

            <LanguageSwitcher />
          </div>

          {/* Мобильное меню */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <Link href="/agency" className="block text-text hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
                
                <div className="space-y-2">
                  <div className="font-medium text-text/70">{t('nav.services')}</div>
                  {servicesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block pl-4 text-text/70 hover:text-primary transition-colors"
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="font-medium text-text/70">{t('nav.portfolio')}</div>
                  {portfolioItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block pl-4 text-text/70 hover:text-primary transition-colors"
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>

                <Link href="/contact" className="block text-text hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>

                <div className="pt-4">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
} 