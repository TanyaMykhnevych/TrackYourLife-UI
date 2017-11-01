import {
  AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation
} from '@angular/core';
import {MENU} from '../../../../app/app.menu';
import {UserService} from "../../services/userService";
import {MenuComponent} from "../menu/menu.component";
import * as $ from 'jquery';
import {IUserInfo} from "../../../models/interfaces/IUserInfo";

// Do not forget to register Components in Declarations sections of App.module
@Component({
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.scss'],
  templateUrl: './sidebar.html',
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit, OnDestroy {
  @ViewChild('appMenu') menu: MenuComponent;

  // here we declare which routes we want to use as a menu in our sidebar
  public routes = []; // we're creating a deep copy since we are going to change that object

  private userChangeSb;

  constructor(private userService: UserService) {
  }

  public filterRoute(routes, claims: Array<number>) {
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
            return item.data.menu.claims.indexOf(claim) > -1;
          })[0] !== undefined;
        }

        filteredRoutes.push(item);
      }
    });

    return filteredRoutes;
  }

  public ngOnInit(): void {
    this.userChangeSb = this.userService.onUserChanged.subscribe((newUser) => {

    });

    this.updateMenuItems(this.userService.getUserInfo());
  }

  private updateMenuItems(userInfo: IUserInfo) {
    const unfilteredRoutes = $.extend(true, [], MENU);
    const userClaims = userInfo ? userInfo.claims : [];

    this.routes = unfilteredRoutes;
    const filtered = this.filterRoute(unfilteredRoutes, userClaims);

    this.menu.setMenu(filtered);
  }

  public ngOnDestroy() {
    this.userChangeSb.unsubscribe();
  }
}
