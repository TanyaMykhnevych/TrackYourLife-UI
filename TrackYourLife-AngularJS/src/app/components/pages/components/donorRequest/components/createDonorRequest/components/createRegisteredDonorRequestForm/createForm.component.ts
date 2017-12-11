import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ICreateDonorRequestViewModel} from "../../../../donorRequest.models";
import {NgForm} from "@angular/forms";
import {IOrganInfo} from "../../../../../../../../models/interfaces/IOrganInfo";
import {UserService} from "../../../../../../../../common/services/userService";

@Component({
  selector: 'app-create-registered-donor-request-form',
  styleUrls: ['./createForm.scss'],
  templateUrl: './createForm.html'
})
export class CreateRegisteredDonorRequestFormComponent implements OnInit {
  @ViewChild('createRegisteredDonorRequestForm') private createRegisteredDonorRequestForm: NgForm;

  @Input('organInfos') public organInfos: Array<IOrganInfo> = [];
  @Output('formSubmitted') public formSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  public $submitted = false;
  public data: ICreateDonorRequestViewModel;

  constructor(private userService: UserService) {
  }

  public ngOnInit() {
    this.data = {} as ICreateDonorRequestViewModel;
  }

  public sumbitForm() {
    this.$submitted = true;

    if (!this.createRegisteredDonorRequestForm.valid) {
      return;
    }

    this.data.email = this.userService.getUserInfo().username;

      this.formSubmitted.emit(true);
  }
}
