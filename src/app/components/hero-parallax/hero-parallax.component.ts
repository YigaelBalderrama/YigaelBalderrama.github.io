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
      this.heroOffset.set(Math.min(offset * 0.12, 80));
      document.documentElement.style.setProperty(
        '--scroll-progress',
        `${Math.min(offset / 900, 1)}`,
      );
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrollY.set(window.scrollY);
    this.updateCodeParallax();
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
    this.updateCodeParallax();
  }

  private updateCodeParallax(): void {
    const viewportCenter = window.innerHeight / 2;

    this.host.nativeElement
      .querySelectorAll<HTMLElement>('.section, .contact')
      .forEach((section) => {
        const bounds = section.getBoundingClientRect();
        const sectionCenter = bounds.top + bounds.height / 2;
        const entranceProgress = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight * 0.78 - bounds.top) /
              (window.innerHeight * 0.42),
          ),
        );
        const horizontalOffset =
          -(1 - entranceProgress) * Math.min(520, window.innerWidth * 0.42);
        const offset = Math.max(
          -18,
          Math.min(18, (viewportCenter - sectionCenter) * 0.035),
        );

        section.style.setProperty('--code-parallax-y', `${offset}px`);
        section.style.setProperty('--code-enter-x', `${horizontalOffset}px`);
        section.style.setProperty(
          '--code-enter-opacity',
          `${entranceProgress * 0.9}`,
        );
      });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
