import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {AppEnums} from "../../app.constants";
import {ClinicsPageComponent} from "./components/clinics/clinics.component";
import {CreatePatientRequestPageComponent} from "./components/patientRequest/components/createPatientRequest/createPatientRequest.component";
import {RequestSentPageComponent} from "./components/donorRequest/components/createDonorRequest/components/requestSent/requestSent.component";
import {CreateDonorRequestPageComponent} from "./components/donorRequest/components/createDonorRequest/createDonorRequest.component";
import {ManageDonorRequestsPageComponent} from "./components/donorRequest/components/manageDonorRequests/manageDonorRequests.component";
import {DonorRequestListPageComponent} from "./components/donorRequest/components/donorRequestList/donorRequestList.component";
import {ManageOrganInfosPageComponent} from "./components/manageOrganInfos/manageOrganInfos.component";
import {ManagePatientRequestsPageComponent} from "./components/patientRequest/components/managePatientRequests/managePatientRequests.component";
import {MyPatientRequestsPageComponent} from "./components/patientRequest/components/myPatientRequests/myPatientRequests.component";

const r = AppEnums.routes;
const routes: Routes = [
  {
    path: r.pages,
    component: PagesComponent,
    children: [
      {path: '', redirectTo: r.donorRequest + '/' + r.create, pathMatch: 'full'},

      {path: r.manage + '/' + r.clinics, component: ClinicsPageComponent},
      {path: r.manage + '/' + r.manageOrganInfos, component: ManageOrganInfosPageComponent},

      {path: r.donorRequest + '/' + r.create, component: CreateDonorRequestPageComponent },
      {path: r.donorRequest + '/' + r.requestSent, component: RequestSentPageComponent },
      {path: r.donorRequest + '/' + r.list, component: DonorRequestListPageComponent },
      {path: r.donorRequest + '/' + r.manageDonorRequests, component: ManageDonorRequestsPageComponent },

      {path: r.patientRequest + '/' + r.create, component: CreatePatientRequestPageComponent },
      {path: r.patientRequest + '/' + r.managePatientRequests, component: ManagePatientRequestsPageComponent },
      {path: r.patientRequest + '/' + r.myPatientRequests, component: MyPatientRequestsPageComponent },
    ]
  }
];

export const pagesRouting = RouterModule.forChild(routes);
