import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero-parallax',
  imports: [],
  templateUrl: './hero-parallax.component.html',
  styleUrl: './hero-parallax.component.scss',
})
export class HeroParallaxComponent {
  scrollY = 0;

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
  }

  t(speed: number) {
    return `translateY(${this.scrollY * speed}px)`;
  }
}
