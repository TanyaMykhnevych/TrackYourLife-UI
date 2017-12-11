import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ICreateDonorRequestViewModel} from "../../../../donorRequest.models";
import {NgForm} from "@angular/forms";
import {IOrganInfo} from "../../../../../../../../models/interfaces/IOrganInfo";

@Component({
  selector: 'app-create-donor-request-form',
  styleUrls: ['./createDonorRequestForm.scss'],
  templateUrl: './createDonorRequestForm.html'
})
export class CreateDonorRequestFormComponent implements OnInit {
  @ViewChild('createDonorRequestForm') private createDonorRequestForm: NgForm;

  @Input('organInfos') public organInfos: Array<IOrganInfo> = [];
  @Output('formSubmitted') public formSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  public $submitted = false;
  public data: ICreateDonorRequestViewModel;

  public ngOnInit() {
    this.data = {} as ICreateDonorRequestViewModel;
  }

  public sumbitForm() {
    this.$submitted = true;

    if (!this.createDonorRequestForm.valid) {
      return;
    }

    this.formSubmitted.emit(true);
  }
}
