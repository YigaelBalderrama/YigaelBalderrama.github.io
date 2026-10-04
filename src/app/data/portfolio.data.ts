import {
  Achievement,
  Certification,
  Project,
} from '../models/portfolio.models';

export const PROJECTS: Project[] = [
  {
    title: 'ChessApp',
    type: 'Chess AI & online multiplayer',
    description:
      'A chess application with a local AI opponent and online multiplayer. A custom chess engine handles legal moves and game outcomes, while a Web Worker keeps AI search off the UI thread.',
    technologies: [
      'Angular',
      'TypeScript',
      'Node.js',
      'WebSockets',
      'Web Workers',
    ],
    features: [
      'Minimax search with alpha-beta pruning',
      'Three AI difficulty levels',
      'Server-validated online multiplayer',
      'Move history, undo and keyboard controls',
    ],
    projectUrl: 'https://chessapp-ocnf.onrender.com/',
    image: {
      src: 'images/chessapp-preview.png',
      alt: 'ChessApp showing a wooden chessboard, move history and AI difficulty settings.',
    },
    codeUrl: 'https://github.com/YigaelBalderrama/ChessApp',
  },
  {
    title: 'MTGCheck',
    type: 'Computer vision & card recognition API',
    description:
      'A REST API that identifies multiple Magic: The Gathering cards from a single photo. It detects card boundaries, corrects perspective and reads card names with OCR to match them against Scryfall data.',
    technologies: [
      'Python',
      'Flask',
      'OpenCV',
      'EasyOCR',
      'SQLite',
      'Docker',
    ],
    features: [
      'Multi-card detection and perspective correction',
      'Batch OCR and fuzzy card-name matching',
      'Local Scryfall catalog and recognition caching',
      'Swagger UI and OpenAPI documentation',
    ],
    codeUrl: 'https://github.com/YigaelBalderrama/MTGCheck',
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
