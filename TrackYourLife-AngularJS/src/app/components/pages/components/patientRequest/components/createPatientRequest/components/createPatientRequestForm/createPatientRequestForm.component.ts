import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ICreatePatientRequestViewModel} from "../../../../patientRequest.models";
import {IOrganInfo} from "../../../../../../../../models/interfaces/IOrganInfo";

@Component({
  selector: 'app-create-patient-request-form',
  styleUrls: ['./createPatientRequestForm.scss'],
  templateUrl: './createPatientRequestForm.html'
})

export class CreatePatientRequestFormComponent implements OnInit {
  @ViewChild('createPatientRequestForm') private createPatientRequestForm: NgForm;

  @Input('organInfos') public organInfos: Array<IOrganInfo> = [];
  @Output('formSubmitted') public formSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  public $submitted = false;
  public data: ICreatePatientRequestViewModel;

  public ngOnInit() {
    this.data = {} as ICreatePatientRequestViewModel;
  }

  public sumbitForm() {
    this.$submitted = true;

    if (!this.createPatientRequestForm.valid) {
      return;
    }

    this.formSubmitted.emit(true);
  }
}
