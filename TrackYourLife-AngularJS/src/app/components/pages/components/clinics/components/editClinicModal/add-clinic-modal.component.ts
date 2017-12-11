import {Component, Input, ViewChild} from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {BaseModalComponent} from "../../../../../../common/base/baseModal.component";
import {ClinicsResource} from "../../clinics.resource";
import {IClinic} from "../../clinic.models";
import {IContentResponseWrapper} from "../../../../../../models/interfaces/apiRespone/responseWrapper";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-clinic-modal',
  templateUrl: './edit-clinic-modal.html',
  styleUrls: ['./edit-clinic-modal.scss']
})

export class AddClinicModalComponent extends BaseModalComponent<IClinic> {
  public headerText = 'Add new clinic';
  $submitted = false;

  constructor(modalService: NgbModal, private clinicsResource: ClinicsResource) {
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

    // there changes was made in markup because clinicForm == undefined here
    // this.$submitted = true;
    //
    // if (!this.clinicForm.valid) {
    //   return null;
    // }

    return this.clinicsResource.save(this.entity).then(() => {
      this.successClose();
    });
  }
}
