import {Routes, RouterModule} from '@angular/router';
import {AppEnums} from "./app.constants";

const r = AppEnums.routes;
export const routes: Routes = [
  {path: '', redirectTo: r.home, pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes, {useHash: true, enableTracing: true});
