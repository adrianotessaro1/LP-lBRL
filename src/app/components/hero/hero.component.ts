import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-hero',
  imports: [
    TranslateModule,
    CommonModule,
    MatIconModule,
    ScrollAnimateDirective,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  public smallScreen: boolean = false;

  public ngOnInit(): void {
    this.smallScreen = window.innerWidth <= 1024;
  }

  @HostListener('window:resize', [])
  public onResize(): void {
    this.smallScreen = window.innerWidth <= 1024;
  }
}
