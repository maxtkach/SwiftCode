import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation as useTranslationFn } from '@/translations'

export function useTranslation() {
  const { language } = useLanguage()

  return (key: string) => useTranslationFn(key, language)
} 