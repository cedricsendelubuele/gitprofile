const config = {
  github: {
    username: 'cedricsendelubuele', // Très important : mets ton vrai pseudo ici
    sortBy: 'stars', 
    limit: 8, // Nombre de projets GitHub à afficher
    exclude: {
      forks: false, 
      projects: [], // Tu peux écrire ici les noms des dépôts que tu veux masquer
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/cedric-sende-lubuele/?locale=fr-FR',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', 
    medium: '',
    dev: '',
    stackoverflow: '', 
    website: '',
    phone: '',
    email: 'cedricsendelubuele@gmail.com',
  },
  resume: {
    fileUrl: '', // Lien vers ton CV PDF si tu veux qu'ils puissent le télécharger
  },
  skills: [
    'Python',
    'SQL',
    'dbt',
    'n8n',
    'Power BI',
    'Tableau',
    'KoboToolbox',
    'ODK',
    'Network Infrastructure (CCNA)',
    'Generative AI (ChatGPT, Claude, Gemini)',
    'Data Governance',
  ],
  experiences: [
    {
      company: 'Consultance Indépendante & Projets Structurants',
      position: 'Lead Data Architect & Consultant Solution',
      from: '2023',
      to: 'Présent',
      companyLink: '',
    },
    {
      company: 'UPSAIL AFRICA',
      position: 'IT & Data Specialist',
      from: 'AnnéeDébut', // Remplace par tes vraies dates d'arrêt en 2023
      to: '2023',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'CCNA (Cisco Certified Network Associate)',
      body: 'Cisco',
      year: 'L'année',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Ton Université',
      degree: 'Master in Computer Science',
      from: 'Année',
      to: 'Année',
    },
  ],
  themeConfig: {
    defaultTheme: 'profound', // Choisis un thème sombre et pro (ex: dark, profound, corporate)
    // ... laisse le reste par défaut
  }
};

export default config;
