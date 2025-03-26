type Language = 'en' | 'ru' | 'uk'

type TranslationValue = string | {
  [key: string]: TranslationValue
}

interface Translations {
  [key: string]: TranslationValue
}

export const translations: Record<Language, Translations> = {
  en: {
    // Навигация
    nav: {
      home: 'Home',
      services: 'Services',
      webDev: 'Web Development',
      mobileDev: 'Mobile Development',
      design: 'UI/UX Design',
      portfolio: 'Portfolio',
      allProjects: 'All Projects',
      webProjects: 'Web Projects',
      mobileProjects: 'Mobile Projects',
      contact: 'Contact'
    },

    // Главная страница
    hero: {
      title: 'We Create Digital Solutions',
      subtitle: 'Web Development • Mobile Apps • UI/UX Design',
      cta: 'Start Project'
    },

    // Сервисы
    services: {
      title: 'Our Services',
      subtitle: 'We offer comprehensive web development solutions',
      web: {
        title: 'Web Development',
        description: 'Custom web applications and websites'
      },
      mobile: {
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile apps'
      },
      design: {
        title: 'UI/UX Design',
        description: 'User-centered design solutions'
      }
    },

    // Статистика
    stats: {
      experience: 'Years Experience',
      projects: 'Projects Completed',
      clients: 'Client Satisfaction'
    },

    // Процесс
    process: {
      title: 'Our Process',
      subtitle: 'How we bring your ideas to life',
      steps: {
        discovery: {
          title: 'Discovery',
          description: 'Understanding your needs and goals'
        },
        design: {
          title: 'Design',
          description: 'Creating beautiful and functional designs'
        },
        development: {
          title: 'Development',
          description: 'Building robust and scalable solutions'
        },
        delivery: {
          title: 'Delivery',
          description: 'Testing and launching your project'
        }
      }
    },

    // Отзывы
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'What our clients say about us',
      items: {
        '1': {
          text: 'Working with this team was a great experience. They delivered exactly what we needed.',
          author: 'John Doe',
          position: 'CEO, TechStart'
        },
        '2': {
          text: 'The quality of their work is outstanding. Highly recommended!',
          author: 'Alice Smith',
          position: 'Product Manager, InnovateCorp'
        },
        '3': {
          text: 'They transformed our business with their digital solutions.',
          author: 'Mike Johnson',
          position: 'Founder, GrowthLabs'
        }
      }
    },

    // Контакты
    contact: {
      title: 'Let\'s Work Together',
      description: 'Ready to start your project? Contact us today!',
      cta: 'Get in Touch'
    }
  },
  ru: {
    // Навигация
    nav: {
      home: 'Главная',
      services: 'Услуги',
      webDev: 'Веб-разработка',
      mobileDev: 'Мобильная разработка',
      design: 'UI/UX Дизайн',
      portfolio: 'Портфолио',
      allProjects: 'Все проекты',
      webProjects: 'Веб-проекты',
      mobileProjects: 'Мобильные проекты',
      contact: 'Контакты'
    },

    // Главная страница
    hero: {
      title: 'Мы Создаем Цифровые Решения',
      subtitle: 'Веб-разработка • Мобильные приложения • UI/UX дизайн',
      cta: 'Начать Проект'
    },

    // Сервисы
    services: {
      title: 'Наши Услуги',
      subtitle: 'Мы предлагаем комплексные решения для веб-разработки',
      web: {
        title: 'Веб-Разработка',
        description: 'Веб-приложения и сайты'
      },
      mobile: {
        title: 'Мобильная Разработка',
        description: 'Нативные и кроссплатформенные приложения'
      },
      design: {
        title: 'UI/UX Дизайн',
        description: 'Дизайн, ориентированный на пользователя'
      }
    },

    // Статистика
    stats: {
      experience: 'Лет Опыта',
      projects: 'Завершенных Проектов',
      clients: 'Довольных Клиентов'
    },

    // Процесс
    process: {
      title: 'Наш Процесс',
      subtitle: 'Как мы воплощаем ваши идеи в жизнь',
      steps: {
        discovery: {
          title: 'Анализ',
          description: 'Изучение ваших потребностей и целей'
        },
        design: {
          title: 'Дизайн',
          description: 'Создание красивых и функциональных решений'
        },
        development: {
          title: 'Разработка',
          description: 'Создание надежных и масштабируемых решений'
        },
        delivery: {
          title: 'Запуск',
          description: 'Тестирование и запуск вашего проекта'
        }
      }
    },

    // Отзывы
    testimonials: {
      title: 'Отзывы Клиентов',
      subtitle: 'Что говорят о нас наши клиенты',
      items: {
        '1': {
          text: 'Работа с этой командой была отличным опытом. Они предоставили именно то, что нам было нужно.',
          author: 'Иван Петров',
          position: 'Генеральный директор, ТехСтарт'
        },
        '2': {
          text: 'Качество их работы превосходное. Очень рекомендую!',
          author: 'Анна Смирнова',
          position: 'Менеджер по продукту, ИнноватКорп'
        },
        '3': {
          text: 'Они трансформировали наш бизнес своими цифровыми решениями.',
          author: 'Михаил Иванов',
          position: 'Основатель, ГроутЛабс'
        }
      }
    },

    // Контакты
    contact: {
      title: 'Давайте Работать Вместе',
      description: 'Готовы начать свой проект? Свяжитесь с нами сегодня!',
      cta: 'Связаться с Нами'
    }
  },
  uk: {
    // Навигация
    nav: {
      home: 'Головна',
      services: 'Послуги',
      webDev: 'Веб-розробка',
      mobileDev: 'Мобільна розробка',
      design: 'UI/UX Дизайн',
      portfolio: 'Портфоліо',
      allProjects: 'Всі проекти',
      webProjects: 'Веб-проекти',
      mobileProjects: 'Мобільні проекти',
      contact: 'Контакти'
    },

    // Главная страница
    hero: {
      title: 'Ми Створюємо Цифрові Рішення',
      subtitle: 'Веб-розробка • Мобільні додатки • UI/UX дизайн',
      cta: 'Розпочати Проект'
    },

    // Сервисы
    services: {
      title: 'Наші Послуги',
      subtitle: 'Ми пропонуємо комплексні рішення для веб-розробки',
      web: {
        title: 'Веб-Розробка',
        description: 'Веб-додатки та сайти'
      },
      mobile: {
        title: 'Мобільна Розробка',
        description: 'Нативні та крос-платформні додатки'
      },
      design: {
        title: 'UI/UX Дизайн',
        description: 'Дизайн, орієнтований на користувача'
      }
    },

    // Статистика
    stats: {
      experience: 'Років Досвіду',
      projects: 'Завершених Проектів',
      clients: 'Задоволених Клієнтів'
    },

    // Процесс
    process: {
      title: 'Наш Процес',
      subtitle: 'Як ми втілюємо ваші ідеї в життя',
      steps: {
        discovery: {
          title: 'Аналіз',
          description: 'Вивчення ваших потреб та цілей'
        },
        design: {
          title: 'Дизайн',
          description: 'Створення красивих та функціональних рішень'
        },
        development: {
          title: 'Розробка',
          description: 'Створення надійних та масштабованих рішень'
        },
        delivery: {
          title: 'Запуск',
          description: 'Тестування та запуск вашого проекту'
        }
      }
    },

    // Отзывы
    testimonials: {
      title: 'Відгуки Клієнтів',
      subtitle: 'Що кажуть про нас наші клієнти',
      items: {
        '1': {
          text: 'Робота з цією командою була чудовим досвідом. Вони надали саме те, що нам було потрібно.',
          author: 'Іван Петренко',
          position: 'Генеральний директор, ТехСтарт'
        },
        '2': {
          text: 'Якість їхньої роботи відмінна. Дуже рекомендую!',
          author: 'Анна Смирнова',
          position: 'Менеджер з продукту, ІнноватКорп'
        },
        '3': {
          text: 'Вони трансформували наш бізнес своїми цифровими рішеннями.',
          author: 'Михайло Іванов',
          position: 'Засновник, ГроутЛабс'
        }
      }
    },

    // Контакты
    contact: {
      title: 'Давайте Працювати Разом',
      description: 'Готові розпочати свій проект? Зв\'яжіться з нами сьогодні!',
      cta: 'Зв\'язатися з Нами'
    }
  }
}

export function useTranslation(key: string, language: Language = 'ru'): string {
  const keys = key.split('.')
  let value: any = translations[language]

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k]
    } else {
      return key
    }
  }

  return typeof value === 'string' ? value : key
} 