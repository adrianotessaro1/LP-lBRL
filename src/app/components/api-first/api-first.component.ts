import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import Prism from 'prismjs';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-api-first',
  imports: [
    TranslateModule,
    CommonModule,
    MatIconModule,
    ScrollAnimateDirective,
  ],
  templateUrl: './api-first.component.html',
  styleUrl: './api-first.component.scss',
})
export class ApiFirstComponent implements AfterViewInit {
  public smallScreen: boolean = false;

  public ngOnInit(): void {
    this.smallScreen = window.innerWidth <= 768;
  }

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }

  @HostListener('window:resize', [])
  public onResize(): void {
    this.smallScreen = window.innerWidth <= 768;
  }
}
