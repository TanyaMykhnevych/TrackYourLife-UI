import {Component, OnInit, ViewChild} from '@angular/core';
import {AppEnums} from "../../../../../../app.constants";
import {DonorRequestResource} from "../../donorRequest.resource";
import {PreloaderService} from "../../../../../../common/services/preloaderService";
import {Router} from "@angular/router";
import {IDonorRequestList, IDonorRequestListItem} from "../../donorRequest.models";
import {IContentResponseWrapper} from "../../../../../../models/interfaces/apiRespone/responseWrapper";
import {UserService} from "../../../../../../common/services/userService";

@Component({
  selector: 'app-donor-request-list-page',
  styleUrls: ['./donorRequestList.scss'],
  templateUrl: './donorRequestList.html'
})
export class DonorRequestListPageComponent implements OnInit {

  public donorRequestList: Array<IDonorRequestListItem>;
  public pageTitle: string;

  constructor(private donorRequestResource: DonorRequestResource,
              private preloaderService: PreloaderService,
              private router: Router,
              private  userService: UserService) {

  }

  public getDonorRequestStatusString(value: number): string {
    return AppEnums.donorRequestStatusesStrings[value];
  }

  public getMedicalExamStatusString(value: number): string {
    return AppEnums.medicalExamStatusesStrings[value];
  }

  public goToDonorRequestDetails(donorRequestId: number): void {
    this.router.navigate([
      AppEnums.routes.pages,
      AppEnums.routes.donorRequest,
      AppEnums.routes.details,
      donorRequestId
    ]);
  }

  public ngOnInit() {
    this.updatePageTitle();
    this.getDonorRequestList();
  }

  private getDonorRequestList(): Promise<Array<IDonorRequestListItem>> {
    this.preloaderService.showGlobalPreloader();
    return this.donorRequestResource.getDonorRequestList()
      .then((response: IContentResponseWrapper<IDonorRequestList>) => {
        this.preloaderService.hideGlobalPreloader();
        this.donorRequestList = response.content.donorRequestList;
        return this.donorRequestList;
      });
  }

  private updatePageTitle(): void {
    const roleName = this.userService.getUserInfo().roleName;
    if (roleName === AppEnums.roles.medicalEmployee) {
      this.pageTitle = "Donor request list";
    } else {
      this.pageTitle = "My donor requests";
    }
  }
}
