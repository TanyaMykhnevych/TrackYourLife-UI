import {Component, OnInit, ViewChild} from '@angular/core';
import {IContentResponseWrapper} from "../../../../models/interfaces/apiRespone/responseWrapper";
import {PreloaderService} from "../../../../common/services/preloaderService";
import {ModalCloseStates} from "../../../../common/base/baseModal.component";
import {NotificationService} from "../../../../common/services/notificationService";
import {DonorRequestResource} from "./donorRequest.resource";
import {CreateDonorRequestFormComponent} from "./components/createDonorRequestForm/createDonorRequestForm.component";
import {IOrganInfo} from "../../../../models/interfaces/IOrganInfo";

@Component({
  selector: 'app-clinics-page',
  styleUrls: ['./donorRequest.scss'],
  templateUrl: './donorRequest.html'
})
export class DonorRequestPageComponent implements OnInit {
  @ViewChild('createDonorForm') private createDonorForm: CreateDonorRequestFormComponent;

  private organInfos: Array<IOrganInfo>;

  constructor(private donorRequestResource: DonorRequestResource,
              private preloaderService: PreloaderService,
              private notificationService: NotificationService) {

  }

  public ngOnInit() {
    const organ1 = {id: 1, name: 'Heart'} as IOrganInfo;
    const organ2 = {id: 2, name: 'Liver'} as IOrganInfo;
    this.organInfos = [organ1, organ2];
  }

  public submitDonorRequestForm(value: boolean) {

  }
}
