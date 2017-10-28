import {ModalDirective} from "ng2-bootstrap/ng2-bootstrap";
import {Component, ViewChild, Output, Input, EventEmitter, OnInit} from '@angular/core';
import {BaseModalComponent} from "../../base/baseModal.component";

// Do not forget to register Components in Declarations sections of App.module
@Component({
  selector: 'app-confirmation-modal',
  styleUrls: ['./confirmation-modal.scss'],
  templateUrl: './confirmation-modal.html'
})
export class ConfirmationModalComponent extends BaseModalComponent<any>  implements OnInit {
  @ViewChild('modal') public modal: ModalDirective;

  @Input() confirmationQuestion: any = "";

  ngOnInit() {
    this.modal.config = {
      backdrop: true,
      ignoreBackdropClick: false
    };
  }

  public show(confirmQuestion?: string): Promise<any> {
    this.confirmationQuestion = confirmQuestion || this.confirmationQuestion || "Are you sure?";
    return super.showModal({});
  }

  setResult(result: boolean): void {
    if (result) {
      super.close();
    } else {
      super.cancel();
    }
  }
}
