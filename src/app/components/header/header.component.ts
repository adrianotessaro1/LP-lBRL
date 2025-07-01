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
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public countryOptions: { name: string; image: string }[] = [
    { name: 'Português', image: '/assets/flags/br.svg' },
    { name: 'English', image: '/assets/flags/us.svg' },
  ];
  public viewOptions: boolean = false;

  public selectedCountry = {
    name: 'Português',
    image: '/assets/flags/br.svg',
  };

  public ngOnInit(): void {}

  // The host will have this class when true
  @HostBinding('class.scrolled') isScrolled = false;

  // Listen to the window scrolls and change the header background when the user has scrolled down
  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > 0;
  }

  public toggleDropdownMenu(countryOption?: {
    name: string;
    image: string;
  }): void {
    this.viewOptions = !this.viewOptions;
    if (countryOption) {
      this.selectedCountry = countryOption;
    }
  }
}
