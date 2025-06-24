import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-api-first',
  imports: [TranslateModule, CommonModule],
  templateUrl: './api-first.component.html',
  styleUrl: './api-first.component.scss'
})
export class ApiFirstComponent {

}
