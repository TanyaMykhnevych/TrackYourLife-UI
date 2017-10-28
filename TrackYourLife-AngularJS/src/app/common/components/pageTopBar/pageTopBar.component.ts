import {Component, ViewEncapsulation} from '@angular/core';

import {GlobalState} from '../../../global.state';
import {ProfileTopBarComponent} from "../profileTopBar/profileTopBar.component";

// Do not forget to register Components in Declarations sections of App.module
@Component({
  selector: 'app-page-top',
  styleUrls: ['./pageTopBar.scss'],
  templateUrl: './pageTopBar.html',
  encapsulation: ViewEncapsulation.None
})
export class PageTopBarComponent {

  public isScrolled = false;
  public isMenuCollapsed = false;

  constructor(private _state: GlobalState) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
