import {forwardRef, NgModule} from "@angular/core";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MenuComponent} from "./components/menu/menu.component";
import {MenuItemComponent} from "./components/menu/components/menuItem/menuItem.component";
import {PageTopBarComponent} from "./components/pageTopBar/pageTopBar.component";
import {ProfileTopBarComponent} from "./components/profileTopBar/profileTopBar.component";
import {ActionNotifierComponent} from "./components/actionNotifier/actionNotifier";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MenuService} from "./components/menu/menu.service";
import {AppRouterService} from "./services/appRouterService";
import {RouterContainerComponent} from "./components/routerContainer/routerContainer.component";
import {PreloaderService} from "./services/preloaderService";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    MenuItemComponent,
    PageTopBarComponent,
    ProfileTopBarComponent,
    ActionNotifierComponent,

    RouterContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,

    NgbModule
  ],
  providers: [
    MenuService,
    AppRouterService,
    PreloaderService
  ],
  exports: [
    SidebarComponent,
    MenuComponent,
    MenuItemComponent,
    PageTopBarComponent,
    ProfileTopBarComponent,
    ActionNotifierComponent,

    RouterContainerComponent,
  ]
})
export class CoreModule {
}
