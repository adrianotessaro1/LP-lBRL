import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-whitelabel',
  imports: [TranslateModule, CommonModule, MatIconModule, ScrollAnimateDirective],
  templateUrl: './whitelabel.component.html',
  styleUrl: './whitelabel.component.scss',
})
export class WhitelabelComponent {}
