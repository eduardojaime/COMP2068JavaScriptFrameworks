import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// similar to bin/wwww
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
