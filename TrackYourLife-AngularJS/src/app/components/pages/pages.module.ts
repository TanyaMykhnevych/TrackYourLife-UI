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
import {DonorRequestResource} from "./components/donorRequest/donorRequest.resource";
import {CreatePatientRequestPageComponent} from "./components/patientRequest/components/createPatientRequest/createPatientRequest.component";
import {PatientRequestResource} from "./components/patientRequest/patientRequest.resource";
import {OrganInfosResource} from "./organInfos.resource";
import {CreateDonorRequestPageComponent} from "./components/donorRequest/components/createDonorRequest/createDonorRequest.component";
import {
  CreateDonorRequestFormComponent
} from "./components/donorRequest/components/createDonorRequest/components/createDonorRequestForm/createDonorRequestForm.component";
import {
  RequestSentPageComponent
} from "./components/donorRequest/components/createDonorRequest/components/requestSent/requestSent.component";
import {ManageDonorRequestsPageComponent} from "./components/donorRequest/components/manageDonorRequests/manageDonorRequests.component";
import {MyDonorRequestsPageComponent} from "./components/donorRequest/components/myDonorRequests/myDonorRequests.component";
import {ManageOrganInfosPageComponent} from "./components/manageOrganInfos/manageOrganInfos.component";
import {AddOrganInfoModalComponent} from "./components/manageOrganInfos/components/editClinicModal/add-organ-info-modal.component";
import {EditOrganInfoModalComponent} from "./components/manageOrganInfos/components/editClinicModal/edit-organ-info-modal.component";
import {CreatePatientRequestFormComponent} from "./components/patientRequest/components/createPatientRequest/components/createPatientRequestForm/createPatientRequestForm.component";
import {PatientRequestSentPageComponent} from "./components/patientRequest/components/createPatientRequest/components/patientRequestSent/patientRequestSent.component";
import {MyPatientRequestsPageComponent} from "./components/patientRequest/components/myPatientRequests/myPatientRequests.component";
import {ManagePatientRequestsPageComponent} from "./components/patientRequest/components/managePatientRequests/managePatientRequests.component";
import {LinkingRequestsPageComponent} from "./components/linkingRequests/linkingRequests.component";

@NgModule({
  declarations: [
    PagesComponent,

    ClinicsPageComponent,
    EditClinicModalComponent,
    AddClinicModalComponent,
    ManageOrganInfosPageComponent,
    AddOrganInfoModalComponent,
    EditOrganInfoModalComponent,

    CreateDonorRequestPageComponent,
    CreateDonorRequestFormComponent,
    RequestSentPageComponent,
    ManageDonorRequestsPageComponent,
    MyDonorRequestsPageComponent,

    CreatePatientRequestPageComponent,
    CreatePatientRequestFormComponent,
    PatientRequestSentPageComponent,
    MyPatientRequestsPageComponent,
    ManagePatientRequestsPageComponent,
    LinkingRequestsPageComponent
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
    PatientRequestResource,
    OrganInfosResource
  ]
})
export class PagesModule {
}
