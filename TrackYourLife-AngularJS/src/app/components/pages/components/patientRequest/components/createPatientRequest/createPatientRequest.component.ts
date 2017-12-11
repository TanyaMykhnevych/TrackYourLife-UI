import {Component, OnInit, ViewChild} from '@angular/core';
import {IContentResponseWrapper, IResponseWrapper} from "../../../../../../models/interfaces/apiRespone/responseWrapper";
import {PreloaderService} from "../../../../../../common/services/preloaderService";
import {NotificationService} from "../../../../../../common/services/notificationService";
import {PatientRequestResource} from "../../patientRequest.resource";
import {CreatePatientRequestFormComponent} from "./components/createPatientRequestForm/createPatientRequestForm.component";
import {IOrganInfo} from "../../../../../../models/interfaces/IOrganInfo";
import {OrganInfosResource} from "../../../../organInfos.resource";
import {Lang} from "../../../../../../common/langs/langs";
import {Router} from "@angular/router";
import {AppEnums} from "../../../../../../app.constants";

@Component({
  selector: 'app-patient-request-page',
  styleUrls: ['./createPatientRequest.scss'],
  templateUrl: './createPatientRequest.html'
})
export class CreatePatientRequestPageComponent {

  @ViewChild('createPatientForm') private createPatientForm: CreatePatientRequestFormComponent;

  public organInfos: Array<IOrganInfo>;

  constructor(private patientRequestResource: PatientRequestResource,
              private organInfoResource: OrganInfosResource,
              private preloaderService: PreloaderService,
              private router: Router,
              private notificationService: NotificationService) {

  }

  public ngOnInit() {
    this.preloaderService.showGlobalPreloader();
    Promise.all([
      this.updateOrganInfos()
    ]).catch(() => this.preloaderService.hideGlobalPreloader())
      .then(() => {
        this.preloaderService.hideGlobalPreloader();
      });
  }

  private updateOrganInfos() {
    return this.organInfoResource.getAllOrganInfos().then((response: IContentResponseWrapper<Array<IOrganInfo>>) => {
      if (response.isValid) {
        this.organInfos = response.content;
      } else {
        console.error(response.errorMessage);
        this.notificationService.showError(response.errorMessage);
        this.organInfos = [];
      }
    });
  }

  public submitPatientRequestForm(): Promise<any> {
    this.preloaderService.showGlobalPreloader();
    const data = this.createPatientForm.data;
    return this.patientRequestResource.submitPatientRequest(data)
      .catch((err) => {
        this.preloaderService.hideGlobalPreloader();
        this.notificationService.showError(err);
      })
      .then((response: IResponseWrapper) => {
        this.preloaderService.hideGlobalPreloader();
        if (response.isValid) {
          this.notificationService.showSuccess(Lang.PATIENT_REQUEST_SEND);
          this.createPatientForm.clearData();
          // this.router.navigate([
          //   AppEnums.routes.pages,
          //   AppEnums.routes.patientRequest,
          //   AppEnums.routes.details,
          //   // тут будет patient request ID
          // ]);
        } else {
          console.error(response.errorMessage);
          this.notificationService.showError(response.errorMessage);
        }
      });
  }
}
