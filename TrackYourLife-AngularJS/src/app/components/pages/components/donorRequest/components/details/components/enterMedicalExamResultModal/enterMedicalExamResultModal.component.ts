import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DonorRequestResource} from "../../../../donorRequest.resource";
import {BaseModalComponent} from "../../../../../../../../common/base/baseModal.component";
import {IEnterMedicalExamResultViewModel, IScheduleMedicalExamViewModel} from "../../../../donorRequest.models";
import {IClinicListItem} from "../../../../../clinics/clinic.models";

@Component({
  selector: 'app-enter-medical-exam-result-modal',
  templateUrl: './enterMedicalExamResultModal.html',
  styleUrls: ['./enterMedicalExamResultModal.scss']
})

export class EnterMedicalExamResultModalComponent extends BaseModalComponent<IEnterMedicalExamResultViewModel> {
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
    } as IEnterMedicalExamResultViewModel;

    return this.showModal();
  }

  public save(): Promise<any> {
    return this.donorRequestResource.submitMedicalExamResult(this.entity).then(() => {
      this.successClose();
    });
  }

  public setSubmitted(x: boolean): boolean {
    this.$submitted = x;
    return x;
  }
}
