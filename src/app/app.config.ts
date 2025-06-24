import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { routes } from './app.routes';
import {
  provideTranslateService,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import localeEn from '@angular/common/locales/en';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

if (window.navigator.language.match('en')) {
  registerLocaleData(localeEn);
} else {
  registerLocaleData(ptBr);
}

export function LangHttpLoaderFactory(
  httpClient: HttpClient
): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json');
}

const userLang = window.navigator.language.toLowerCase().startsWith('en')
  ? 'en'
  : 'pt-br';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: LangHttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: userLang,
    }),
  ],
};
