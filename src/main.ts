import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ImprintComponent } from './app/imprint/imprint.component';
import { PolicComponent } from './app/polic/polic.component';
import { MainWebsiteComponent } from './app/main-website/main-website.component';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent }, 
  { path: 'polic', component: PolicComponent },      
  { path: '', component: MainWebsiteComponent } 
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  
  ]
}).catch(err => console.error(err));
