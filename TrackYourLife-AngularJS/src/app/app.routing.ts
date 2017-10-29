import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'signin', redirectTo: 'login', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes, {enableTracing : true});
