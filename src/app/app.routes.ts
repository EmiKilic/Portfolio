import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PolicComponent } from './polic/polic.component';
import { MainWebsiteComponent } from './main-website/main-website.component'; // Main content component

const routes: Routes = [
    { path: '', component: MainWebsiteComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'polic', component: PolicComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
