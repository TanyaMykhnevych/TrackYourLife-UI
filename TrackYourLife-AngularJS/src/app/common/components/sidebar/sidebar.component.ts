import {
  AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation
} from '@angular/core';
import {MENU} from '../../../../app/app.menu';
import {UserService} from "../../services/userService";
import {GlobalState} from "../../../global.state";
import {layoutSizes} from "../../theme.constants";
import {IClaimModel} from "../../models/user-info";
import {AuthService} from "../../services/authService";
import {MenuComponent} from "../menu/menu.component";
import * as $ from 'jquery';

// Do not forget to register Components in Declarations sections of App.module
@Component({
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.scss'],
  templateUrl: './sidebar.html',
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('appMenu') menu: MenuComponent;

  // here we declare which routes we want to use as a menu in our sidebar
  public routes = []; // we're creating a deep copy since we are going to change that object

  public menuHeight: number;
  public isMenuCollapsed = false;
  public isMenuShouldCollapsed = false;
  public isTestUser;
  private userChangeSb;


  constructor(private _elementRef: ElementRef,
              private _state: GlobalState,
              private userService: UserService,
              private authService: AuthService) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
      setTimeout(() => this.menu.selectMenuAndNotify());

    });
  }

  public filterRoute(routes, claims: Array<IClaimModel>) {
    const filteredRoutes = [];

    routes.forEach((item) => {
      if (item.children && item.children.length > 0) {
        const subFiltered = this.filterRoute(item.children, claims);

        if (subFiltered.length > 0) {
          filteredRoutes.push({
            path: item.path,
            data: item.data,
            children: subFiltered
          });
        }
      } else {
        if (item.data.menu.claims && item.data.menu.claims.length > 0) {
          const hasClaim = claims.filter(function (claim) {
            return item.data.menu.claims.indexOf(claim.type) > -1;
          })[0] !== undefined;
        }

        filteredRoutes.push(item);
      }
    });

    return filteredRoutes;
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    const isMenuShouldCollapsed = this._shouldMenuCollapse();

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  private _shouldMenuCollapse(): boolean {
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }

  public menuExpand(): void {
    this.menuCollapseStateChange(false);
  }

  public menuCollapse(): void {
    this.menuCollapseStateChange(true);
  }

  public menuCollapseStateChange(isCollapsed: boolean): void {
    this.isMenuCollapsed = isCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public updateSidebarHeight(): void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  public ngOnInit(): void {
    const unfilteredRoutes = $.extend(true, [], MENU);

      this.routes = unfilteredRoutes;
      const userInfo = this.userService.getUserInfo();
      const userClaims = userInfo ? userInfo.claims : [];
      const filtered = this.filterRoute(unfilteredRoutes, userClaims);

      this.menu.setMenu(filtered);

    if (this._shouldMenuCollapse()) {
      this.menuCollapse();
    }
  }

  public ngOnDestroy() {
    this.userChangeSb.unsubscribe();
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.updateSidebarHeight());
  }
}
