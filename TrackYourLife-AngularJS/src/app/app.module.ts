import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SysConfig} from '../environments/sysConfig';
import {StorageService} from "./common/services/storageService";
import {UserService} from "./common/services/userService";
import {AuthResource} from "./common/resources/auth.resource";
import {AccountResource} from "./common/resources/account.resource";
import {AuthService} from "./common/services/authService";
import {ActionNotifierComponent} from "./common/components/actionNotifier/actionNotifier";
import {AppRouterService} from "./common/services/appRouterService";
import {ConfirmationModalComponent} from "./common/components/confirmationModal/confirmation-modal.component";
import {PreloaderService} from "./common/services/preloaderService";
import {NotificationService} from "./common/services/notificationService";
import {PagePreloaderComponent} from "./common/components/pagePreloader/pagePreloader.component";
import {ProfileTopBarComponent} from "./common/components/profileTopBar/profileTopBar.component";
import {SidebarComponent} from "./common/components/sidebar/sidebar.component";
import {GlobalState} from "./global.state";
import {MenuComponent} from "./common/components/menu/menu.component";
import {MenuItemComponent} from "./common/components/menu/components/menuItem/menuItem.component";
import {PageTopBarComponent} from "./common/components/pageTopBar/pageTopBar.component";
import {MenuService} from "./common/components/menu/menu.service";
import {RouterModule} from "@angular/router";
import {ModalModule} from "ng2-bootstrap";
import {routing} from "./app.routing";
import {PhoneNumberPipe} from "./common/pipes/phoneNumber.pipe";
import {TruncatePipe} from "./common/pipes/truncate.pipe";
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpServiceWrapper} from "./common/base/httpServiceWrapper";
import {HttpModule} from "@angular/http";
import {PagesModule} from "./pages/pages.module";
import {ScrollPositionDirective} from "./common/directives/scrollPosition/scrollPosition.directive";
import {CommonModule} from "@angular/common";
import {AppEnums} from "./app.constants";
import {LoginModule} from "./login/login.module";

// Application wide providers
const APP_PROVIDERS = [
  GlobalState,

  AccountResource,
  AuthResource,

  StorageService,
  AuthService,
  UserService,
  NotificationService,
  SysConfig,
  HttpServiceWrapper,
  PreloaderService,
  AppRouterService
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    PagesModule,
    LoginModule,

    routing
  ],
  exports: [
    AppComponent
  ],
  providers: [
    APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
