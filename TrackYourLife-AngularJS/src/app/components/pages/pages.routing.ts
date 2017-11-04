import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {AppEnums} from "../../app.constants";
import {ClinicsPageComponent} from "./components/clinics/clinics.component";

const r = AppEnums.routes;
const routes: Routes = [
  {
    path: r.pages,
    component: PagesComponent,
    children: [
      {path: '', redirectTo: r.manage + '/' + r.clinics, pathMatch: 'full'},
      {path: r.manage + '/' + r.clinics, component: ClinicsPageComponent}
    ]
  }
];

export const pagesRouting = RouterModule.forChild(routes);
