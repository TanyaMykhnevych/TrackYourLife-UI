import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DonorRequestResource} from "../../../../donorRequest.resource";
import {BaseModalComponent} from "../../../../../../../../common/base/baseModal.component";
import {ILinkPatientRequestViewModel, IScheduleMedicalExamViewModel} from "../../../../donorRequest.models";
import {IClinicListItem} from "../../../../../clinics/clinic.models";
import {PatientsQueueResource} from "../../../../../../patientsQueue.resource";
import {
  IContentResponseWrapper,
  IResponseWrapper
} from "../../../../../../../../models/interfaces/apiRespone/responseWrapper";
import {PreloaderService} from "../../../../../../../../common/services/preloaderService";
import {AppEnums} from "../../../../../../../../app.constants";
import {IEnumItemViewModel} from "../../../../../../../../models/interfaces/IEnumItemViewModel";

@Component({
  selector: 'app-link-patient-request-modal',
  templateUrl: './linkPatientRequestModal.html',
  styleUrls: ['./linkPatientRequestModal.scss']
})

export class LinkPatientRequestModalComponent
  extends BaseModalComponent<ILinkPatientRequestViewModel> implements OnInit {

  @Input('donorRequestId') public donorRequestId: number;
  @Input('organInfoId') public organInfoId: number;

  public patientQueue: Array<any> = new Array();
  public selectedPatientRequest: any;
  public errorMessage: string;

  $submitted = false;

  constructor(modalService: NgbModal,
              private preloaderService: PreloaderService,
              private donorRequestResource: DonorRequestResource,
              private patientsQueueResource: PatientsQueueResource) {
    super(modalService);
  }

  public ngOnInit() {
  }

  private loadPatientQueue() {
    this.preloaderService.showGlobalPreloader();
    return this.patientsQueueResource.getPendingQueueByOrgan(this.organInfoId)
      .then((response: IContentResponseWrapper<Array<any>>) => {
        this.preloaderService.hideGlobalPreloader();
        if (response.isValid) {
          this.patientQueue = response.content;
        }
      });
  }

  public convertPriorityToString(value: number) {
    return AppEnums.patientQueryPriorityStrings[value];
  }

  public selectPatientRequest(patientRequest: any) {
    this.selectedPatientRequest = patientRequest;
    this.entity.patientRequestId = patientRequest.id;
  }

  public show() {
    this.$submitted = false;
    this.entity = {
      donorRequestId: this.donorRequestId
    } as ILinkPatientRequestViewModel;

    return this.loadPatientQueue().then(() => this.showModal());
  }

  public save(): Promise<any> {
    if (!this.selectedPatientRequest) {
      return;
    }

    return this.donorRequestResource.linkPatientRequest(this.entity).then(() => {
      this.successClose();
    });
  }

  public setSubmitted(x: boolean): boolean {
    this.$submitted = x;
    return x;
  }
}
