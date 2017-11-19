import {Component, OnInit, ViewChild} from '@angular/core';
import {IPatientRequestList, IPatientRequestListItem} from "../../patientRequest.models";
import {Router} from "@angular/router";
import {UserService} from "../../../../../../common/services/userService";
import {AppEnums} from "../../../../../../app.constants";
import {IContentResponseWrapper} from "../../../../../../models/interfaces/apiRespone/responseWrapper";
import {PreloaderService} from "../../../../../../common/services/preloaderService";
import {PatientRequestResource} from "../../patientRequest.resource";

@Component({
  selector: 'app-patient-request-list-page',
  styleUrls: ['./patientRequestList.scss'],
  templateUrl: './patientRequestList.html'
})
export class PatientRequestListPageComponent implements OnInit {

  public patientRequestList: Array<IPatientRequestListItem>;
  public pageTitle: string;

  constructor(private patientRequestResource: PatientRequestResource,
              private preloaderService: PreloaderService,
              private router: Router,
              private  userService: UserService) {

  }

  public getPatientRequestStatusString(value: number): string {
    return AppEnums.patientRequestStatusesStrings[value];
  }

  public goToPatientRequestDetails(patientRequestId: number): void {

  }

  public ngOnInit() {
    this.updatePageTitle();
    this.getPatientRequestList();
  }

  private getPatientRequestList(): Promise<Array<IPatientRequestListItem>> {
    this.preloaderService.showGlobalPreloader();
    return this.patientRequestResource.getPatientRequestList()
      .then((response: IContentResponseWrapper<IPatientRequestList>) => {
        this.preloaderService.hideGlobalPreloader();
        this.patientRequestList = response.content.patientRequestList;
        return this.patientRequestList;
      });
  }

  private updatePageTitle(): void {
    const roleName = this.userService.getUserInfo().roleName;
    if (roleName === AppEnums.roles.medicalEmployee) {
      this.pageTitle = "Recipient request list";
    } else {
      this.pageTitle = "My recipient requests";
    }
  }
}
