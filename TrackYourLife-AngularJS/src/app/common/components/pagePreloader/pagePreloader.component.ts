import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {PreloaderService} from "../../services/preloaderService";

// Do not forget to register Components in Declarations sections of App.module
@Component({
  selector: 'app-page-preloader',
  styleUrls: ['./pagePreloader.scss'],
  templateUrl: './pagePreloader.html',
  encapsulation: ViewEncapsulation.None
})
export class PagePreloaderComponent implements OnDestroy {
  public visible: boolean;

  constructor(private preloaderService: PreloaderService) {
    this.visible = false;
    this.preloaderService.setPagePreloader(this);
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  ngOnDestroy() {
    this.preloaderService.setPagePreloader(null);
  }
}
