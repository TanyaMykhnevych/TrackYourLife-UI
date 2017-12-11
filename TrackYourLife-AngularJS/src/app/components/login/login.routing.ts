import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {AppEnums} from "../../app.constants";


const r = AppEnums.routes;
const routes: Routes = [
  { path: r.login, component: LoginComponent }
];

export const loginRouting = RouterModule.forChild(routes);
