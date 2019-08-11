import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './Main.Module';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(MainModule)
    .catch(err => console.error(err));
//# sourceMappingURL=main.js.map