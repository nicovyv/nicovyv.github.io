// gitprofile.config.ts
const CONFIG = {
  github: {
    username: 'nicovyv', 
  },
  base: '/', 
  projects: {
    github: {
      display: true, 
      header: 'Proyectos de GitHub',
      mode: 'automatic', 
      automatic: {
        sortBy: 'stars', 
        limit: 8, 
        exclude: {
          forks: true, 
          projects: [], 
        },
      },
      manual: {
        projects: [], 
      },
    },
    external: {
      header: 'Otros Proyectos',
      projects: [
        {
          title: 'Análisis de Mercado Global de Litio',
          description:
            'Proyecto de ingeniería y análisis de datos sobre el mercado global de extracción de litio.',
          imageUrl:
            'https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-801.jpg',
          link: 'https://github.com/nicovyv/analisis-litio',
        },
      ],
    },
  },
  seo: { 
    title: 'Portfolio de Nicolas Zabala', 
    description: 'Estudiante de Programación en UTN FRGP', 
    imageURL: '' 
  },
  social: {
    linkedin: 'nicolas-zabala-v',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', 
  },
  skills: [
    'C#',
    'SQL Server',
    '.NET',
    'Python',
    'Git',
    'Analisis de Datos',
  ],
  experiences: [],
  certifications: [],
  educations: [
    {
      institution: 'UTN FRGP',
      degree: 'Tecnicatura Universitaria en Programación',
      from: '2024',
      to: '2026',
    },
  ],
  publications: [],
  blog: {
    source: '',
    username: '',
    limit: 0,
  },
  googleAnalytics: {
    id: '', 
  },
  hotjar: {
    id: '', 
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: [
      'light', 'dark', 'corporate', 'business', 'dracula', 'nord'
    ],
  },
  footer: `Hecho con ❤️`,
  enablePWA: true,
};

export default CONFIG;
