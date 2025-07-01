import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-proof-of-reserves',
  imports: [TranslateModule, CommonModule, MatIconModule, BaseChartDirective],
  templateUrl: './proof-of-reserves.component.html',
  styleUrl: './proof-of-reserves.component.scss',
})
export class ProofOfReservesComponent {}
