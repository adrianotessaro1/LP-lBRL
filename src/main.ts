import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// 1) Prism core
import 'prismjs';
// 2) The language syntax you need
import 'prismjs/components/prism-javascript';
// 3) **The line-numbers plugin** (this is the missing piece)
import 'prismjs/plugins/line-numbers/prism-line-numbers';
// (You still need the CSS import elsewhere for the numbers to show visually)

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
