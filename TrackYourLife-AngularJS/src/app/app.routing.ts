import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' }
];

export const defaultRouting = RouterModule.forRoot(routes, {enableTracing : true});
