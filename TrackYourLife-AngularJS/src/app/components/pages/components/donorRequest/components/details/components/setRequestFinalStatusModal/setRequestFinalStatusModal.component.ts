import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DonorRequestResource} from "../../../../donorRequest.resource";
import {BaseModalComponent} from "../../../../../../../../common/base/baseModal.component";
import {IScheduleMedicalExamViewModel, ISetRequestFinalStatusViewModel} from "../../../../donorRequest.models";
import {IClinicListItem} from "../../../../../clinics/clinic.models";

@Component({
  selector: 'app-set-request-final-status-modal',
  templateUrl: './setRequestFinalStatusModal.html',
  styleUrls: ['./setRequestFinalStatusModal.scss']
})

export class SetRequestFinalStatusModalComponent extends BaseModalComponent<ISetRequestFinalStatusViewModel> {
  @Input('donorRequestId') public donorRequestId: number;
  @Input('clinics') public clinics: Array<IClinicListItem>;

  $submitted = false;

  constructor(modalService: NgbModal, private donorRequestResource: DonorRequestResource) {
    super(modalService);
  }

  public show() {
    this.$submitted = false;
    this.entity = {
      donorRequestId: this.donorRequestId
    } as ISetRequestFinalStatusViewModel;

    return this.showModal();
  }

  public save(): Promise<any> {
    return this.donorRequestResource.setRequestFinalStatus(this.entity).then(() => {
      this.successClose();
    });
  }

  public setSubmitted(x: boolean): boolean {
    this.$submitted = x;
    return x;
  }
}
