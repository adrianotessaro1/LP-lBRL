import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-api-first',
  imports: [TranslateModule, CommonModule, MatIconModule],
  templateUrl: './api-first.component.html',
  styleUrl: './api-first.component.scss',
})
export class ApiFirstComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
}
