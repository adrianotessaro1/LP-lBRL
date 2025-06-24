import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-whitelabel',
  imports: [TranslateModule, CommonModule],
  templateUrl: './whitelabel.component.html',
  styleUrl: './whitelabel.component.scss',
})
export class WhitelabelComponent {}
