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
        description: 'Custom web applications and websites',
        features: {
          '1': 'Custom Web Applications',
          '2': 'E-commerce Solutions',
          '3': 'CMS Development',
          '4': 'API Integration',
          '5': 'Performance Optimization'
        }
        },
        mobile: {
          title: 'Mobile Development',
        description: 'Native and cross-platform mobile apps',
        features: {
          '1': 'iOS & Android Apps',
          '2': 'Cross-platform Solutions',
          '3': 'App Store Publishing',
          '4': 'Push Notifications',
          '5': 'Offline Functionality'
        }
        },
        design: {
          title: 'UI/UX Design',
        description: 'User-centered design solutions',
        features: {
          '1': 'User Research & Analysis',
          '2': 'Wireframing & Prototyping',
          '3': 'Visual Design & Branding',
          '4': 'Interaction Design',
          '5': 'Usability Testing'
        }
      },
      consulting: {
        title: 'IT Consulting',
        description: 'Expert guidance for your digital transformation',
        features: {
          '1': 'Technology Stack Selection',
          '2': 'Architecture Planning',
          '3': 'Performance Optimization',
          '4': 'Security Assessment',
          '5': 'Scalability Planning'
        }
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
        description: 'Веб-приложения и сайты',
        features: {
          '1': 'Веб-приложения под заказ',
          '2': 'Интернет-магазины',
          '3': 'Разработка CMS',
          '4': 'Интеграция API',
          '5': 'Оптимизация производительности'
        }
        },
        mobile: {
          title: 'Мобильная Разработка',
        description: 'Нативные и кроссплатформенные приложения',
        features: {
          '1': 'Приложения для iOS и Android',
          '2': 'Кроссплатформенные решения',
          '3': 'Публикация в App Store',
          '4': 'Push-уведомления',
          '5': 'Офлайн-функциональность'
        }
        },
        design: {
          title: 'UI/UX Дизайн',
        description: 'Дизайн, ориентированный на пользователя',
        features: {
          '1': 'Исследование и анализ пользователей',
          '2': 'Создание макетов и прототипов',
          '3': 'Визуальный дизайн и брендинг',
          '4': 'Проектирование взаимодействия',
          '5': 'Тестирование удобства использования'
        }
      },
      consulting: {
        title: 'IT-Консалтинг',
        description: 'Экспертное руководство для вашей цифровой трансформации',
        features: {
          '1': 'Выбор технологического стека',
          '2': 'Планирование архитектуры',
          '3': 'Оптимизация производительности',
          '4': 'Оценка безопасности',
          '5': 'Планирование масштабируемости'
        }
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
        description: 'Веб-додатки та сайти',
        features: {
          '1': 'Веб-додатки під замовлення',
          '2': 'Інтернет-магазини',
          '3': 'Розробка CMS',
          '4': 'Інтеграція API',
          '5': 'Оптимізація продуктивності'
        }
        },
        mobile: {
          title: 'Мобільна Розробка',
        description: 'Нативні та крос-платформні додатки',
        features: {
          '1': 'Додатки для iOS та Android',
          '2': 'Крос-платформні рішення',
          '3': 'Публікація в App Store',
          '4': 'Push-сповіщення',
          '5': 'Офлайн-функціональність'
        }
        },
        design: {
          title: 'UI/UX Дизайн',
        description: 'Дизайн, орієнтований на користувача',
        features: {
          '1': 'Дослідження та аналіз користувачів',
          '2': 'Створення макетів та прототипів',
          '3': 'Візуальний дизайн та брендинг',
          '4': 'Проектування взаємодії',
          '5': 'Тестування зручності використання'
        }
      },
      consulting: {
        title: 'IT-Консалтинг',
        description: 'Експертне керівництво для вашої цифрової трансформації',
        features: {
          '1': 'Вибір технологічного стеку',
          '2': 'Планування архітектури',
          '3': 'Оптимізація продуктивності',
          '4': 'Оцінка безпеки',
          '5': 'Планування масштабованості'
        }
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