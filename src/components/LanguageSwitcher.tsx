'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

type Language = 'en' | 'ru' | 'uk'

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: 'images/flags/gb.svg' },
  { code: 'ru', label: 'Русский', flag: 'images/flags/ru.svg' },
  { code: 'uk', label: 'Українська', flag: 'images/flags/ua.svg' }
]

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
      >
        <Image
          src={languages.find(lang => lang.code === language)?.flag || ''}
          alt={languages.find(lang => lang.code === language)?.label || ''}
          width={20}
          height={20}
          className="rounded-sm"
        />
        <span className="hidden md:inline">{languages.find(lang => lang.code === language)?.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 rounded-lg bg-background shadow-lg border border-accent/20"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-accent/10 transition-colors ${
                    language === lang.code ? 'text-accent' : 'text-text/70'
                  }`}
                >
                  <Image
                    src={lang.flag}
                    alt={lang.label}
                    width={20}
                    height={20}
                    className="rounded-sm"
                  />
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 