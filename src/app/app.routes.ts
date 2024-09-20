import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PolicComponent } from './polic/polic.component';

export const routes: Routes = [
    { path: 'imprint', component: ImprintComponent },
    { path: 'polic', component: PolicComponent },

];
