import {Component, Input, ViewChild} from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {BaseModalComponent} from "../../../../../../common/base/baseModal.component";
import {IContentResponseWrapper} from "../../../../../../models/interfaces/apiRespone/responseWrapper";
import {NgForm} from "@angular/forms";
import {IOrganInfo} from "../../manageOrganInfos.models";
import {OrganInfosResource} from "../../../../organInfos.resource";

@Component({
  selector: 'app-edit-organ-info-modal',
  templateUrl: './edit-organ-info-modal.html',
  styleUrls: ['./edit-organ-info-modal.scss']
})

export class EditOrganInfoModalComponent extends BaseModalComponent<IOrganInfo> {
  public headerText = 'Edit organ info';
  $submitted = false;

  constructor(modalService: NgbModal, private organInfosResource: OrganInfosResource) {
    super(modalService);
  }

  private loadOrganInfoData(organInfoId: number): Promise<IOrganInfo> {
    return this.organInfosResource.getOrganInfoById(organInfoId)
      .then((result: IContentResponseWrapper<IOrganInfo>) => {
        this.entity = result.content;
        return this.entity;
      });
  }

  public show(organInfoId: number) {
    this.$submitted = false;
    return this.loadOrganInfoData(organInfoId).then(() => this.showModalWithEntity(this.entity));
  }

  public setSubmitted(x: boolean): boolean {
    this.$submitted = x;
    return x;
  }

  public save(): Promise<any> {

    return this.organInfosResource.save(this.entity).then(() => {
      this.successClose();
    });
  }
}
