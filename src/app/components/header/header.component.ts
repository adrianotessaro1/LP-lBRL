import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public countryOptions: { name: string; image: string; code: string }[] = [
    { name: 'Português', image: '/assets/flags/br.svg', code: 'pt-br' },
    { name: 'English', image: '/assets/flags/us.svg', code: 'en' },
  ];
  public viewOptions: boolean = false;

  public selectedCountry = {
    name: 'Português',
    image: '/assets/flags/br.svg',
    code: 'pt-br',
  };

  constructor(private translateService: TranslateService) {}

  public bigScreen: boolean = false;

  public ngOnInit(): void {
    this.bigScreen = window.innerWidth >= 1280;

    this.translateService.addLangs(
      this.countryOptions.map((option) => option.code)
    );
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use(this.selectedCountry.code);
  }

  // The host will have this class when true
  @HostBinding('class.scrolled') isScrolled = false;

  // Listen to the window scrolls and change the header background when the user has scrolled down
  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > 0;
  }

  @HostListener('window:resize', [])
  public onWindowResize(): void {
    this.bigScreen = window.innerWidth >= 1280;
  }

  public toggleDropdownMenu(countryOption?: {
    name: string;
    image: string;
    code: string;
  }): void {
    this.viewOptions = !this.viewOptions;
    if (countryOption) {
      this.selectedCountry = countryOption;
      this.translateService.use(countryOption.code);
    }
  }
}
