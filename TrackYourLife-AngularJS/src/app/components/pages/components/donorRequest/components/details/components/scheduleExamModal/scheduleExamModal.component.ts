import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DonorRequestResource} from "../../../../donorRequest.resource";
import {BaseModalComponent} from "../../../../../../../../common/base/baseModal.component";
import {IScheduleMedicalExamViewModel} from "../../../../donorRequest.models";
import {IClinicListItem} from "../../../../../clinics/clinic.models";

@Component({
  selector: 'app-schedule-exam-modal',
  templateUrl: './scheduleExamModal.html',
  styleUrls: ['./scheduleExamModal.scss']
})

export class ScheduleExamModalComponent extends BaseModalComponent<IScheduleMedicalExamViewModel> {
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
    } as IScheduleMedicalExamViewModel;

    return this.showModal();
  }

  public save(): Promise<any> {
    return this.donorRequestResource.scheduleMedicalExam(this.entity).then(() => {
      this.successClose();
    });
  }

  public setSubmitted(x: boolean): boolean {
    this.$submitted = x;
    return x;
  }
}
