import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {AppEnums} from "../../app.constants";
import {ClinicsPageComponent} from "./components/clinics/clinics.component";
import {DonorRequestPageComponent} from "./components/donorRequest/donorRequest.component";
import {PatientRequestsPageComponent} from "./components/patientRequests/patientRequests.component";

const r = AppEnums.routes;
const routes: Routes = [
  {
    path: r.pages,
    component: PagesComponent,
    children: [
      {path: '', redirectTo: r.createDonorRequest, pathMatch: 'full'},

      {path: r.manage + '/' + r.clinics, component: ClinicsPageComponent},

      {path: r.createDonorRequest, component: DonorRequestPageComponent },

      {path: r.patientRequests, component: PatientRequestsPageComponent }
    ]
  }
];

export const pagesRouting = RouterModule.forChild(routes);
