import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  ChartData,
  ChartDataService,
} from '../../services/chartDataService.service';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-proof-of-reserves',
  imports: [
    TranslateModule,
    CommonModule,
    MatIconModule,
    BaseChartDirective,
    ScrollAnimateDirective,
  ],
  templateUrl: './proof-of-reserves.component.html',
  styleUrl: './proof-of-reserves.component.scss',
})
export class ProofOfReservesComponent implements OnInit {
  // —BAR CHART SETUP —
  public barChartData!: ChartConfiguration<'bar'>['data'];
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,

    datasets: {
      bar: {
        categoryPercentage: 1,
        barPercentage: 0.8,
      },
    },
    layout: {
      padding: { top: 25, right: 0, bottom: 0, left: 0 },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#aaa' },
      },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
      datalabels: {
        anchor: 'end',
        align: 'end',
        offset: 2,
        font: { weight: 'bold', size: 16 },
        color: '#ccc',
        formatter: (value: number) => {
          return `R$ ${value.toLocaleString('pt-BR')}`;
        },
      },
    },
  };
  public barThickness: number = 140;

  constructor(private readonly dataService: ChartDataService) {}

  public ngOnInit(): void {

    if (window.innerWidth <= 500) {
      this.barThickness = 120;
    } else {
      this.barThickness = 140;
    }

    Chart.register(ChartDataLabels);

    const barCtx = document
      .querySelector<HTMLCanvasElement>('#barChartCanvas')!
      .getContext('2d')!;

    // build a top → bottom gradient
    const greenGradient = barCtx.createLinearGradient(0, 0, 0, 200);
    greenGradient.addColorStop(0, 'rgba(72,169,0,0.8)');
    greenGradient.addColorStop(1, 'rgba(72,169,0,0.2)');

    // assign it to your dataset
    this.barChartData = {
      labels: ['Saldo BRL', 'Total Supply'],
      datasets: [
        {
          data: [0, 0],
          backgroundColor: [greenGradient, greenGradient],
          borderRadius: 8, // slightly rounded corners
          barThickness: this.barThickness, // fixed width
          maxBarThickness: this.barThickness,
        },
      ],
    };

    this.dataService.liveData().subscribe((data: ChartData) => {
      // updating the chart with the data
      (this.barChartData.datasets![0].data as number[]) = [
        data.saldoBRL,
        data.totalSupply,
      ];
    });
  }
}
