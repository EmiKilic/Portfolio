import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ImprintComponent } from './app/imprint/imprint.component';
import { PolicComponent } from './app/polic/polic.component';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent }, 
  { path: 'polic', component: PolicComponent },      
  { path: '', redirectTo: '/', pathMatch: 'full' } 
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  
  ]
}).catch(err => console.error(err));
