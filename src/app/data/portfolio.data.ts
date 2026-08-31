import {
  Achievement,
  Certification,
  Project,
} from '../models/portfolio.models';

export const PROJECTS: Project[] = [
  {
    title: 'Spring Boot REST API',
    type: 'Personal backend project',
    description:
      'A Java and Spring Boot backend focused on REST API design, layered architecture, DTOs, validation, error handling and database integration.',
    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'JPA / Hibernate',
      'PostgreSQL or MySQL',
      'Swagger',
      'Clean Architecture',
    ],
    features: [
      'CRUD endpoints',
      'Layered architecture',
      'DTO validation',
      'Exception handling',
      'API documentation with Swagger',
      'Database persistence',
    ],
    projectUrl: '#',
    codeUrl: '#',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'SQL Advanced Certificate',
    issuer: 'HackerRank',
    year: '2026',
    url: 'https://www.hackerrank.com/certificates/58d0a6a68377',
  },
  {
    title: 'Angular Intermediate Certificate',
    issuer: 'HackerRank',
    year: '2026',
    url: 'https://www.hackerrank.com/certificates/61a3e9e16ceb',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    year: '2026',
    url: 'https://www.credly.com/badges/6e2938b3-97d5-447a-ad48-dd6e20069138/print',
  },
  {
    title: 'Problem Solving',
    issuer: 'HackerRank',
    year: '2022',
    url: 'https://www.hackerrank.com/certificates/7a545eadbc47',
  },
  {
    title: 'Python Certificate',
    issuer: 'HackerRank',
    year: '2021',
    url: 'https://www.hackerrank.com/certificates/8439b72520a1',
  },
  {
    title: 'JavaScript Intermediate Certificate',
    issuer: 'HackerRank',
    year: '2018',
    url: 'https://www.hackerrank.com/certificates/349dedf7b938',
  },
  {
    title: 'Java Programming Certificate',
    issuer: 'Faculty of Technology, UMSS',
    year: '2018',
  },
  {
    title: 'Basic Java Course',
    issuer: 'UMSS Computer Science Dept.',
    year: '2018',
  },
  {
    title: 'HTML5 + CSS3 Course',
    issuer: 'UMSS Computer Science Dept.',
    year: '2017',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Honorable Mention',
    event: 'ICPC South America / South Finals',
    year: '2020',
    description:
      'Competitive programming experience that sharpened algorithmic analysis and resilient problem solving.',
  },
  {
    title: 'Honorable Mention',
    event: 'ICPC Bolivia Preliminary Contest',
    year: '2019, 2020',
    description:
      'A practical foundation in edge cases, algorithms and making sound decisions under pressure.',
  },
];
