import {Component, OnInit, ViewChild} from '@angular/core';
import {IClinicList, IClinicListItem} from "./clinic.models";
import {ClinicsResource} from "./clinics.resource";
import {IContentResponseWrapper} from "../../../../models/interfaces/apiRespone/responseWrapper";
import {EditClinicModalComponent} from "./components/editClinicModal/edit-clinic-modal.component";
import {BsModal} from "@mm2/bsmodal";
import {PreloaderService} from "../../../../common/services/preloaderService";
import {ModalCloseStates} from "../../../../common/base/baseModal.component";
import {NotificationService} from "../../../../common/services/notificationService";
import {Lang} from "../../../../common/langs/langs";

@Component({
  selector: 'app-clinics-page',
  styleUrls: ['./clinics.scss'],
  templateUrl: './clinics.html'
})
export class ClinicsPageComponent implements OnInit {
  @ViewChild('editClinicModal') public editClinicModal: EditClinicModalComponent;

  public clinics: Array<IClinicListItem>;

  constructor(private clinicsResource: ClinicsResource,
              private preloaderService: PreloaderService,
              private notificationService: NotificationService) {

  }

  public ngOnInit() {
    this.getAllClinics();
  }

  private getAllClinics(): Promise<Array<IClinicListItem>> {
    this.preloaderService.showGlobalPreloader();
    return this.clinicsResource.getAllClinics()
      .then((response: IContentResponseWrapper<IClinicList>) => {
        this.preloaderService.hideGlobalPreloader();
        this.clinics = response.content.clinics;
        return this.clinics;
      });
  }

  // public editClinic(clinicId: number): Promise<any> {
  public showEditClinicModal(clinicId: number) {
    return this.editClinicModal.show(clinicId).then(closeStatus => {
      if (closeStatus === ModalCloseStates.Success) {
        this.notificationService.showSuccess(Lang.EDIT_CLINIC_SUCCESS);
        this.getAllClinics();
      }
    });
  }


}
