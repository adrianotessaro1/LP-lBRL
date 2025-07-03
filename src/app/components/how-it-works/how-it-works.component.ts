import { CommonModule } from '@angular/common';
import { Component, Host, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-how-it-works',
  imports: [
    TranslateModule,
    CommonModule,
    MatIconModule,
    ScrollAnimateDirective,
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
})
export class HowItWorksComponent implements OnInit {
  public smallScreen: boolean = false;

  public ngOnInit(): void {
    this.smallScreen = window.innerWidth <= 920 && window.innerWidth >= 480;
  }

  @HostListener('window:resize', [])
  public onResize(): void {
    this.smallScreen = window.innerWidth <= 920 && window.innerWidth >= 480;
  }
}
