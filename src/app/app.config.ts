import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader'; // Added TRANSLATE_HTTP_LOADER_CONFIG
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  // Bypassing strict type check for argument count mismatch
  return new (TranslateHttpLoader as any)(http, '/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    ...TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      // Note: If 'defaultLanguage' shows a deprecation warning, 
      // the library still uses it, but move toward using fallbackLang in later updates.
      defaultLanguage: 'en'
    }).providers!,
    
    // ADD THIS PROVIDER to fix "No provider for InjectionToken TRANSLATE_HTTP_LOADER_CONFIG"
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: { 
        prefix: '/i18n/', 
        suffix: '.json' 
      }
    }
  ]
};