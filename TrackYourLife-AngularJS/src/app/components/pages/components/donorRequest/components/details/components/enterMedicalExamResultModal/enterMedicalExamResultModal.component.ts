import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DonorRequestResource} from "../../../../donorRequest.resource";
import {BaseModalComponent} from "../../../../../../../../common/base/baseModal.component";
import {IEnterMedicalExamResultViewModel, IScheduleMedicalExamViewModel} from "../../../../donorRequest.models";
import {IClinicListItem} from "../../../../../clinics/clinic.models";
import {IEnumItemViewModel} from "../../../../../../../../models/interfaces/IEnumItemViewModel";
import {AppEnums} from "../../../../../../../../app.constants";
import {PreloaderService} from "../../../../../../../../common/services/preloaderService";

@Component({
  selector: 'app-enter-medical-exam-result-modal',
  templateUrl: './enterMedicalExamResultModal.html',
  styleUrls: ['./enterMedicalExamResultModal.scss']
})

export class EnterMedicalExamResultModalComponent
  extends BaseModalComponent<IEnterMedicalExamResultViewModel> implements OnInit {
  @Input('donorRequestId') public donorRequestId: number;

  public medicalExamStatuses: Array<IEnumItemViewModel>;

  $submitted = false;

  constructor(modalService: NgbModal,
              private preloaderService: PreloaderService,
              private donorRequestResource: DonorRequestResource) {
    super(modalService);
  }

  private buildMedicalExamStatuses(): void {
    const array = new Array<IEnumItemViewModel>();
    array.push({
      id: AppEnums.medicalExamStatuses.pass,
      name: AppEnums.medicalExamStatusesStrings[AppEnums.medicalExamStatuses.pass]
    } as IEnumItemViewModel);
    array.push({
      id: AppEnums.medicalExamStatuses.fail,
      name: AppEnums.medicalExamStatusesStrings[AppEnums.medicalExamStatuses.fail]
    } as IEnumItemViewModel);
    this.medicalExamStatuses = array;
  }

  public ngOnInit() {
    this.buildMedicalExamStatuses();
  }

  public show() {
    this.$submitted = false;
    this.entity = {
      donorRequestId: this.donorRequestId
    } as IEnterMedicalExamResultViewModel;

    return this.showModal();
  }

  public save(): Promise<any> {
    this.preloaderService.showGlobalPreloader();
    return this.donorRequestResource.submitMedicalExamResult(this.entity).then(() => {
      this.preloaderService.hideGlobalPreloader();
      this.successClose();
    });
  }

  public setSubmitted(x: boolean): boolean {
    this.$submitted = x;
    return x;
  }
}
