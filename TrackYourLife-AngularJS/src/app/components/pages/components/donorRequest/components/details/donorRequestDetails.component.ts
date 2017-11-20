import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AppEnums} from "../../../../../../app.constants";
import {DonorRequestResource} from "../../donorRequest.resource";
import {PreloaderService} from "../../../../../../common/services/preloaderService";
import {ActivatedRoute, Router} from "@angular/router";
import {IDonorRequestDetailsViewModel} from "../../donorRequest.models";
import {IContentResponseWrapper} from "../../../../../../models/interfaces/apiRespone/responseWrapper";
import {UserService} from "../../../../../../common/services/userService";
import {Subscription} from "rxjs/Subscription";
import {NotificationService} from "../../../../../../common/services/notificationService";
import {ClinicsResource} from "../../../clinics/clinics.resource";
import {IClinicList, IClinicListItem} from "../../../clinics/clinic.models";
import {ScheduleExamModalComponent} from "./components/scheduleExamModal/scheduleExamModal.component";

@Component({
  selector: 'app-donor-request-details-page',
  styleUrls: ['./donorRequestDetails.scss'],
  templateUrl: './donorRequestDetails.html'
})
export class DonorRequestDetailsPageComponent implements OnInit, OnDestroy {
  @ViewChild('scheduleExamModal') private scheduleExamModal: ScheduleExamModalComponent;

  public donorRequestDetails: IDonorRequestDetailsViewModel;
  public clinics: Array<IClinicListItem>;

  private _donorRequestId: number;
  private subscription: Subscription;

  constructor(private donorRequestResource: DonorRequestResource,
              private clinicsResource: ClinicsResource,
              private preloaderService: PreloaderService,
              private route: ActivatedRoute,
              private notificationService: NotificationService,
              private userService: UserService) {
  }

  public ngOnInit() {
    this.getClinics();

    this.donorRequestDetails = {} as IDonorRequestDetailsViewModel;
    this.subscription = this.route.params.subscribe(params => {
      this.donorRequestId = +params['donorRequestId']; // (+) converts string 'id' to a number
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getClinics() {
    this.preloaderService.showGlobalPreloader();
    return this.clinicsResource.getAllClinics()
      .then((response: IContentResponseWrapper<IClinicList>) => {
        this.preloaderService.hideGlobalPreloader();
        this.clinics = response.content.clinics;
        return this.clinics;
      });
  }

  private getDonorRequestDetails(): Promise<IDonorRequestDetailsViewModel> {
    this.preloaderService.showGlobalPreloader();
    return this.donorRequestResource.getDonorRequestDetails(this.donorRequestId)
      .catch((err) => {
        this.preloaderService.showGlobalPreloader();
        this.notificationService.showError(err);
      })
      .then((response: IContentResponseWrapper<IDonorRequestDetailsViewModel>) => {
          this.preloaderService.hideGlobalPreloader();
          if (response.isValid) {
            this.donorRequestDetails = response.content;
            return this.donorRequestDetails;
          } else {
            console.error(response.errorMessage);
            this.notificationService.showError(response.errorMessage);
          }
        }
      );
  }

  public get donorRequestId(): number {
    return this._donorRequestId;
  }

  public set donorRequestId(newId: number) {
    this._donorRequestId = newId;
    this.getDonorRequestDetails();
  }

  public getDonorRequestStatusString(value: number): string {
    return AppEnums.donorRequestStatusesStrings[value];
  }

  public getScheduleMedicalExamButtonVisibility() {
    return this.userService.isInMedEmployeeRole
      && this.donorRequestDetails.status === AppEnums.donorRequestStatuses.pendingMedicalExamination;
  }

  public getEnterMedicalExamResultsButtonVisibility() {
    return this.userService.isInMedEmployeeRole
      && this.donorRequestDetails.status === AppEnums.donorRequestStatuses.scheduledMedicalExamination;
  }

  public getLinkingPatientRequestButtonVisibility() {
    return this.userService.isInMedEmployeeRole
      && this.donorRequestDetails.status === AppEnums.donorRequestStatuses.awaitingForPatientRequest;
  }

  public getScheduleOrganRetrievingTimeButtonVisibility() {
    return this.userService.isInMedEmployeeRole
      && this.donorRequestDetails.status === AppEnums.donorRequestStatuses.needToScheduleTimeForOrganRetrieving;
  }

  public getFinalRequestStatusButtonsVisibility() {
    return this.userService.isInMedEmployeeRole
      && this.donorRequestDetails.status === AppEnums.donorRequestStatuses.awaitingOrganRetrieving;
  }

  public scheduleMedicalExam() {
    this.scheduleExamModal.show().then(() => {
      return this.getDonorRequestDetails();
    });
  }

  public enterMedicalExamResults() {

  }

  public linkPatientRequest() {

  }

  public scheduleOrganRetrievingTime() {

  }

  public setRequestAsSucceded() {

  }

  public setRequestAsFailed() {

  }
}
