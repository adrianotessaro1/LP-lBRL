import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-faq',
  imports: [TranslateModule, CommonModule, MatIconModule, ScrollAnimateDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  public questions = [
    {
      name: 'isTBRLRegulatedByBacen',
      answer: 'isTBRLRegulatedByBacenAnswer',
      open: false,
      background: 'linear-gradient(135deg, #005500 0%, #020f0a 100%)',
      color: '#e9ecef',
    },
    {
      name: 'whatIsRedemptionSLA',
      answer: 'whatIsRedemptionSLAAnswer',
      open: false,
      background: 'linear-gradient(135deg, #005500 0%, #020f0a 100%)',
      color: '#e9ecef',
    },
    {
      name: 'isThereAMintingCap',
      answer: 'isThereAMintingCapAnswer',
      open: false,
      background: 'linear-gradient(135deg, #005500 0%, #020f0a 100%)',
      color: '#e9ecef',
    },
    {
      name: 'canIIntegrateWithoutKYC',
      answer: 'canIIntegrateWithoutKYCAnswer',
      open: false,
      background: 'linear-gradient(135deg, #005500 0%, #020f0a 100%)',
      color: '#e9ecef',
    },
    {
      name: 'whereIsTheContract',
      answer:
        'whereIsTheContractAnswer',
      open: false,
      background: 'linear-gradient(135deg, #005500 0%, #020f0a 100%)',
      color: '#e9ecef',
    },
    {
      name: 'whereDoISeeProofOfReserves',
      answer:
        'whereDoISeeProofOfReservesAnswer',
      open: false,
      background: 'linear-gradient(135deg, #005500 0%, #020f0a 100%)',
      color: '#e9ecef',
    },
    {
      name: 'howDoesKYCWork',
      answer:
        'howDoesKYCWorkAnswer',
      open: false,
      background: 'linear-gradient(135deg, #005500 0%, #020f0a 100%)',
      color: '#e9ecef',
    },
    {
      name: 'howDoIAccessTheServices',
      answer:
        'howDoIAccessTheServicesAnswer',
      open: false,
      background: 'linear-gradient(135deg, #005500 0%, #020f0a 100%)',
      color: '#e9ecef',
    },
  ];

  public toggleAnswer(index: number): void {
    this.questions[index].open = !this.questions[index].open;
    this.questions[index].background =
      this.questions[index].background ===
      'linear-gradient(135deg, #005500 0%, #020f0a 100%)'
        ? '#121212'
        : 'linear-gradient(135deg, #005500 0%, #020f0a 100%)';
    this.questions[index].color =
      this.questions[index].color === '#e9ecef' ? '#48a900' : '#e9ecef';
  }
}
