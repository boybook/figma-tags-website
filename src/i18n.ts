import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    header: {
      title: 'Figma Tags',
      openSource: 'Open Source on GitHub',
      description: 'The ultimate tagging system for organizing your Figma files, frames, and sections across multiple documents',
      cta: 'Try it now',
    },
    hero: {
      alt: 'Figma Tags Interface'
    },
    features: {
      heading: 'How does Figma Tags streamline your workflow?',
      description: 'Add custom tags to frames and sections, then filter and search across multiple Figma documents with ease.',
      list: [
        {
          title: 'Frame-Level Management',
          description: 'Effortlessly oversee each frame, making it simpler to navigate and refine even large-scale design projects.',
          image: 'images/feature1.png'
        },
        {
          title: 'Cross-Document Organization',
          description: 'Manage frames from multiple documents in one unified view, reducing complexity and boosting productivity.',
          image: 'images/feature2.png'
        },
        {
          title: 'Team Collaboration',
          description: 'Connect with Notion to help designers and non-designers easily access design assets, fostering seamless teamwork.',
          image: 'images/feature3.png'
        }
      ]
    },
    pricing: {
      heading: 'Completely Free to Start',
      openSourceTitle: 'Open Source Version',
      openSourceFree: 'Free',
      openSourceFeatures: [
        'Local storage support',
        'Essential tagging features',
        'Community-driven support'
      ],
      cloudTitle: 'Cloud Storage Version',
      cloudPrice: '$9/month',
      cloudFeatures: [
        'All free features included',
        'Cloud sync for multi-device access',
        'Priority support'
      ],
      comingSoon: 'Coming Soon'
    },
    testimonials: {
      heading: 'What Our Users Say'
    },
    footer: {
      built: 'Crafted with ❤️ by boybook for UI designers'
    }
  },
  zh: {
    header: {
      title: 'Figma Tags',
      openSource: 'GitHub 开源代码',
      description: '为你的 Figma 文件、Frame 和 Section 提供高效的标签系统，让你跨多个文档轻松管理与搜索',
      cta: '立即使用'
    },
    hero: {
      alt: 'Figma 标签界面'
    },
    features: {
      heading: '如何优化你的设计工作流？',
      description: '为 Frame 和 Section 添加自定义标签，快速在多个 Figma 文档间筛选和搜索，提升查找效率。',
      list: [
        {
          title: '精细化 Frame 管理',
          description: '高效管理每个 Frame，在大型设计项目中也能快速导航并微调细节。',
          image: 'images/feature1.png'
        },
        {
          title: '跨文档统一组织',
          description: '在一个视图中管理多个文档的 Frame，减少复杂度并提高团队生产力。',
          image: 'images/feature2.png'
        },
        {
          title: '团队无缝协作',
          description: '连接 Notion 数据库，让设计师与非设计成员轻松获取设计资源，实现无障碍协作。',
          image: 'images/feature3.png'
        }
      ]
    },
    pricing: {
      heading: '完全免费开始',
      openSourceTitle: '开源版本',
      openSourceFree: '免费',
      openSourceFeatures: [
        '本地存储支持',
        '基础标签功能',
        '社区驱动的支持'
      ],
      cloudTitle: '云存储版本',
      cloudPrice: '$9/月',
      cloudFeatures: [
        '包含免费版的所有功能',
        '多设备云端同步',
        '优先技术支持'
      ],
      comingSoon: '即将推出'
    },
    testimonials: {
      heading: '用户反馈'
    },
    footer: {
      built: '由 boybook 为 UI 设计师精心打造 ❤️'
    }
  },
  ja: {
    header: {
      title: 'Figma Tags',
      openSource: 'GitHubオープンソース',
      description: '複数のFigmaファイル、フレーム、セクションを効率的に整理できる究極のタグ管理システム',
      cta: '今すぐ使用'
    },
    hero: {
      alt: 'Figma Tags インターフェイス'
    },
    features: {
      heading: 'どのようにワークフローを改善しますか？',
      description: 'フレームやセクションにカスタムタグを付け、複数のFigmaドキュメントから素早く検索・フィルタリングできます。',
      list: [
        {
          title: 'フレーム単位の管理',
          description: '大規模なデザインでも各フレームを効率的に管理し、スムーズなナビゲーションと細かな調整を可能にします。',
          image: 'images/feature1.png'
        },
        {
          title: 'クロスドキュメント統合',
          description: '複数ドキュメントにわたるフレームを一元管理し、作業の煩雑さを軽減して生産性を向上させます。',
          image: 'images/feature2.png'
        },
        {
          title: 'チームでのコラボレーション',
          description: 'Notionと連携することで、デザイナーだけでなく他のメンバーも容易にデザインアセットへアクセスでき、円滑なチームワークを実現します。',
          image: 'images/feature3.png'
        }
      ]
    },
    pricing: {
      heading: '無料でスタート可能',
      openSourceTitle: 'オープンソース版',
      openSourceFree: '無料',
      openSourceFeatures: [
        'ローカルストレージ対応',
        '基本的なタグ機能',
        'コミュニティサポート'
      ],
      cloudTitle: 'クラウドストレージ版',
      cloudPrice: '$9/月',
      cloudFeatures: [
        '無料版の全機能を含む',
        '複数デバイス間のクラウド同期',
        '優先サポート'
      ],
      comingSoon: '近日公開'
    },
    testimonials: {
      heading: 'ユーザーの声'
    },
    footer: {
      built: 'UIデザイナーのためにboybookが❤️を込めて制作'
    }
  },
  es: {
    header: {
      title: 'Figma Tags',
      openSource: 'Código Abierto en GitHub',
      description: 'El sistema definitivo de etiquetado para organizar tus archivos, marcos y secciones de Figma en múltiples documentos',
      cta: 'Úsalo ahora'
    },
    hero: {
      alt: 'Interfaz de Figma Tags'
    },
    features: {
      heading: '¿Cómo mejora tu flujo de trabajo?',
      description: 'Agrega etiquetas personalizadas a tus frames y secciones para filtrar y buscar rápidamente a través de todos tus documentos en Figma.',
      list: [
        {
          title: 'Gestión a nivel de frame',
          description: 'Administra cada frame de manera eficiente, facilitando la navegación y ajustes precisos incluso en proyectos complejos.',
          image: 'images/feature1.png'
        },
        {
          title: 'Organización entre múltiples documentos',
          description: 'Gestiona marcos de varios documentos en una sola vista, reduciendo la complejidad y aumentando tu productividad.',
          image: 'images/feature2.png'
        },
        {
          title: 'Colaboración en equipo',
          description: 'Conéctate con Notion para que todo el equipo, diseñadores o no, pueda acceder fácilmente a los recursos de diseño.',
          image: 'images/feature3.png'
        }
      ]
    },
    pricing: {
      heading: 'Completamente gratis para empezar',
      openSourceTitle: 'Versión de Código Abierto',
      openSourceFree: 'Gratis',
      openSourceFeatures: [
        'Soporte de almacenamiento local',
        'Funciones básicas de etiquetado',
        'Soporte impulsado por la comunidad'
      ],
      cloudTitle: 'Versión con Almacenamiento en la Nube',
      cloudPrice: '$9/mes',
      cloudFeatures: [
        'Todas las funciones de la versión gratuita',
        'Sincronización en la nube en múltiples dispositivos',
        'Soporte prioritario'
      ],
      comingSoon: 'Próximamente'
    },
    testimonials: {
      heading: 'Lo que dicen nuestros usuarios'
    },
    footer: {
      built: 'Creado con ❤️ por boybook para diseñadores UI'
    }
  },
  pt: {
    header: {
      title: 'Figma Tags',
      openSource: 'Código Aberto no GitHub',
      description: 'O sistema definitivo de etiquetagem para organizar seus arquivos, frames e seções do Figma em vários documentos',
      cta: 'Usar agora'
    },
    hero: {
      alt: 'Interface do Figma Tags'
    },
    features: {
      heading: 'Como isso melhora seu fluxo de trabalho?',
      description: 'Adicione tags personalizadas a frames e seções, depois filtre e pesquise facilmente em todos os seus documentos do Figma.',
      list: [
        {
          title: 'Gestão a nível de Frame',
          description: 'Gerencie cada frame de forma eficaz, tornando mais simples navegar e ajustar até mesmo projetos complexos.',
          image: 'images/feature1.png'
        },
        {
          title: 'Organização entre múltiplos documentos',
          description: 'Controle frames de diversos documentos em uma única visualização, reduzindo a complexidade e aumentando sua produtividade.',
          image: 'images/feature2.png'
        },
        {
          title: 'Colaboração em equipe',
          description: 'Conecte-se ao Notion para que designers e não-designers acessem recursos de design com facilidade, promovendo um trabalho em equipe mais fluido.',
          image: 'images/feature3.png'
        }
      ]
    },
    pricing: {
      heading: 'Totalmente gratuito para começar',
      openSourceTitle: 'Versão de Código Aberto',
      openSourceFree: 'Gratuita',
      openSourceFeatures: [
        'Suporte a armazenamento local',
        'Recursos básicos de etiquetagem',
        'Suporte da comunidade'
      ],
      cloudTitle: 'Versão com Armazenamento em Nuvem',
      cloudPrice: '$9/mês',
      cloudFeatures: [
        'Todos os recursos da versão gratuita',
        'Sincronização em nuvem para múltiplos dispositivos',
        'Suporte prioritário'
      ],
      comingSoon: 'Em breve'
    },
    testimonials: {
      heading: 'O que nossos usuários dizem'
    },
    footer: {
      built: 'Criado com ❤️ por boybook para designers UI'
    }
  }
}

const i18n = createI18n({
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages
})

export default i18n