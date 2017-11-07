import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {AppEnums} from "../../app.constants";
import {ClinicsPageComponent} from "./components/clinics/clinics.component";
import {PatientRequestsPageComponent} from "./components/patientRequests/patientRequests.component";
import {RequestSentPageComponent} from "./components/donorRequest/components/createDonorRequest/components/requestSent/requestSent.component";
import {CreateDonorRequestPageComponent} from "./components/donorRequest/components/createDonorRequest/createDonorRequest.component";
import {ManageDonorRequestsPageComponent} from "./components/donorRequest/components/manageDonorRequests/manageDonorRequests.component";
import {MyDonorRequestsPageComponent} from "./components/donorRequest/components/myDonorRequests/myDonorRequests.component";

const r = AppEnums.routes;
const routes: Routes = [
  {
    path: r.pages,
    component: PagesComponent,
    children: [
      {path: '', redirectTo: r.donorRequest + '/' + r.create, pathMatch: 'full'},

      {path: r.manage + '/' + r.clinics, component: ClinicsPageComponent},

      {path: r.donorRequest + '/' + r.create, component: CreateDonorRequestPageComponent },
      {path: r.donorRequest + '/' + r.requestSent, component: RequestSentPageComponent },
      {path: r.donorRequest + '/' + r.myDonorRequests, component: MyDonorRequestsPageComponent },
      {path: r.donorRequest + '/' + r.manageDonorRequests, component: ManageDonorRequestsPageComponent },

      {path: r.patientRequests, component: PatientRequestsPageComponent }
    ]
  }
];

export const pagesRouting = RouterModule.forChild(routes);
