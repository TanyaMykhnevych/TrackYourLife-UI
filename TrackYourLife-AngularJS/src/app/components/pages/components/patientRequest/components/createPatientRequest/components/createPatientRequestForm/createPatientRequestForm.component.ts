import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ICreatePatientRequestViewModel} from "../../../../patientRequest.models";
import {IOrganInfo} from "../../../../../../../../models/interfaces/IOrganInfo";
import {AppEnums} from "../../../../../../../../app.constants";

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
  public queryPriorities: Array<any>;

  constructor() {
    this.buildQueryPriorities();
  }

  public ngOnInit() {
    this.clearData();
  }

  private buildQueryPriorities() {
    var arr = new Array<any>();
    var priorityValues = AppEnums.patientQueryPriority;
    var priorityNames = AppEnums.patientQueryPriorityStrings;

    Object.keys(priorityValues).map((objectKey, index) => {
      const value = priorityValues[objectKey];
      const valueName = priorityNames[value];
      arr.push({
        id: value,
        name: valueName
      });
    });

    this.queryPriorities = arr;
  }

  public clearData() {
    this.$submitted  = false;
    this.data = {} as ICreatePatientRequestViewModel;
    this.data.queryPriority = AppEnums.patientQueryPriority.normal;
  }

  public sumbitForm() {
    this.$submitted = true;

    if (!this.createPatientRequestForm.valid) {
      return;
    }

    this.formSubmitted.emit(true);
  }
}
