type Language = 'en' | 'ru' | 'uk'

type TranslationValue = string | {
  [key: string]: TranslationValue
}

interface Translations {
  [key: string]: {
    [key in Language]: TranslationValue
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    // Навигация
    'nav.home': {
      en: 'Home',
      ru: 'Главная',
      uk: 'Головна'
    },
    'nav.services': {
      en: 'Services',
      ru: 'Услуги',
      uk: 'Послуги'
    },
    'nav.webDev': {
      en: 'Web Development',
      ru: 'Веб-разработка',
      uk: 'Веб-розробка'
    },
    'nav.mobileDev': {
      en: 'Mobile Development',
      ru: 'Мобильная разработка',
      uk: 'Мобільна розробка'
    },
    'nav.design': {
      en: 'UI/UX Design',
      ru: 'UI/UX Дизайн',
      uk: 'UI/UX Дизайн'
    },
    'nav.portfolio': {
      en: 'Portfolio',
      ru: 'Портфолио',
      uk: 'Портфоліо'
    },
    'nav.allProjects': {
      en: 'All Projects',
      ru: 'Все проекты',
      uk: 'Всі проекти'
    },
    'nav.webProjects': {
      en: 'Web Projects',
      ru: 'Веб-проекты',
      uk: 'Веб-проекти'
    },
    'nav.mobileProjects': {
      en: 'Mobile Projects',
      ru: 'Мобильные проекты',
      uk: 'Мобільні проекти'
    },
    'nav.contact': {
      en: 'Contact',
      ru: 'Контакты',
      uk: 'Контакти'
    },

    // Главная страница
    'hero.title': {
      en: 'We Create Digital Solutions',
      ru: 'Мы Создаем Цифровые Решения',
      uk: 'Ми Створюємо Цифрові Рішення'
    },
    'hero.subtitle': {
      en: 'Web Development • Mobile Apps • UI/UX Design',
      ru: 'Веб-разработка • Мобильные приложения • UI/UX дизайн',
      uk: 'Веб-розробка • Мобільні додатки • UI/UX дизайн'
    },
    'hero.cta': {
      en: 'Start Project',
      ru: 'Начать Проект',
      uk: 'Розпочати Проект'
    },

    // Сервисы
    'services.title': {
      en: 'Our Services',
      ru: 'Наши Услуги',
      uk: 'Наші Послуги'
    },
    'services.subtitle': {
      en: 'We offer comprehensive web development solutions',
      ru: 'Мы предлагаем комплексные решения для веб-разработки',
      uk: 'Ми пропонуємо комплексні рішення для веб-розробки'
    },
    'services.web.title': {
      en: 'Web Development',
      ru: 'Веб-Разработка',
      uk: 'Веб-Розробка'
    },
    'services.web.description': {
      en: 'Custom web applications and websites built with modern technologies',
      ru: 'Индивидуальные веб-приложения и сайты на современных технологиях',
      uk: 'Індивідуальні веб-додатки та сайти на сучасних технологіях'
    },
    'services.web.features.1': {
      en: 'Responsive and mobile-first design',
      ru: 'Адаптивный и мобильный дизайн',
      uk: 'Адаптивний та мобільний дизайн'
    },
    'services.web.features.2': {
      en: 'Fast and optimized performance',
      ru: 'Быстрая и оптимизированная производительность',
      uk: 'Швидка та оптимізована продуктивність'
    },
    'services.web.features.3': {
      en: 'SEO-friendly architecture',
      ru: 'SEO-оптимизированная архитектура',
      uk: 'SEO-оптимізована архітектура'
    },
    'services.mobile.title': {
      en: 'Mobile Development',
      ru: 'Мобильная Разработка',
      uk: 'Мобільна Розробка'
    },
    'services.mobile.description': {
      en: 'Native and cross-platform mobile applications',
      ru: 'Нативные и кроссплатформенные мобильные приложения',
      uk: 'Нативні та крос-платформні мобільні додатки'
    },
    'services.mobile.features.1': {
      en: 'iOS and Android development',
      ru: 'Разработка для iOS и Android',
      uk: 'Розробка для iOS та Android'
    },
    'services.mobile.features.2': {
      en: 'Cross-platform solutions',
      ru: 'Кроссплатформенные решения',
      uk: 'Крос-платформні рішення'
    },
    'services.mobile.features.3': {
      en: 'App store optimization',
      ru: 'Оптимизация для магазинов приложений',
      uk: 'Оптимізація для магазинів додатків'
    },
    'services.design.title': {
      en: 'UI/UX Design',
      ru: 'UI/UX Дизайн',
      uk: 'UI/UX Дизайн'
    },
    'services.design.description': {
      en: 'Beautiful and intuitive user interfaces',
      ru: 'Красивый и интуитивный пользовательский интерфейс',
      uk: 'Гарний та інтуїтивний користувацький інтерфейс'
    },
    'services.design.features.1': {
      en: 'User-centered design approach',
      ru: 'Дизайн, ориентированный на пользователя',
      uk: 'Дизайн, орієнтований на користувача'
    },
    'services.design.features.2': {
      en: 'Interactive prototypes',
      ru: 'Интерактивные прототипы',
      uk: 'Інтерактивні прототипи'
    },
    'services.design.features.3': {
      en: 'Brand identity integration',
      ru: 'Интеграция с брендингом',
      uk: 'Інтеграція з брендингом'
    },
    'services.consulting.title': {
      en: 'IT Consulting',
      ru: 'IT Консалтинг',
      uk: 'IT Консалтинг'
    },
    'services.consulting.description': {
      en: 'Expert guidance for your digital transformation',
      ru: 'Экспертное руководство для вашей цифровой трансформации',
      uk: 'Експертне керівництво для вашої цифрової трансформації'
    },
    'services.consulting.features.1': {
      en: 'Technology stack selection',
      ru: 'Выбор технологического стека',
      uk: 'Вибір технологічного стеку'
    },
    'services.consulting.features.2': {
      en: 'Architecture planning',
      ru: 'Планирование архитектуры',
      uk: 'Планування архітектури'
    },
    'services.consulting.features.3': {
      en: 'Performance optimization',
      ru: 'Оптимизация производительности',
      uk: 'Оптимізація продуктивності'
    },

    // Портфолио
    'portfolio.title': {
      en: 'Our Projects',
      ru: 'Наши Проекты',
      uk: 'Наші Проекти'
    },
    'portfolio.subtitle': {
      en: 'Check out our latest work',
      ru: 'Посмотрите наши последние работы',
      uk: 'Перегляньте наші останні роботи'
    },

    // О нас
    'about.title': {
      en: 'About Us',
      ru: 'О Нас',
      uk: 'Про Нас'
    },
    'about.subtitle': {
      en: 'We are a team of passionate developers',
      ru: 'Мы команда увлеченных разработчиков',
      uk: 'Ми команда захоплених розробників'
    },

    // Блог
    'blog.title': {
      en: 'Our Blog',
      ru: 'Наш Блог',
      uk: 'Наш Блог'
    },
    'blog.subtitle': {
      en: 'Latest news and insights',
      ru: 'Последние новости и статьи',
      uk: 'Останні новини та статті'
    },

    // Контакты
    'contact.title': {
      en: "Let's Work Together",
      ru: 'Давайте Работать Вместе',
      uk: 'Давайте Працювати Разом'
    },
    'contact.subtitle': {
      en: "Have a project in mind? Let's discuss how we can help bring your ideas to life",
      ru: "Есть проект? Давайте обсудим, как мы можем помочь воплотить ваши идеи в жизнь",
      uk: "Є проект? Давайте обговоримо, як ми можемо допомогти втілити ваші ідеї в життя"
    },
    'contact.letsTalk': {
      en: "Let's Talk",
      ru: "Давайте обсудим",
      uk: "Давайте обговоримо"
    },
    'contact.description': {
      en: "We're always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
      ru: "Мы всегда открыты для обсуждения новых проектов, творческих идей или возможностей стать частью вашего видения.",
      uk: "Ми завжди відкриті для обговорення нових проектів, творчих ідей або можливостей стати частиною вашого бачення."
    },
    'contact.workingHours': {
      en: "Working Hours",
      ru: "Часы работы",
      uk: "Години роботи"
    },
    'contact.weekdays': {
      en: "Monday - Friday",
      ru: "Понедельник - Пятница",
      uk: "Понеділок - П'ятниця"
    },
    'contact.weekends': {
      en: "Weekends",
      ru: "Выходные",
      uk: "Вихідні"
    },
    'contact.byAppointment': {
      en: "By appointment",
      ru: "По договоренности",
      uk: "За попереднім записом"
    },
    'contact.name': {
      en: "Your Name",
      ru: "Ваше имя",
      uk: "Ваше ім'я"
    },
    'contact.email': {
      en: "Your Email",
      ru: "Ваш email",
      uk: "Ваш email"
    },
    'contact.message': {
      en: "Your Message",
      ru: "Ваше сообщение",
      uk: "Ваше повідомлення"
    },
    'contact.send': {
      en: "Send Message",
      ru: "Отправить сообщение",
      uk: "Надіслати повідомлення"
    },
    'contact.sending': {
      en: "Sending...",
      ru: "Отправка...",
      uk: "Відправка..."
    },
    'contact.success': {
      en: "Thank you! Your message has been sent successfully.",
      ru: "Спасибо! Ваше сообщение успешно отправлено.",
      uk: "Дякуємо! Ваше повідомлення успішно відправлено."
    },
    'contact.cta': {
      en: 'Get in Touch',
      ru: 'Связаться с Нами',
      uk: 'Зв\'язатись з Нами'
    },
    home: {
      hero: {
        title: 'We Create Digital Solutions',
        subtitle: 'Web Development • Mobile Apps • UI/UX Design',
        description: 'We help businesses grow through innovative digital solutions. Our team creates modern, user-friendly applications that drive results.',
        cta: 'Start Project'
      },
      services: {
        title: 'Our Services',
        subtitle: 'What We Do',
        web: {
          title: 'Web Development',
          description: 'Modern and responsive websites, web applications, and e-commerce solutions.',
          features: [
            'Custom Web Applications',
            'E-commerce Solutions',
            'Progressive Web Apps'
          ]
        },
        mobile: {
          title: 'Mobile Development',
          description: 'Native and cross-platform mobile applications for iOS and Android.',
          features: [
            'iOS & Android Apps',
            'Cross-platform Solutions',
            'App Maintenance'
          ]
        },
        design: {
          title: 'UI/UX Design',
          description: 'User-centered design solutions that enhance user experience and engagement.',
          features: [
            'User Interface Design',
            'User Experience Design',
            'Design Systems'
          ]
        },
        consulting: {
          title: 'IT Consulting',
          description: 'Expert guidance for your digital transformation journey.',
          features: [
            'Technical Consulting',
            'Digital Strategy',
            'Project Planning'
          ]
        }
      },
      process: {
        title: 'Our Process',
        subtitle: 'How We Work',
        steps: {
          discovery: {
            title: 'Discovery',
            description: 'We analyze your requirements and create a detailed project plan.'
          },
          design: {
            title: 'Design',
            description: 'We create wireframes and design prototypes for your approval.'
          },
          development: {
            title: 'Development',
            description: 'Our team develops your solution using the latest technologies.'
          },
          delivery: {
            title: 'Delivery',
            description: 'We thoroughly test and deploy your solution to production.'
          }
        }
      },
      projects: {
        title: 'Our Projects',
        subtitle: 'Recent Work',
        viewAll: 'View All Projects'
      },
      contact: {
        title: 'Let\'s Work Together',
        subtitle: 'Start Your Project',
        description: 'Contact us to discuss your project and get a free consultation.',
        cta: 'Get in Touch'
      }
    },
    // Process Section
    'process.title': {
      en: 'Our Process',
      ru: 'Наш Процесс',
      uk: 'Наш Процес'
    },
    'process.subtitle': {
      en: 'How We Work',
      ru: 'Как Мы Работаем',
      uk: 'Як Ми Працюємо'
    },
    'process.steps.discovery.title': {
      en: 'Discovery',
      ru: 'Анализ',
      uk: 'Аналіз'
    },
    'process.steps.discovery.description': {
      en: 'We analyze your requirements and create a detailed project plan.',
      ru: 'Мы анализируем ваши требования и создаем детальный план проекта.',
      uk: 'Ми аналізуємо ваші вимоги та створюємо детальний план проекту.'
    },
    'process.steps.design.title': {
      en: 'Design',
      ru: 'Дизайн',
      uk: 'Дизайн'
    },
    'process.steps.design.description': {
      en: 'We create wireframes and design prototypes for your approval.',
      ru: 'Создаем макеты и дизайн-прототипы для вашего одобрения.',
      uk: 'Створюємо макети та дизайн-прототипи для вашого схвалення.'
    },
    'process.steps.development.title': {
      en: 'Development',
      ru: 'Разработка',
      uk: 'Розробка'
    },
    'process.steps.development.description': {
      en: 'Our team develops your solution using the latest technologies.',
      ru: 'Наша команда разрабатывает ваше решение, используя новейшие технологии.',
      uk: 'Наша команда розробляє ваше рішення, використовуючи новітні технології.'
    },
    'process.steps.delivery.title': {
      en: 'Delivery',
      ru: 'Запуск',
      uk: 'Запуск'
    },
    'process.steps.delivery.description': {
      en: 'We thoroughly test and deploy your solution to production.',
      ru: 'Тщательно тестируем и развертываем ваше решение в продакшн.',
      uk: 'Ретельно тестуємо та розгортаємо ваше рішення в продакшн.'
    },

    // Stats
    'stats.experience': {
      en: 'Years of Experience',
      ru: 'Лет опыта',
      uk: 'Років досвіду'
    },
    'stats.projects': {
      en: 'Projects Completed',
      ru: 'Проектов',
      uk: 'Проектів'
    },
    'stats.clients': {
      en: 'Happy Clients',
      ru: 'Довольных клиентов',
      uk: 'Задоволених клієнтів'
    },

    // Testimonials Section
    'testimonials.title': {
      en: 'What Our Clients Say',
      ru: 'Отзывы Наших Клиентов',
      uk: 'Відгуки Наших Клієнтів'
    },
    'testimonials.subtitle': {
      en: 'Trusted by leading companies worldwide',
      ru: 'Нам доверяют ведущие компании по всему миру',
      uk: 'Нам довіряють провідні компанії по всьому світу'
    },
    'testimonials.items.1.text': {
      en: 'The team delivered exceptional results that transformed our online presence. Their attention to detail and innovative approach exceeded our expectations.',
      ru: 'Команда показала исключительные результаты, которые преобразили наше онлайн-присутствие. Их внимание к деталям и инновационный подход превзошли наши ожидания.',
      uk: 'Команда показала виняткові результати, які перетворили нашу онлайн-присутність. Їх увага до деталей та інноваційний підхід перевершив наші очікування.'
    },
    'testimonials.items.1.author': {
      en: 'John Doe',
      ru: 'Иван Петров',
      uk: 'Іван Петров'
    },
    'testimonials.items.1.position': {
      en: 'CEO, TechCorp',
      ru: 'Генеральный директор, ТехКорп',
      uk: 'Генеральний директор, ТехКорп'
    },
    'testimonials.items.2.text': {
      en: 'Working with this agency was a game-changer for our business. Their expertise in UI/UX design helped us create a product that users love.',
      ru: 'Работа с этим агентством стала переломным моментом для нашего бизнеса. Их опыт в UI/UX дизайне помог нам создать продукт, который любят пользователи.',
      uk: 'Робота з цим агентством стала переломним моментом для нашого бізнесу. Їх досвід у UI/UX дизайні допоміг нам створити продукт, який люблять користувачі.'
    },
    'testimonials.items.2.author': {
      en: 'Alice Smith',
      ru: 'Анна Сидорова',
      uk: 'Анна Сидорова'
    },
    'testimonials.items.2.position': {
      en: 'Product Manager, InnovateApp',
      ru: 'Менеджер продукта, ИнноватАпп',
      uk: 'Менеджер продукту, ІнноватАпп'
    },
    'testimonials.items.3.text': {
      en: 'The level of professionalism and creativity they brought to our project was outstanding. They understood our vision perfectly and delivered beyond our expectations.',
      ru: 'Уровень профессионализма и креативности, который они привнесли в наш проект, был выдающимся. Они идеально поняли наше видение и превзошли наши ожидания.',
      uk: 'Рівень професіоналізму та креативності, який вони принесли в наш проект, був видатним. Вони ідеально зрозуміли наше бачення та перевершили наші очікування.'
    },
    'testimonials.items.3.author': {
      en: 'Michael King',
      ru: 'Михаил Иванов',
      uk: 'Михайло Іванов'
    },
    'testimonials.items.3.position': {
      en: 'CTO, GlobalTech',
      ru: 'Технический директор, ГлобалТех',
      uk: 'Технічний директор, ГлобалТех'
    }
  },
  ru: {
    // Навигация
    'nav.home': {
      en: 'Главная',
      ru: 'Главная',
      uk: 'Головна'
    },
    'nav.services': {
      en: 'Услуги',
      ru: 'Услуги',
      uk: 'Послуги'
    },
    'nav.webDev': {
      en: 'Веб-разработка',
      ru: 'Веб-разработка',
      uk: 'Веб-розробка'
    },
    'nav.mobileDev': {
      en: 'Мобильная разработка',
      ru: 'Мобильная разработка',
      uk: 'Мобільна розробка'
    },
    'nav.design': {
      en: 'UI/UX Design',
      ru: 'UI/UX Дизайн',
      uk: 'UI/UX Дизайн'
    },
    'nav.portfolio': {
      en: 'Портфолио',
      ru: 'Портфолио',
      uk: 'Портфоліо'
    },
    'nav.allProjects': {
      en: 'Все проекты',
      ru: 'Все проекты',
      uk: 'Всі проекти'
    },
    'nav.webProjects': {
      en: 'Веб-проекты',
      ru: 'Веб-проекты',
      uk: 'Веб-проекти'
    },
    'nav.mobileProjects': {
      en: 'Мобильные проекты',
      ru: 'Мобильные проекты',
      uk: 'Мобільні проекти'
    },
    'nav.contact': {
      en: 'Контакты',
      ru: 'Контакты',
      uk: 'Контакти'
    },

    // Главная страница
    'hero.title': {
      en: 'Создаем Цифровые Решения',
      ru: 'Создаем Цифровые Решения',
      uk: 'Створюємо Цифрові Рішення'
    },
    'hero.subtitle': {
      en: 'Веб-разработка • Мобильные приложения • UI/UX дизайн',
      ru: 'Веб-разработка • Мобильные приложения • UI/UX дизайн',
      uk: 'Веб-розробка • Мобільні додатки • UI/UX дизайн'
    },
    'hero.cta': {
      en: 'Начать Проект',
      ru: 'Начать Проект',
      uk: 'Розпочати Проект'
    },

    // Сервисы
    'services.title': {
      en: 'Наши Услуги',
      ru: 'Наши Услуги',
      uk: 'Наші Послуги'
    },
    'services.subtitle': {
      en: 'Что Мы Делаем',
      ru: 'Что Мы Делаем',
      uk: 'Що Ми Робимо'
    },
    'services.web.title': {
      en: 'Веб-разработка',
      ru: 'Веб-разработка',
      uk: 'Веб-розробка'
    },
    'services.web.description': {
      en: 'Современные и адаптивные веб-сайты, веб-приложения и решения для электронной коммерции.',
      ru: 'Современные и адаптивные веб-сайты, веб-приложения и решения для электронной коммерции.',
      uk: 'Сучасні та адаптивні веб-сайти, веб-додатки та рішення для електронної комерції.'
    },
    'services.web.features.1': {
      en: 'Корпоративные Веб-приложения',
      ru: 'Корпоративные Веб-приложения',
      uk: 'Корпоративні Веб-додатки'
    },
    'services.web.features.2': {
      en: 'Решения для Электронной Коммерции',
      ru: 'Решения для Электронной Коммерции',
      uk: 'Рішення для Електронної Комерції'
    },
    'services.web.features.3': {
      en: 'Прогрессивные Веб-приложения',
      ru: 'Прогрессивные Веб-приложения',
      uk: 'Прогресивні Веб-додатки'
    },
    'services.mobile.title': {
      en: 'Мобильная Разработка',
      ru: 'Мобильная Разработка',
      uk: 'Мобільна Розробка'
    },
    'services.mobile.description': {
      en: 'Нативные и кроссплатформенные мобильные приложения для iOS и Android.',
      ru: 'Нативные и кроссплатформенные мобильные приложения для iOS и Android.',
      uk: 'Нативні та крос-платформні мобільні додатки для iOS та Android.'
    },
    'services.mobile.features.1': {
      en: 'Приложения для iOS и Android',
      ru: 'Приложения для iOS и Android',
      uk: 'Додатки для iOS та Android'
    },
    'services.mobile.features.2': {
      en: 'Кроссплатформенные Решения',
      ru: 'Кроссплатформенные Решения',
      uk: 'Крос-платформні Рішення'
    },
    'services.mobile.features.3': {
      en: 'Поддержка Приложений',
      ru: 'Поддержка Приложений',
      uk: 'Підтримка Додатків'
    },
    'services.design.title': {
      en: 'UI/UX Дизайн',
      ru: 'UI/UX Дизайн',
      uk: 'UI/UX Дизайн'
    },
    'services.design.description': {
      en: 'Дизайн-решения, ориентированные на пользователя, которые улучшают пользовательский опыт.',
      ru: 'Дизайн-решения, ориентированные на пользователя, которые улучшают пользовательский опыт.',
      uk: 'Дизайн-рішення, орієнтовані на користувача, які покращують користувацький досвід.'
    },
    'services.design.features.1': {
      en: 'Дизайн Интерфейса',
      ru: 'Дизайн Интерфейса',
      uk: 'Дизайн Інтерфейсу'
    },
    'services.design.features.2': {
      en: 'Дизайн Пользовательского Опыта',
      ru: 'Дизайн Пользовательского Опыта',
      uk: 'Дизайн Користувацького Досвіту'
    },
    'services.design.features.3': {
      en: 'Дизайн-системы',
      ru: 'Дизайн-системы',
      uk: 'Дизайн-системи'
    },
    'services.consulting.title': {
      en: 'IT-консалтинг',
      ru: 'IT-консалтинг',
      uk: 'IT Консалтинг'
    },
    'services.consulting.description': {
      en: 'Экспертное руководство для вашего цифрового преобразования.',
      ru: 'Экспертное руководство для вашего цифрового преобразования.',
      uk: 'Експертне керівництво для вашого цифрового перетворення.'
    },
    'services.consulting.features.1': {
      en: 'Технический Консалтинг',
      ru: 'Технический Консалтинг',
      uk: 'Технічний Консалтинг'
    },
    'services.consulting.features.2': {
      en: 'Цифровая Стратегія',
      ru: 'Цифровая Стратегія',
      uk: 'Цифрова Стратегія'
    },
    'services.consulting.features.3': {
      en: 'Планирование Проекта',
      ru: 'Планирование Проекта',
      uk: 'Планування Проекту'
    },

    // Портфолио
    'portfolio.title': {
      en: 'Наши Проекты',
      ru: 'Наши Проекты',
      uk: 'Наші Проекти'
    },
    'portfolio.subtitle': {
      en: 'Последние Работы',
      ru: 'Последние Работы',
      uk: 'Останні Роботи'
    },

    // О нас
    'about.title': {
      en: 'About Us',
      ru: 'О Нас',
      uk: 'Про Нас'
    },
    'about.subtitle': {
      en: 'Мы команда увлеченных разработчиков',
      ru: 'Мы команда увлеченных разработчиков',
      uk: 'Ми команда захоплених розробників'
    },

    // Блог
    'blog.title': {
      en: 'Наш Блог',
      ru: 'Наш Блог',
      uk: 'Наш Блог'
    },
    'blog.subtitle': {
      en: 'Последние новости и статьи',
      ru: 'Последние новости и статьи',
      uk: 'Останні новини та статті'
    },

    // Контакты
    'contact.title': {
      en: 'Давайте Работать Вместе',
      ru: 'Давайте Работать Вместе',
      uk: 'Давайте Працювати Разом'
    },
    'contact.subtitle': {
      en: 'Начните Свой Проект',
      ru: 'Начните Свой Проект',
      uk: 'Розпочніть Свій Проект'
    },
    'contact.letsTalk': {
      en: "Давайте обсудим",
      ru: "Давайте обсудим",
      uk: "Давайте обговоримо"
    },
    'contact.description': {
      en: 'Свяжитесь с нами для обсуждения вашего проекта и получения бесплатной консультации.',
      ru: 'Свяжитесь с нами для обсуждения вашего проекта и получения бесплатной консультации.',
      uk: 'Зв\'яжіться з нами для обговорення вашого проекту та отримання безкоштовної консультації.'
    },
    'contact.workingHours': {
      en: "Часы работы",
      ru: "Часы работы",
      uk: "Години роботи"
    },
    'contact.weekdays': {
      en: "Понедельник - Пятница",
      ru: "Понедельник - Пятница",
      uk: "Понеділок - П'ятниця"
    },
    'contact.weekends': {
      en: "Выходные",
      ru: "Выходные",
      uk: "Вихідні"
    },
    'contact.byAppointment': {
      en: "По договоренности",
      ru: "По договоренности",
      uk: "За попереднім записом"
    },
    'contact.name': {
      en: "Ваше имя",
      ru: "Ваше имя",
      uk: "Ваше ім'я"
    },
    'contact.email': {
      en: "Ваш email",
      ru: "Ваш email",
      uk: "Ваш email"
    },
    'contact.message': {
      en: "Ваше сообщение",
      ru: "Ваше сообщение",
      uk: "Ваше повідомлення"
    },
    'contact.send': {
      en: "Отправить сообщение",
      ru: "Отправить сообщение",
      uk: "Надіслати повідомлення"
    },
    'contact.sending': {
      en: "Отправка...",
      ru: "Отправка...",
      uk: "Відправка..."
    },
    'contact.success': {
      en: "Спасибо! Ваше сообщение успешно отправлено.",
      ru: "Спасибо! Ваше сообщение успешно отправлено.",
      uk: "Дякуємо! Ваше повідомлення успішно відправлено."
    },
    'contact.cta': {
      en: 'Связаться с Нами',
      ru: 'Связаться с Нами',
      uk: 'Зв\'язатись з Нами'
    },
    home: {
      hero: {
        title: 'Создаем Цифровые Решения',
        subtitle: 'Веб-разработка • Мобильные приложения • UI/UX дизайн',
        description: 'Мы помогаем бизнесу расти с помощью инновационных цифровых решений. Наша команда создает современные, удобные приложения, которые приносят результаты.',
        cta: 'Начать Проект'
      },
      services: {
        title: 'Наши Услуги',
        subtitle: 'Что Мы Делаем',
        web: {
          title: 'Веб-разработка',
          description: 'Современные и адаптивные веб-сайты, веб-приложения и решения для электронной коммерции.',
          features: [
            'Корпоративные Веб-приложения',
            'Решения для Электронной Коммерции',
            'Прогрессивные Веб-приложения'
          ]
        },
        mobile: {
          title: 'Мобильная Разработка',
          description: 'Нативные и кроссплатформенные мобильные приложения для iOS и Android.',
          features: [
            'Приложения для iOS и Android',
            'Кроссплатформенные Решения',
            'Поддержка Приложений'
          ]
        },
        design: {
          title: 'UI/UX Дизайн',
          description: 'Дизайн-решения, ориентированные на пользователя, которые улучшают пользовательский опыт.',
          features: [
            'Дизайн Интерфейса',
            'Дизайн Пользовательского Опыта',
            'Дизайн-системы'
          ]
        },
        consulting: {
          title: 'IT-консалтинг',
          description: 'Экспертное руководство для вашего цифрового преобразования.',
          features: [
            'Технический Консалтинг',
            'Цифровая Стратегія',
            'Планирование Проекта'
          ]
        }
      },
      process: {
        title: 'Наш Процесс',
        subtitle: 'Как Мы Работаем',
        steps: {
          discovery: {
            title: 'Анализ',
            description: 'Мы анализируем ваши требования и создаем детальный план проекта.'
          },
          design: {
            title: 'Дизайн',
            description: 'Создаем макеты и дизайн-прототипы для вашего одобрения.'
          },
          development: {
            title: 'Разработка',
            description: 'Наша команда разрабатывает ваше решение, используя новейшие технологии.'
          },
          delivery: {
            title: 'Запуск',
            description: 'Тщательно тестируем и развертываем ваше решение в продакшн.'
          }
        }
      },
      projects: {
        title: 'Наши Проекты',
        subtitle: 'Последние Работы',
        viewAll: 'Смотреть Все Проекты'
      },
      contact: {
        title: 'Давайте Работать Вместе',
        subtitle: 'Начните Свой Проект',
        description: 'Свяжитесь с нами для обсуждения вашего проекта и получения бесплатной консультации.',
        cta: 'Связаться с Нами'
      }
    },
    // Process Section
    'process.title': {
      en: 'Our Process',
      ru: 'Наш Процесс',
      uk: 'Наш Процес'
    },
    'process.subtitle': {
      en: 'How We Work',
      ru: 'Как Мы Работаем',
      uk: 'Як Ми Працюємо'
    },
    'process.steps.discovery.title': {
      en: 'Discovery',
      ru: 'Анализ',
      uk: 'Аналіз'
    },
    'process.steps.discovery.description': {
      en: 'We analyze your requirements and create a detailed project plan.',
      ru: 'Мы анализируем ваши требования и создаем детальный план проекта.',
      uk: 'Ми аналізуємо ваші вимоги та створюємо детальний план проекту.'
    },
    'process.steps.design.title': {
      en: 'Design',
      ru: 'Дизайн',
      uk: 'Дизайн'
    },
    'process.steps.design.description': {
      en: 'We create wireframes and design prototypes for your approval.',
      ru: 'Создаем макеты и дизайн-прототипы для вашего одобрения.',
      uk: 'Створюємо макети та дизайн-прототипи для вашого схвалення.'
    },
    'process.steps.development.title': {
      en: 'Development',
      ru: 'Разработка',
      uk: 'Розробка'
    },
    'process.steps.development.description': {
      en: 'Our team develops your solution using the latest technologies.',
      ru: 'Наша команда разрабатывает ваше решение, используя новейшие технологии.',
      uk: 'Наша команда розробляє ваше рішення, використовуючи новітні технології.'
    },
    'process.steps.delivery.title': {
      en: 'Delivery',
      ru: 'Запуск',
      uk: 'Запуск'
    },
    'process.steps.delivery.description': {
      en: 'We thoroughly test and deploy your solution to production.',
      ru: 'Тщательно тестируем и развертываем ваше решение в продакшн.',
      uk: 'Ретельно тестуємо та розгортаємо ваше рішення в продакшн.'
    },

    // Stats
    'stats.experience': {
      en: 'Years of Experience',
      ru: 'Лет опыта',
      uk: 'Років досвіду'
    },
    'stats.projects': {
      en: 'Projects Completed',
      ru: 'Проектов',
      uk: 'Проектів'
    },
    'stats.clients': {
      en: 'Happy Clients',
      ru: 'Довольных клиентов',
      uk: 'Задоволених клієнтів'
    },

    // Testimonials Section
    'testimonials.title': {
      en: 'What Our Clients Say',
      ru: 'Отзывы Наших Клиентов',
      uk: 'Відгуки Наших Клієнтів'
    },
    'testimonials.subtitle': {
      en: 'Trusted by leading companies worldwide',
      ru: 'Нам доверяют ведущие компании по всему миру',
      uk: 'Нам довіряють провідні компанії по всьому світу'
    },
    'testimonials.items.1.text': {
      en: 'The team delivered exceptional results that transformed our online presence. Their attention to detail and innovative approach exceeded our expectations.',
      ru: 'Команда показала исключительные результаты, которые преобразили наше онлайн-присутствие. Их внимание к деталям и инновационный подход превзошли наши ожидания.',
      uk: 'Команда показала виняткові результати, які перетворили нашу онлайн-присутність. Їх увага до деталей та інноваційний підхід перевершив наші очікування.'
    },
    'testimonials.items.1.author': {
      en: 'John Doe',
      ru: 'Иван Петров',
      uk: 'Іван Петров'
    },
    'testimonials.items.1.position': {
      en: 'CEO, TechCorp',
      ru: 'Генеральный директор, ТехКорп',
      uk: 'Генеральний директор, ТехКорп'
    },
    'testimonials.items.2.text': {
      en: 'Working with this agency was a game-changer for our business. Their expertise in UI/UX design helped us create a product that users love.',
      ru: 'Работа с этим агентством стала переломным моментом для нашего бизнеса. Их опыт в UI/UX дизайне помог нам создать продукт, который любят пользователи.',
      uk: 'Робота з цим агентством стала переломним моментом для нашого бізнесу. Їх досвід у UI/UX дизайні допоміг нам створити продукт, який люблять користувачі.'
    },
    'testimonials.items.2.author': {
      en: 'Alice Smith',
      ru: 'Анна Сидорова',
      uk: 'Анна Сидорова'
    },
    'testimonials.items.2.position': {
      en: 'Product Manager, InnovateApp',
      ru: 'Менеджер продукта, ИнноватАпп',
      uk: 'Менеджер продукту, ІнноватАпп'
    },
    'testimonials.items.3.text': {
      en: 'The level of professionalism and creativity they brought to our project was outstanding. They understood our vision perfectly and delivered beyond our expectations.',
      ru: 'Уровень профессионализма и креативности, который они привнесли в наш проект, был выдающимся. Они идеально поняли наше видение и превзошли наши ожидания.',
      uk: 'Рівень професіоналізму та креативності, який вони принесли в наш проект, був видатним. Вони ідеально зрозуміли наше бачення та перевершили наші очікування.'
    },
    'testimonials.items.3.author': {
      en: 'Michael King',
      ru: 'Михаил Иванов',
      uk: 'Михайло Іванов'
    },
    'testimonials.items.3.position': {
      en: 'CTO, GlobalTech',
      ru: 'Технический директор, ГлобалТех',
      uk: 'Технічний директор, ГлобалТех'
    }
  },
  uk: {
    // Навигация
    'nav.home': {
      en: 'Home',
      ru: 'Главная',
      uk: 'Головна'
    },
    'nav.services': {
      en: 'Services',
      ru: 'Услуги',
      uk: 'Послуги'
    },
    'nav.webDev': {
      en: 'Web Development',
      ru: 'Веб-разработка',
      uk: 'Веб-розробка'
    },
    'nav.mobileDev': {
      en: 'Mobile Development',
      ru: 'Мобильная разработка',
      uk: 'Мобільна розробка'
    },
    'nav.design': {
      en: 'UI/UX Design',
      ru: 'UI/UX Дизайн',
      uk: 'UI/UX Дизайн'
    },
    'nav.portfolio': {
      en: 'Portfolio',
      ru: 'Портфолио',
      uk: 'Портфоліо'
    },
    'nav.allProjects': {
      en: 'All Projects',
      ru: 'Все проекты',
      uk: 'Всі проекти'
    },
    'nav.webProjects': {
      en: 'Web Projects',
      ru: 'Веб-проекты',
      uk: 'Веб-проекти'
    },
    'nav.mobileProjects': {
      en: 'Mobile Projects',
      ru: 'Мобильные проекты',
      uk: 'Мобільні проекти'
    },
    'nav.contact': {
      en: 'Contact',
      ru: 'Контакты',
      uk: 'Контакти'
    },

    // Главная страница
    'hero.title': {
      en: 'Створюємо Цифрові Рішення',
      ru: 'Створюємо Цифрові Рішення',
      uk: 'Створюємо Цифрові Рішення'
    },
    'hero.subtitle': {
      en: 'Веб-розробка • Мобільні додатки • UI/UX дизайн',
      ru: 'Веб-розробка • Мобільні додатки • UI/UX дизайн',
      uk: 'Веб-розробка • Мобільні додатки • UI/UX дизайн'
    },
    'hero.cta': {
      en: 'Розпочати Проект',
      ru: 'Розпочати Проект',
      uk: 'Розпочати Проект'
    },

    // Сервисы
    'services.title': {
      en: 'Наші Послуги',
      ru: 'Наші Послуги',
      uk: 'Наші Послуги'
    },
    'services.subtitle': {
      en: 'Що Ми Робимо',
      ru: 'Що Ми Робимо',
      uk: 'Що Ми Робимо'
    },
    'services.web.title': {
      en: 'Веб-розробка',
      ru: 'Веб-розробка',
      uk: 'Веб-розробка'
    },
    'services.web.description': {
      en: 'Сучасні та адаптивні веб-сайти, веб-додатки та рішення для електронної комерції.',
      ru: 'Сучасні та адаптивні веб-сайти, веб-додатки та рішення для електронної комерції.',
      uk: 'Сучасні та адаптивні веб-сайти, веб-додатки та рішення для електронної комерції.'
    },
    'services.web.features.1': {
      en: 'Корпоративні Веб-додатки',
      ru: 'Корпоративні Веб-додатки',
      uk: 'Корпоративні Веб-додатки'
    },
    'services.web.features.2': {
      en: 'Рішення для Електронної Комерції',
      ru: 'Рішення для Електронної Комерції',
      uk: 'Рішення для Електронної Комерції'
    },
    'services.web.features.3': {
      en: 'Прогресивні Веб-додатки',
      ru: 'Прогресивні Веб-додатки',
      uk: 'Прогресивні Веб-додатки'
    },
    'services.mobile.title': {
      en: 'Мобільна Розробка',
      ru: 'Мобільна Розробка',
      uk: 'Мобільна Розробка'
    },
    'services.mobile.description': {
      en: 'Нативні та крос-платформні мобільні додатки для iOS та Android.',
      ru: 'Нативні та крос-платформні мобільні додатки для iOS та Android.',
      uk: 'Нативні та крос-платформні мобільні додатки для iOS та Android.'
    },
    'services.mobile.features.1': {
      en: 'Додатки для iOS та Android',
      ru: 'Додатки для iOS та Android',
      uk: 'Додатки для iOS та Android'
    },
    'services.mobile.features.2': {
      en: 'Крос-платформні Рішення',
      ru: 'Крос-платформні Рішення',
      uk: 'Крос-платформні Рішення'
    },
    'services.mobile.features.3': {
      en: 'Підтримка Додатків',
      ru: 'Підтримка Додатків',
      uk: 'Підтримка Додатків'
    },
    'services.design.title': {
      en: 'UI/UX Дизайн',
      ru: 'UI/UX Дизайн',
      uk: 'UI/UX Дизайн'
    },
    'services.design.description': {
      en: 'Дизайн-рішення, орієнтовані на користувача, які покращують користувацький досвід.',
      ru: 'Дизайн-решения, ориентированные на пользователя, которые улучшают пользовательский опыт.',
      uk: 'Дизайн-рішення, орієнтовані на користувача, які покращують користувацький досвід.'
    },
    'services.design.features.1': {
      en: 'Дизайн Інтерфейсу',
      ru: 'Дизайн Интерфейса',
      uk: 'Дизайн Інтерфейсу'
    },
    'services.design.features.2': {
      en: 'Дизайн Користувацького Досвіту',
      ru: 'Дизайн Пользовательского Опыта',
      uk: 'Дизайн Користувацького Досвіту'
    },
    'services.design.features.3': {
      en: 'Дизайн-системи',
      ru: 'Дизайн-системы',
      uk: 'Дизайн-системи'
    },
    'services.consulting.title': {
      en: 'IT-консалтинг',
      ru: 'IT-консалтинг',
      uk: 'IT Консалтинг'
    },
    'services.consulting.description': {
      en: 'Експертне керівництво для вашого цифрового перетворення.',
      ru: 'Экспертное руководство для вашего цифрового преобразования.',
      uk: 'Експертне керівництво для вашого цифрового перетворення.'
    },
    'services.consulting.features.1': {
      en: 'Технічний Консалтинг',
      ru: 'Технический Консалтинг',
      uk: 'Технічний Консалтинг'
    },
    'services.consulting.features.2': {
      en: 'Цифрова Стратегія',
      ru: 'Цифровая Стратегія',
      uk: 'Цифрова Стратегія'
    },
    'services.consulting.features.3': {
      en: 'Планування Проекту',
      ru: 'Планирование Проекта',
      uk: 'Планування Проекту'
    },

    // Портфолио
    'portfolio.title': {
      en: 'Наші Проекти',
      ru: 'Наші Проекти',
      uk: 'Наші Проекти'
    },
    'portfolio.subtitle': {
      en: 'Останні Роботи',
      ru: 'Останні Роботи',
      uk: 'Останні Роботи'
    },

    // О нас
    'about.title': {
      en: 'About Us',
      ru: 'О Нас',
      uk: 'Про Нас'
    },
    'about.subtitle': {
      en: 'Мы команда захоплених розробників',
      ru: 'Мы команда захоплених розробників',
      uk: 'Ми команда захоплених розробників'
    },

    // Блог
    'blog.title': {
      en: 'Наш Блог',
      ru: 'Наш Блог',
      uk: 'Наш Блог'
    },
    'blog.subtitle': {
      en: 'Останні новини та статті',
      ru: 'Останні новини та статті',
      uk: 'Останні новини та статті'
    },

    // Контакты
    'contact.title': {
      en: 'Давайте Працювати Разом',
      ru: 'Давайте Працювати Разом',
      uk: 'Давайте Працювати Разом'
    },
    'contact.subtitle': {
      en: 'Розпочніть Свій Проект',
      ru: 'Розпочніть Свій Проект',
      uk: 'Розпочніть Свій Проект'
    },
    'contact.letsTalk': {
      en: "Давайте обговоримо",
      ru: "Давайте обговоримо",
      uk: "Давайте обговоримо"
    },
    'contact.description': {
      en: 'Зв\'яжіться з нами для обговорення вашого проекту та отримання безкоштовної консультації.',
      ru: 'Свяжитесь с нами для обсуждения вашего проекта и получения бесплатной консультации.',
      uk: 'Зв\'яжіться з нами для обговорення вашого проекту та отримання безкоштовної консультації.'
    },
    'contact.workingHours': {
      en: "Години роботи",
      ru: "Часы работы",
      uk: "Години роботи"
    },
    'contact.weekdays': {
      en: "Понеділок - П'ятниця",
      ru: "Понедельник - Пятница",
      uk: "Понеділок - П'ятниця"
    },
    'contact.weekends': {
      en: "Вихідні",
      ru: "Выходные",
      uk: "Вихідні"
    },
    'contact.byAppointment': {
      en: "За попереднім записом",
      ru: "По договоренности",
      uk: "За попереднім записом"
    },
    'contact.name': {
      en: "Ваше ім'я",
      ru: "Ваше имя",
      uk: "Ваше ім'я"
    },
    'contact.email': {
      en: "Ваш email",
      ru: "Ваш email",
      uk: "Ваш email"
    },
    'contact.message': {
      en: "Ваше повідомлення",
      ru: "Ваше сообщение",
      uk: "Ваше повідомлення"
    },
    'contact.send': {
      en: "Надіслати повідомлення",
      ru: "Отправить сообщение",
      uk: "Надіслати повідомлення"
    },
    'contact.sending': {
      en: "Відправка...",
      ru: "Отправка...",
      uk: "Відправка..."
    },
    'contact.success': {
      en: "Дякуємо! Ваше повідомлення успішно відправлено.",
      ru: "Спасибо! Ваше сообщение успешно отправлено.",
      uk: "Дякуємо! Ваше повідомлення успішно відправлено."
    },
    'contact.cta': {
      en: 'Зв\'язатись з Нами',
      ru: 'Связаться с Нами',
      uk: 'Зв\'язатись з Нами'
    },
    home: {
      hero: {
        title: 'Створюємо Цифрові Рішення',
        subtitle: 'Веб-розробка • Мобільні додатки • UI/UX дизайн',
        description: 'Ми допомагаємо бізнесу рости за допомогою інноваційних цифрових рішень. Наша команда створює сучасні, зручні додатки, які приносять результати.',
        cta: 'Розпочати Проект'
      },
      services: {
        title: 'Наші Послуги',
        subtitle: 'Що Ми Робимо',
        web: {
          title: 'Веб-розробка',
          description: 'Сучасні та адаптивні веб-сайти, веб-додатки та рішення для електронної комерції.',
          features: [
            'Корпоративні Веб-додатки',
            'Рішення для Електронної Комерції',
            'Прогресивні Веб-додатки'
          ]
        },
        mobile: {
          title: 'Мобільна Розробка',
          description: 'Нативні та крос-платформні мобільні додатки для iOS та Android.',
          features: [
            'Додатки для iOS та Android',
            'Крос-платформні Рішення',
            'Підтримка Додатків'
          ]
        },
        design: {
          title: 'UI/UX Дизайн',
          description: 'Дизайн-рішення, орієнтовані на користувача, які покращують користувацький досвід.',
          features: [
            'Дизайн Інтерфейсу',
            'Дизайн Користувацького Досвіту',
            'Дизайн-системи'
          ]
        },
        consulting: {
          title: 'IT-консалтинг',
          description: 'Експертне керівництво для вашого цифрового перетворення.',
          features: [
            'Технічний Консалтинг',
            'Цифрова Стратегія',
            'Планування Проекту'
          ]
        }
      },
      process: {
        title: 'Наш Процес',
        subtitle: 'Як Мы Працюємо',
        steps: {
          discovery: {
            title: 'Аналіз',
            description: 'Ми аналізуємо ваші вимоги та створюємо детальний план проекту.'
          },
          design: {
            title: 'Дизайн',
            description: 'Створюємо макети та дизайн-прототипи для вашого схвалення.'
          },
          development: {
            title: 'Розробка',
            description: 'Наша команда розробляє ваше рішення, використовуючи новітні технології.'
          },
          delivery: {
            title: 'Запуск',
            description: 'Ретельно тестуємо та розгортаємо ваше рішення в продакшн.'
          }
        }
      },
      projects: {
        title: 'Наші Проекти',
        subtitle: 'Останні Роботи',
        viewAll: 'Дивитись Всі Проекти'
      },
      contact: {
        title: 'Давайте Працювати Разом',
        subtitle: 'Розпочніть Свій Проект',
        description: 'Зв\'яжіться з нами для обговорення вашого проекту та отримання безкоштовної консультації.',
        cta: 'Зв\'язатись з Нами'
      }
    },
    // Process Section
    'process.title': {
      en: 'Our Process',
      ru: 'Наш Процесс',
      uk: 'Наш Процес'
    },
    'process.subtitle': {
      en: 'How We Work',
      ru: 'Как Мы Работаем',
      uk: 'Як Ми Працюємо'
    },
    'process.steps.discovery.title': {
      en: 'Discovery',
      ru: 'Анализ',
      uk: 'Аналіз'
    },
    'process.steps.discovery.description': {
      en: 'We analyze your requirements and create a detailed project plan.',
      ru: 'Мы анализируем ваши требования и создаем детальный план проекта.',
      uk: 'Ми аналізуємо ваші вимоги та створюємо детальний план проекту.'
    },
    'process.steps.design.title': {
      en: 'Design',
      ru: 'Дизайн',
      uk: 'Дизайн'
    },
    'process.steps.design.description': {
      en: 'We create wireframes and design prototypes for your approval.',
      ru: 'Создаем макеты и дизайн-прототипы для вашего одобрения.',
      uk: 'Створюємо макети та дизайн-прототипи для вашого схвалення.'
    },
    'process.steps.development.title': {
      en: 'Development',
      ru: 'Разработка',
      uk: 'Розробка'
    },
    'process.steps.development.description': {
      en: 'Our team develops your solution using the latest technologies.',
      ru: 'Наша команда разрабатывает ваше решение, используя новейшие технологии.',
      uk: 'Наша команда розробляє ваше рішення, використовуючи новітні технології.'
    },
    'process.steps.delivery.title': {
      en: 'Delivery',
      ru: 'Запуск',
      uk: 'Запуск'
    },
    'process.steps.delivery.description': {
      en: 'We thoroughly test and deploy your solution to production.',
      ru: 'Тщательно тестируем и развертываем ваше решение в продакшн.',
      uk: 'Ретельно тестуємо та розгортаємо ваше рішення в продакшн.'
    },

    // Stats
    'stats.experience': {
      en: 'Years of Experience',
      ru: 'Лет опыта',
      uk: 'Років досвіду'
    },
    'stats.projects': {
      en: 'Projects Completed',
      ru: 'Проектов',
      uk: 'Проектів'
    },
    'stats.clients': {
      en: 'Happy Clients',
      ru: 'Довольных клиентов',
      uk: 'Задоволених клієнтів'
    },

    // Testimonials Section
    'testimonials.title': {
      en: 'What Our Clients Say',
      ru: 'Отзывы Наших Клиентов',
      uk: 'Відгуки Наших Клієнтів'
    },
    'testimonials.subtitle': {
      en: 'Trusted by leading companies worldwide',
      ru: 'Нам доверяют ведущие компании по всему миру',
      uk: 'Нам довіряють провідні компанії по всьому світу'
    },
    'testimonials.items.1.text': {
      en: 'The team delivered exceptional results that transformed our online presence. Their attention to detail and innovative approach exceeded our expectations.',
      ru: 'Команда показала исключительные результаты, которые преобразили наше онлайн-присутствие. Их внимание к деталям и инновационный подход превзошли наши ожидания.',
      uk: 'Команда показала виняткові результати, які перетворили нашу онлайн-присутність. Їх увага до деталей та інноваційний підхід перевершив наші очікування.'
    },
    'testimonials.items.1.author': {
      en: 'John Doe',
      ru: 'Иван Петров',
      uk: 'Іван Петров'
    },
    'testimonials.items.1.position': {
      en: 'CEO, TechCorp',
      ru: 'Генеральный директор, ТехКорп',
      uk: 'Генеральний директор, ТехКорп'
    },
    'testimonials.items.2.text': {
      en: 'Working with this agency was a game-changer for our business. Their expertise in UI/UX design helped us create a product that users love.',
      ru: 'Работа с этим агентством стала переломным моментом для нашего бизнеса. Их опыт в UI/UX дизайне помог нам создать продукт, который любят пользователи.',
      uk: 'Робота з цим агентством стала переломним моментом для нашого бізнесу. Їх досвід у UI/UX дизайні допоміг нам створити продукт, який люблять користувачі.'
    },
    'testimonials.items.2.author': {
      en: 'Alice Smith',
      ru: 'Анна Сидорова',
      uk: 'Анна Сидорова'
    },
    'testimonials.items.2.position': {
      en: 'Product Manager, InnovateApp',
      ru: 'Менеджер продукта, ИнноватАпп',
      uk: 'Менеджер продукту, ІнноватАпп'
    },
    'testimonials.items.3.text': {
      en: 'The level of professionalism and creativity they brought to our project was outstanding. They understood our vision perfectly and delivered beyond our expectations.',
      ru: 'Уровень профессионализма и креативности, который они привнесли в наш проект, был выдающимся. Они идеально поняли наше видение и превзошли наши ожидания.',
      uk: 'Рівень професіоналізму та креативності, який вони принесли в наш проект, був видатним. Вони ідеально зрозуміли наше бачення та перевершили наші очікування.'
    },
    'testimonials.items.3.author': {
      en: 'Michael King',
      ru: 'Михаил Иванов',
      uk: 'Михайло Іванов'
    },
    'testimonials.items.3.position': {
      en: 'CTO, GlobalTech',
      ru: 'Технический директор, ГлобалТех',
      uk: 'Технічний директор, ГлобалТех'
    }
  }
}

export function useTranslation(key: string, language: Language = 'ru'): string {
  const translation = translations[language]?.[key]
  if (!translation) return key
  return translation[language] as string
} 