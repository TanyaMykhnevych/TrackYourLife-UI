import {Component, Input, ViewChild} from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {BaseModalComponent} from "../../../../../../common/base/baseModal.component";
import {IContentResponseWrapper} from "../../../../../../models/interfaces/apiRespone/responseWrapper";
import {NgForm} from "@angular/forms";
import {OrganInfosResource} from "../../../../organInfos.resource";
import {IOrganInfo} from "../../manageOrganInfos.models";

@Component({
  selector: 'app-add-organ-info-modal',
  templateUrl: './edit-organ-info-modal.html',
  styleUrls: ['./edit-organ-info-modal.scss']
})

export class AddOrganInfoModalComponent extends BaseModalComponent<IOrganInfo> {
  public headerText = 'Add new organ info';
  $submitted = false;

  constructor(modalService: NgbModal, private organInfosResource: OrganInfosResource) {
    super(modalService);
  }

  public show() {
    this.$submitted = false;

    return this.showModal();
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
