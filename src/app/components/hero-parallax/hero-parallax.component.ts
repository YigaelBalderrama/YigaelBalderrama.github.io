import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  effect,
  signal,
} from '@angular/core';
import { EXPERIENCE } from '../../data/experience.data';
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  PROJECTS,
} from '../../data/portfolio.data';
import { SKILL_CATEGORIES } from '../../data/skills.data';
import {
  Achievement,
  Certification,
  Experience,
  Project,
  SkillCategory,
} from '../../models/portfolio.models';

@Component({
  selector: 'app-hero-parallax',
  imports: [],
  templateUrl: './hero-parallax.component.html',
  styleUrl: './hero-parallax.component.scss',
})
export class HeroParallaxComponent implements AfterViewInit, OnDestroy {
  readonly experience: Experience[] = EXPERIENCE;
  readonly skillCategories: SkillCategory[] = SKILL_CATEGORIES;
  readonly projects: Project[] = PROJECTS;
  readonly certifications: Certification[] = CERTIFICATIONS;
  readonly achievements: Achievement[] = ACHIEVEMENTS;
  readonly isMenuOpen = signal(false);
  readonly scrollY = signal(0);
  readonly activeSection = signal('home');
  readonly heroOffset = signal(0);
  private observer?: IntersectionObserver;

  constructor(private readonly host: ElementRef<HTMLElement>) {
    effect(() => {
      const offset = this.scrollY();
      this.heroOffset.set(Math.min(offset * 0.18, 150));
      document.documentElement.style.setProperty(
        '--scroll-progress',
        `${Math.min(offset / 900, 1)}`,
      );
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrollY.set(window.scrollY);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  scrollTo(section: string): void {
    this.closeMenu();
    document
      .getElementById(section)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            const sectionId = (entry.target as HTMLElement).id;
            if (sectionId) this.activeSection.set(sectionId);
          }
        }),
      { threshold: 0.16 },
    );
    this.host.nativeElement
      .querySelectorAll('.reveal')
      .forEach((element) => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
