import {AfterViewInit, Component, ViewContainerRef} from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private _router: Router,
              private viewContainerRef: ViewContainerRef) {

    this._router.events.subscribe(eventData => {
      this.onRouteChange(eventData);
    });
  }

  private onRouteChange(eventData: any) {
    if (eventData instanceof NavigationStart) {
      console.log('NavigationStart');
      $('#preloader').addClass('operation-loader').show();
    }

    if (eventData instanceof NavigationError) {
      console.log("Navigation Error");
      debugger;
    }

    if (eventData instanceof NavigationEnd) {
      $('#preloader').hide();
    }
  }

  public ngAfterViewInit(): void {
  }
}
