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
import {DonorRequestListPageComponent} from "./components/donorRequest/components/donorRequestList/donorRequestList.component";
import {ManageOrganInfosPageComponent} from "./components/manageOrganInfos/manageOrganInfos.component";
import {AddOrganInfoModalComponent} from "./components/manageOrganInfos/components/editClinicModal/add-organ-info-modal.component";
import {EditOrganInfoModalComponent} from "./components/manageOrganInfos/components/editClinicModal/edit-organ-info-modal.component";
import {CreatePatientRequestFormComponent} from "./components/patientRequest/components/createPatientRequest/components/createPatientRequestForm/createPatientRequestForm.component";
import {PatientRequestSentPageComponent} from "./components/patientRequest/components/createPatientRequest/components/patientRequestSent/patientRequestSent.component";
import {PatientRequestListPageComponent} from "./components/patientRequest/components/patientRequestList/patientRequestList.component";
import {CreateRegisteredDonorRequestFormComponent} from "./components/donorRequest/components/createDonorRequest/components/createRegisteredDonorRequestForm/createForm.component";
import {DonorRequestDetailsPageComponent} from "./components/donorRequest/components/details/donorRequestDetails.component";
import {ScheduleExamModalComponent} from "./components/donorRequest/components/details/components/scheduleExamModal/scheduleExamModal.component";
import {EnterMedicalExamResultModalComponent} from "./components/donorRequest/components/details/components/enterMedicalExamResultModal/enterMedicalExamResultModal.component";
import {LinkPatientRequestModalComponent} from "./components/donorRequest/components/details/components/linkPatientRequestModal/linkPatientRequestModal.component";
import {ScheduleOrganRetrievingModalComponent} from "./components/donorRequest/components/details/components/scheduleOrganRetrievingModal/scheduleOrganRetrievingModal.component";
import {SetRequestFinalStatusModalComponent} from "./components/donorRequest/components/details/components/setRequestFinalStatusModal/setRequestFinalStatusModal.component";
import {PatientsQueueResource} from "./patientsQueue.resource";
import {PatientRequestDetailsPageComponent} from "./components/patientRequest/details/patientRequestDetails.component";


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
    CreateRegisteredDonorRequestFormComponent,
    RequestSentPageComponent,
    DonorRequestListPageComponent,
    DonorRequestDetailsPageComponent,
    ScheduleExamModalComponent,
    EnterMedicalExamResultModalComponent,
    SetRequestFinalStatusModalComponent,
    LinkPatientRequestModalComponent,
    ScheduleOrganRetrievingModalComponent,

    CreatePatientRequestPageComponent,
    CreatePatientRequestFormComponent,
    PatientRequestSentPageComponent,
    PatientRequestListPageComponent,
    PatientRequestDetailsPageComponent
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
    OrganInfosResource,
    PatientsQueueResource
  ]
})
export class PagesModule {
}
