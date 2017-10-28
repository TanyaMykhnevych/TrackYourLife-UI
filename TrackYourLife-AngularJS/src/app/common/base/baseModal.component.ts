import {ModalDirective} from "ng2-bootstrap";
import * as $ from 'jquery';
import {OnInit, ViewChild} from '@angular/core';

export class BaseModalComponent<T> implements OnInit {
  @ViewChild('modal') public modal: ModalDirective;

  resolveFunc: any;
  rejectFunc: any;
  entity: T;
  public modalDialogClass: string;

  constructor() {
    this.entity = {} as T;
  }

  ngOnInit() {
    this.modal.config = {
      backdrop: true,
      ignoreBackdropClick: true
    };
  }

  getModalClass() {
    return this.modalDialogClass;
  }

  public showModal(entity: T): Promise<any> {
    this.entity = $.extend(true, {}, entity);
    this.modal.show();

    return new Promise(function (resolve, reject) {
      this.resolveFunc = resolve;
      this.rejectFunc = reject;
    }.bind(this));
  }

  public close() {
    this.modal.hide();
    this.resolveFunc({});
  }

  public cancel() {
    this.modal.hide();
    this.rejectFunc({});
  }

  public onModalHide($event) {
    this.entity = {} as T;
  }

  public onModalHidden($event) {
  }

}
