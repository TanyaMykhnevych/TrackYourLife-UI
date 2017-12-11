import {Component, Input, ViewChild} from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {BaseModalComponent} from "../../../../../../common/base/baseModal.component";
import {ClinicsResource} from "../../clinics.resource";
import {IClinic} from "../../clinic.models";
import {IContentResponseWrapper} from "../../../../../../models/interfaces/apiRespone/responseWrapper";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-clinic-modal',
  templateUrl: './edit-clinic-modal.html',
  styleUrls: ['./edit-clinic-modal.scss']
})

export class EditClinicModalComponent extends BaseModalComponent<IClinic> {
  public headerText = 'Edit clinic';
  $submitted = false;

  constructor(modalService: NgbModal, private clinicsResource: ClinicsResource) {
    super(modalService);
  }

  private loadClinicData(clinicId: number): Promise<IClinic> {
    return this.clinicsResource.getClinicById(clinicId)
      .then((result: IContentResponseWrapper<IClinic>) => {
        this.entity = result.content;
        return this.entity;
      });
  }

  public show(clinicId: number) {
    this.$submitted = false;
    return this.loadClinicData(clinicId).then(() => this.showModalWithEntity(this.entity));
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
