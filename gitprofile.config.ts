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
        sortBy: 'updated', 
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
    title: 'Portfolio de Nico | Backend & Data', 
    description: 'Estudiante de Programación en UTN', 
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
  experiences: [
    {
      company: 'Estudio Figueras',
      position: 'Analista Administrativo',
      from: 'Marzo 2024',
      to: 'Presente',
      companyLink: '',
    },
  ],
  certifications: [], // Obligatorio
  educations: [
    {
      institution: 'UTN FRGP',
      degree: 'Tecnicatura Universitaria en Programación',
      from: '2024',
      to: '2026',
    },
  ],
  publications: [], // Obligatorio
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
    themes: ['business', 'corporate', 'dracula', 'nord', 'dark', 'light'],
  },
  footer: `Hecho con GitProfile`,
  enablePWA: true,
};

export default CONFIG;
  enablePWA: true,
};

export default CONFIG;
