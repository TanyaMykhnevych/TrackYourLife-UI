import {Component, OnInit, ViewChild} from '@angular/core';
import {IContentResponseWrapper} from "../../../../models/interfaces/apiRespone/responseWrapper";
import {PreloaderService} from "../../../../common/services/preloaderService";
import {ModalCloseStates} from "../../../../common/base/baseModal.component";
import {NotificationService} from "../../../../common/services/notificationService";
import {Lang} from "../../../../common/langs/langs";
import {IOrganInfoList, IOrganInfoListItem} from "./manageOrganInfos.models";
import {OrganInfosResource} from "../../organInfos.resource";
import {AddOrganInfoModalComponent} from "./components/editClinicModal/add-organ-info-modal.component";
import {EditOrganInfoModalComponent} from "./components/editClinicModal/edit-organ-info-modal.component";

@Component({
  selector: 'app-manage-organ-infos-page',
  styleUrls: ['./manageOrganInfos.scss'],
  templateUrl: './manageOrganInfos.html'
})
export class ManageOrganInfosPageComponent implements OnInit {
  @ViewChild('editOrganInfoModal') public editOrganInfoModal: EditOrganInfoModalComponent;
  @ViewChild('addOrganInfoModal') public addOrganInfoModal: AddOrganInfoModalComponent;

  public organInfos: Array<IOrganInfoListItem>;

  constructor(private organInfosResource: OrganInfosResource,
              private preloaderService: PreloaderService,
              private notificationService: NotificationService) {

  }

  public ngOnInit() {
    this.getAllOrganInfos();
  }

  private getAllOrganInfos(): Promise<Array<IOrganInfoListItem>> {
    this.preloaderService.showGlobalPreloader();
    return this.organInfosResource.getOrganInfoList()
      .catch(err => {
        this.preloaderService.hideGlobalPreloader();
        console.error(err);
        this.notificationService.showError(err);
      })
      .then((response: IContentResponseWrapper<IOrganInfoList>) => {
        this.preloaderService.hideGlobalPreloader();
        if (response.isValid) {
          this.organInfos = response.content.organInfoList;
        } else {
          console.error(response.errorMessage);
          this.notificationService.showError(response.errorMessage);
          this.organInfos = [];
        }
        return this.organInfos;
      });
  }

  public showAddOrganInfoModal() {
    return this.addOrganInfoModal.show().then(closeStatus => {
      if (closeStatus === ModalCloseStates.Success) {
        this.notificationService.showSuccess(Lang.ADD_ORGAN_INFO_SUCCESS);
        this.getAllOrganInfos();
      }
    });
  }

  public showEditOrganInfoModal(organInfoId: number) {
    return this.editOrganInfoModal.show(organInfoId).then(closeStatus => {
      if (closeStatus === ModalCloseStates.Success) {
        this.notificationService.showSuccess(Lang.EDIT_ORGAN_INFO_SUCCESS);
        this.getAllOrganInfos();
      }
    });
  }


}
