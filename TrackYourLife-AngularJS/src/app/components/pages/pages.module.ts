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

@NgModule({
  declarations: [
    PagesComponent,

    ClinicsPageComponent,
    EditClinicModalComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,

    NgbModule,

    pagesRouting
  ],
  providers: [
    ClinicsResource
  ]
})
export class PagesModule {
}
