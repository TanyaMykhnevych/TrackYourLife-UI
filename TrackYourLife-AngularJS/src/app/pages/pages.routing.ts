import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {AppEnums} from "../app.constants";
import {HomeComponent} from "./home/home.component";

const r = AppEnums.routes;
const routes: Routes = [
  {
    path: r.pages,
    component: PagesComponent,
    children: [
      {path: '', redirectTo: r.home, pathMatch: 'full'},
      {path: r.home, component: HomeComponent}
    ]
  }
];

export const pagesRouting = RouterModule.forChild(routes);
