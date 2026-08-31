import { SkillCategory } from '../models/portfolio.models';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend',
    eyebrow: '01 / Interface systems',
    skills: [
      'Angular',
      'React',
      'Flutter',
      'HTML5',
      'CSS3',
      'TailwindCSS',
      'TypeScript',
      'Angular Material',
    ],
  },
  {
    name: 'Backend',
    eyebrow: '02 / Service design',
    skills: [
      '.NET 8 / 7 / 6',
      'C#',
      'Node.js',
      'Express',
      'Java',
      'Spring Boot',
      'REST APIs',
    ],
  },
  {
    name: 'Mobile',
    eyebrow: '03 / Native thinking',
    skills: ['Flutter', 'Dart', 'Android'],
  },
  {
    name: 'Databases',
    eyebrow: '04 / Data layers',
    skills: ['MySQL', 'SQL Server', 'PostgreSQL', 'Firebase'],
  },
  {
    name: 'Tools & DevOps',
    eyebrow: '05 / Ship with confidence',
    skills: ['Git', 'Docker', 'CI/CD', 'Postman', 'Swagger'],
  },
  {
    name: 'Web Scraping',
    eyebrow: '06 / Automation',
    skills: ['Apify', 'Puppeteer', 'Cheerio', 'BeautifulSoup', 'Python'],
  },
  {
    name: 'AI-assisted Development',
    eyebrow: '07 / Build faster',
    skills: ['Codex', 'Claude', 'Vercel Skills', 'AI agents'],
  },
  {
    name: 'Other',
    eyebrow: '08 / Engineering craft',
    skills: [
      'SOLID Principles',
      'Clean Architecture',
      'Design Patterns',
      'API Design',
      'Performance Optimization',
    ],
  },
];
