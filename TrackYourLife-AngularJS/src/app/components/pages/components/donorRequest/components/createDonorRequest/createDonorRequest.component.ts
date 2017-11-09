import {Component, OnInit, ViewChild} from '@angular/core';
import {IContentResponseWrapper, IResponseWrapper} from "../../../../../../models/interfaces/apiRespone/responseWrapper";
import {PreloaderService} from "../../../../../../common/services/preloaderService";
import {ModalCloseStates} from "../../../../../../common/base/baseModal.component";
import {NotificationService} from "../../../../../../common/services/notificationService";
import {DonorRequestResource} from "../../donorRequest.resource";
import {CreateDonorRequestFormComponent} from "./components/createDonorRequestForm/createDonorRequestForm.component";
import {IOrganInfo} from "../../../../../../models/interfaces/IOrganInfo";
import {OrganInfosResource} from "../../../../organInfos.resource";
import {ICreateDonorRequestViewModel} from "../../donorRequest.models";
import {Lang} from "../../../../../../common/langs/langs";
import {Router} from "@angular/router";
import {AppEnums} from "../../../../../../app.constants";

@Component({
  selector: 'app-clinics-page',
  styleUrls: ['./createDonorRequest.scss'],
  templateUrl: './createDonorRequest.html'
})
export class CreateDonorRequestPageComponent implements OnInit {
  @ViewChild('createDonorForm') private createDonorForm: CreateDonorRequestFormComponent;

  public organInfos: Array<IOrganInfo>;

  constructor(private donorRequestResource: DonorRequestResource,
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

  public submitDonorRequestForm(): Promise<any> {
    this.preloaderService.showGlobalPreloader();
    const data = this.createDonorForm.data;
    return this.donorRequestResource.submitDonorRequest(data)
      .catch((err) => {
        this.preloaderService.showGlobalPreloader();
        this.notificationService.showError(err);
      })
      .then((response: IResponseWrapper) => {
        this.preloaderService.hideGlobalPreloader();
        if (response.isValid) {
          this.router.navigate([AppEnums.routes.pages, AppEnums.routes.donorRequest, AppEnums.routes.requestSent]);
          this.notificationService.showSuccess(Lang.DONOR_REQUEST_SEND);
        } else {
          console.error(response.errorMessage);
          this.notificationService.showError(response.errorMessage);
        }
      });
  }
}
