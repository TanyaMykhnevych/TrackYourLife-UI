import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DonorRequestResource} from "../../../../donorRequest.resource";
import {BaseModalComponent} from "../../../../../../../../common/base/baseModal.component";
import {IScheduleOrganRetrievingViewModel} from "../../../../donorRequest.models";
import {IClinicListItem} from "../../../../../clinics/clinic.models";

@Component({
  selector: 'app-schedule-organ-retrieving-modal',
  templateUrl: './scheduleOrganRetrievingModal.html',
  styleUrls: ['./scheduleOrganRetrievingModal.scss']
})

export class ScheduleOrganRetrievingModalComponent extends BaseModalComponent<IScheduleOrganRetrievingViewModel> {
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
    } as IScheduleOrganRetrievingViewModel;

    return this.showModal();
  }

  public save(): Promise<any> {
    return this.donorRequestResource.timeForRetrievingHasBeenScheduled(this.donorRequestId).then(() => {
      this.successClose();
    });
  }

  public setSubmitted(x: boolean): boolean {
    this.$submitted = x;
    return x;
  }
}
