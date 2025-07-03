import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  animationFrameScheduler,
  fromEvent,
  map,
  Subject,
  takeUntil,
  throttleTime,
} from 'rxjs';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-use-cases',
  imports: [CommonModule, TranslateModule, ScrollAnimateDirective],
  templateUrl: './use-cases.component.html',
  styleUrl: './use-cases.component.scss',
})
export class UseCasesComponent implements OnDestroy {
  @ViewChild('movingElement') public movingEl!: ElementRef;
  @ViewChild('useCasesList') public useCasesList!: ElementRef;

  public maxTranslateY: number = 0;
  private destroy$ = new Subject<void>();

  constructor(private readonly renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    // We want the effect only on wide screens
    if (window.screen.width > 1024) {
      return;
    }

    // Calculate how far it can move before hitting the bottom of the list
    this.maxTranslateY =
      this.useCasesList.nativeElement.clientHeight -
      this.movingEl.nativeElement.clientHeight;

    // Listen to the window scroll
    fromEvent(window, 'scroll', { passive: true })
      .pipe(
        throttleTime(0, animationFrameScheduler),
        map(() => {
          // Get the bottom position of the list relative to the viewport
          const bottom =
            this.useCasesList.nativeElement.getBoundingClientRect().bottom;

          if (bottom < window.innerHeight) {
            const distancePast = window.innerHeight - bottom;
            // Scale the movement
            return Math.min(distancePast * 0.5, this.maxTranslateY);
          }

          // Reset to zero, no translation
          return 0;
        }),
        // Will unsubscribe the $destroy emits
        takeUntil(this.destroy$)
      )
      .subscribe((y) => {
        this.renderer.setStyle(
          this.movingEl.nativeElement,
          'transform',
          `translateY(${y}px)`
        );
      });
  }

  ngOnDestroy(): void {
    // Emit destroy$ so we can cancel the subcription
    this.destroy$.next();
    this.destroy$.complete();
  }
}
