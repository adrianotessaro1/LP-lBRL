import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  @Input('appScrollAnimateThreshold')
  public threshhold = 0.15;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2 // To add/remove CSS classes
  ) {}

  public ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When 10% of the section is visible
          this.renderer.addClass(this.element.nativeElement, 'in-view');

          // Stop observing the element once it has already animated
          this.observer.unobserve(this.element.nativeElement);
        }
      },
      { threshold: this.threshhold } // 15% visibility threshold by default
    );

    // Start observing the host element
    this.observer.observe(this.element.nativeElement);
  }

  public ngOnDestroy(): void {
    // Clean up the observer if the directive is destroyed
    this.observer.disconnect();
  }
}
