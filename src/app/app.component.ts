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
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'squares',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/squares.svg')
    );
    iconRegistry.addSvgIcon(
      'right_arrow',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/right_arrow.svg')
    );
    iconRegistry.addSvgIcon(
      'right_arrow_yellow',
      sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/right_arrow_yellow.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'down_arrow',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/down_arrow.svg')
    );
    iconRegistry.addSvgIcon(
      'faq_arrow',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/faq_arrow.svg')
    );
    iconRegistry.addSvgIcon(
      'one_circle',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/one_circle.svg')
    );
    iconRegistry.addSvgIcon(
      'two_circle',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/two_circle.svg')
    );
    iconRegistry.addSvgIcon(
      'three_circle',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/three_circle.svg')
    );
    iconRegistry.addSvgIcon(
      'telegram_logo',
      sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/telegram_logo.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'x_logo',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/x_logo.svg')
    );
    iconRegistry.addSvgIcon(
      'linkedin_logo',
      sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/linkedin_logo.svg'
      )
    );
  }
}
