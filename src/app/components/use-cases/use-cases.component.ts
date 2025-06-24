import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-use-cases',
  imports: [CommonModule, TranslateModule],
  templateUrl: './use-cases.component.html',
  styleUrl: './use-cases.component.scss',
})
export class UseCasesComponent {}
