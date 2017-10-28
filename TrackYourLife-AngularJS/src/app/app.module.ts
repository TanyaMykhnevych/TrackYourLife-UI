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
import {ScrollPositionDirective} from "./common/components/directives/scrollPosition/scrollPosition.directive";
import {defaultRouting} from "./app.routing";
import {PhoneNumberPipe} from "./common/pipes/phoneNumber.pipe";
import {TruncatePipe} from "./common/pipes/truncate.pipe";
import {LoginComponent} from "./pages/login/login.component";
import {FormsModule} from "@angular/forms";
import {HttpServiceWrapper} from "./common/base/httpServiceWrapper";
import {HttpModule} from "@angular/http";
import {loginRouting} from "./pages/login/login.routing";

@NgModule({
  declarations: [
    AppComponent,

    // App Components
    ActionNotifierComponent,
    ConfirmationModalComponent,
    PagePreloaderComponent,
    ProfileTopBarComponent,
    SidebarComponent,
    MenuComponent,
    MenuItemComponent,
    PageTopBarComponent,
    LoginComponent,

    // Directives
    ScrollPositionDirective,

    // Pipes
    PhoneNumberPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    ModalModule,
    FormsModule,

    defaultRouting,
    loginRouting
  ],
  providers: [
    SysConfig,
    GlobalState,
    HttpServiceWrapper,

    // Resources
    AuthResource,
    AccountResource,

    // Services
    StorageService,
    AuthService,
    UserService,
    AppRouterService,
    PreloaderService,
    NotificationService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
