import { Component } from '@angular/core';
import { ApiFirstComponent } from './components/api-first/api-first.component';
import { FaqComponent } from './components/faq/faq.component';
import { FinalCtaComponent } from './components/final-cta/final-cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ProofOfReservesComponent } from './components/proof-of-reserves/proof-of-reserves.component';
import { UseCasesComponent } from './components/use-cases/use-cases.component';
import { WhitelabelComponent } from './components/whitelabel/whitelabel.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ApiFirstComponent,
    FaqComponent,
    FinalCtaComponent,
    FooterComponent,
    HeroComponent,
    HowItWorksComponent,
    ProofOfReservesComponent,
    UseCasesComponent,
    WhitelabelComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'LP-tBRL';
}
