import {forwardRef, NgModule} from "@angular/core";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MenuComponent} from "./components/menu/menu.component";
import {MenuItemComponent} from "./components/menu/components/menuItem/menuItem.component";
import {PageTopBarComponent} from "./components/pageTopBar/pageTopBar.component";
import {ScrollPositionDirective} from "./directives/scrollPosition/scrollPosition.directive";
import {ProfileTopBarComponent} from "./components/profileTopBar/profileTopBar.component";
import {ActionNotifierComponent} from "./components/actionNotifier/actionNotifier";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MenuService} from "./components/menu/menu.service";
import {AppRouterService} from "./services/appRouterService";
import {RouterContainerComponent} from "./components/routerContainer/routerContainer.component";
import {PagePreloaderComponent} from "./components/pagePreloader/pagePreloader.component";
import {ConfirmationModalComponent} from "./components/confirmationModal/confirmation-modal.component";
import {TruncatePipe} from "./pipes/truncate.pipe";
import {PhoneNumberPipe} from "./pipes/phoneNumber.pipe";
import {ModalModule} from "ng2-bootstrap";
import {PreloaderService} from "./services/preloaderService";

@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    MenuItemComponent,
    PageTopBarComponent,
    ProfileTopBarComponent,
    ActionNotifierComponent,
    ScrollPositionDirective,

    RouterContainerComponent,
    PagePreloaderComponent,
    ConfirmationModalComponent,

    TruncatePipe,
    PhoneNumberPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
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
    ScrollPositionDirective,

    RouterContainerComponent,
    PagePreloaderComponent,
    ConfirmationModalComponent,

    TruncatePipe,
    PhoneNumberPipe
  ]
})
export class CoreModule {
}
