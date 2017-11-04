import {Component, OnInit, ViewChild} from '@angular/core';
import {IContentResponseWrapper} from "../../../../models/interfaces/apiRespone/responseWrapper";
import {BsModal} from "@mm2/bsmodal";
import {PreloaderService} from "../../../../common/services/preloaderService";
import {ModalCloseStates} from "../../../../common/base/baseModal.component";
import {NotificationService} from "../../../../common/services/notificationService";

@Component({
  selector: 'app-clinics-page',
  styleUrls: ['./donorRequest.scss'],
  templateUrl: './donorRequest.html'
})
export class DonorRequestPageComponent implements OnInit {
  // @ViewChild('editClinicModal') public editClinicModal: EditClinicModalComponent;
  // @ViewChild('addClinicModal') public addClinicModal: AddClinicModalComponent;
  //
  // public clinics: Array<IClinicListItem>;

  // constructor(private clinicsResource: ClinicsResource,
  //             private preloaderService: PreloaderService,
  //             private notificationService: NotificationService) {
  //
  // }

  public ngOnInit() {
    // this.getAllClinics();
  }

  // private getAllClinics(): Promise<Array<IClinicListItem>> {
  //   this.preloaderService.showGlobalPreloader();
  //   return this.clinicsResource.getAllClinics()
  //     .then((response: IContentResponseWrapper<IClinicList>) => {
  //       this.preloaderService.hideGlobalPreloader();
  //       this.clinics = response.content.clinics;
  //       return this.clinics;
  //     });
  // }
  //
  // public showAddClinicModal() {
  //   return this.addClinicModal.show().then(closeStatus => {
  //     if (closeStatus === ModalCloseStates.Success) {
  //       this.notificationService.showSuccess(Lang.ADD_CLINIC_SUCCESS);
  //       this.getAllClinics();
  //     }
  //   });
  // }
  //
  // public showEditClinicModal(clinicId: number) {
  //   return this.editClinicModal.show(clinicId).then(closeStatus => {
  //     if (closeStatus === ModalCloseStates.Success) {
  //       this.notificationService.showSuccess(Lang.EDIT_CLINIC_SUCCESS);
  //       this.getAllClinics();
  //     }
  //   });
  // }


}
