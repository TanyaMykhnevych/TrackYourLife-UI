import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "../login/login.component";
import {PagesComponent} from "./pages.component";
import {FormsModule} from "@angular/forms";
import {pagesRouting} from "./pages.routing";
import {CoreModule} from "../../common/core.module";
import {ClinicsPageComponent} from "./components/clinics/clinics.component";
import {ClinicsResource} from "./components/clinics/clinics.resource";
import {EditClinicModalComponent} from "./components/clinics/components/editClinicModal/edit-clinic-modal.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AddClinicModalComponent} from "./components/clinics/components/editClinicModal/add-clinic-modal.component";
import {DonorRequestPageComponent} from "./components/donorRequest/donorRequest.component";
import {DonorRequestResource} from "./components/donorRequest/donorRequest.resource";
import {PatientRequestsPageComponent} from "./components/patientRequests/patientRequests.component";
import {PatientRequestsResource} from "./components/patientRequests/patientRequests.resource";
import {CreateDonorRequestFormComponent} from "./components/donorRequest/components/createDonorRequestForm/createDonorRequestForm.component";

@NgModule({
  declarations: [
    PagesComponent,

    ClinicsPageComponent,
    EditClinicModalComponent,
    AddClinicModalComponent,

    DonorRequestPageComponent,
    CreateDonorRequestFormComponent,

    PatientRequestsPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,

    NgbModule,

    pagesRouting
  ],
  providers: [
    ClinicsResource,
    DonorRequestResource,
    PatientRequestsResource
  ]
})
export class PagesModule {
}
