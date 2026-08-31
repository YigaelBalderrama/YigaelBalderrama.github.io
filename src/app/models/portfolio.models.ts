export interface Experience {
  company: string;
  role: string;
  year: string;
  location: string;
  client?: string;
  technologies: string[];
  bullets: string[];
  startedFromScratch?: boolean;
}

export interface SkillCategory {
  name: string;
  eyebrow: string;
  skills: string[];
}

export interface Project {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  features: string[];
  projectUrl: string;
  codeUrl: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  url?: string;
  featured?: boolean;
}

export interface Achievement {
  title: string;
  event: string;
  year: string;
  description: string;
}
