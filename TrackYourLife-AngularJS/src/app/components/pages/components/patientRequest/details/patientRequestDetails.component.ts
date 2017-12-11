import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {PatientRequestResource} from "../patientRequest.resource";
import {ClinicsResource} from "../../clinics/clinics.resource";
import {PreloaderService} from "../../../../../common/services/preloaderService";
import {ActivatedRoute} from "@angular/router";
import {NotificationService} from "../../../../../common/services/notificationService";
import {UserService} from "../../../../../common/services/userService";
import {IClinicListItem} from "../../clinics/clinic.models";
import {IPatientRequestDetailsViewModel} from "../patientRequest.models";
import {IContentResponseWrapper} from "../../../../../models/interfaces/apiRespone/responseWrapper";
import {AppEnums} from "../../../../../app.constants";

@Component({
  selector: 'app-patient-request-details-page',
  styleUrls: ['./patientRequestDetails.scss'],
  templateUrl: './patientRequestDetails.html'
})
export class PatientRequestDetailsPageComponent implements OnInit, OnDestroy {
  public patientRequestDetailsModel: IPatientRequestDetailsViewModel;

  private patientRequestId: number;
  private subscription: Subscription;

  constructor(private patientRequestResource: PatientRequestResource,
              private clinicsResource: ClinicsResource,
              private preloaderService: PreloaderService,
              private route: ActivatedRoute,
              private notificationService: NotificationService,
              private userService: UserService) {
  }

  public ngOnInit() {
    this.patientRequestDetailsModel = {} as IPatientRequestDetailsViewModel;
    this.subscription = this.route.params.subscribe(params => {
      this.patientRequestId = +params['patientRequestId'];

      Promise.all([
        this.getPatientRequestDetails()
      ]);

    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public getDonorPatientStatusString(value: number): string {
    return AppEnums.patientRequestStatusesStrings[value];
  }

  public getPatientRequestStatusString(value: number): string {
    return AppEnums.patientRequestStatusesStrings[value];
  }

  public getDonorRequestStatusString(value: number): string {
    return AppEnums.donorRequestStatusesStrings[value];
  }

  public getBirthDate(date) {
    return new Date(Date.parse(date)).toLocaleDateString("en-US");
  }

  private getPatientRequestDetails(): Promise<IPatientRequestDetailsViewModel> {
    this.preloaderService.showGlobalPreloader();
    return this.patientRequestResource.getPatientRequestDetails(this.patientRequestId)
      .catch((err) => {
        this.preloaderService.hideGlobalPreloader();
        this.notificationService.showError(err);
      })
      .then((response: IContentResponseWrapper<IPatientRequestDetailsViewModel>) => {
          this.preloaderService.hideGlobalPreloader();
          if (response.isValid) {
            this.patientRequestDetailsModel = response.content;
            return this.patientRequestDetailsModel;
          } else {
            console.error(response.errorMessage);
            this.notificationService.showError(response.errorMessage);
          }
        }
      );
  }

}
