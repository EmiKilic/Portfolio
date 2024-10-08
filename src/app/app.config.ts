import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ImprintComponent } from './imprint/imprint.component';
import { PolicComponent } from './polic/polic.component';
import { MainWebsiteComponent } from './main-website/main-website.component';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent },
  { path: 'polic', component: PolicComponent },
  { path: '', component: MainWebsiteComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withFetch()) , provideClientHydration(), provideAnimationsAsync()]
};
